import logger from "../utils/logger.js";
import prisma from "../config/prisma.js";

export const syncUser = async (req, res) => {
  logger.enter(syncUser);
  try {
    const clerkId = req.auth.userId;
    const { data } = req.body;
    const { email } = data;

    let user = await prisma.user.findUnique({
      clerkId: clerkId,
    });

    if (!user) {
      user = await prisma.user.create({
        clerkId: clerkId,
        email: email,
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
      error: error,
    });
  }
};
