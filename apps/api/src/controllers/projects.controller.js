import prisma from "../config/prisma.js";
import logger from "../utils/logger.js";

export const addProject = async (req, res) => {
  logger.enter("Add Project Controller");
  try {
    let { userId } = req.auth();
    const clerkId = userId;
    const { project } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        clerkId: clerkId,
      },
    });
    if (!user) {
      logger.error(`User with clerkId ${clerkId} not found`);
      res.status(404).json({
        success: false,
        message: "User not found",
        error: "NOT FOUND",
      });
    }
    userId = user.id;
    const createdProject = await prisma.project.create({
      data: {
        ...project,
        user: {
          connect: { id: userId },
        },
      },
    });
    logger.success(
      `Project added successfully for user with clerkId ${clerkId}`,
    );
    logger.info(`Created project: ${JSON.stringify(createdProject)}`);

    res.status(201).json({
      success: true,
      message: "Project create Successfully",
      data: { projectCreated: createdProject },
    });
  } catch (error) {
    logger.error(`Error while adding project. ERROR: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Failed to add project",
      error: error.message,
    });
  }
};
