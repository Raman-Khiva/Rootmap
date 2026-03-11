import logger from "../utils/logger.js";
import prisma from "../config/prisma.js";

export const syncUser = async (req, res) => {
  logger.enter("Sync User Controller");
  try {
    const auth = req.auth();
    logger.info(`Received auth() object: ${JSON.stringify(auth)}`);
    const clerkId = auth.userId;
    let user = await prisma.user.findUnique({
      where: {
        clerkId: clerkId,
      },
    });

    if (!user) {
      user = await prisma.user.create({
        data: { clerkId: clerkId },
      });
    }
    res.json({
      status: "success",
      message: "User synced successfully",
      data: {
        user: user,
      },
    });
  } catch (error) {
    res.json({
      status: "error",
      message: "Failed to sync user",
      error: error.message,
    });
  }
};
