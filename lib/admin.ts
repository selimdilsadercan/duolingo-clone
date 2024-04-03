import { auth } from "@clerk/nextjs";

const adminIds = ["user_2eFDbYsz3e6DI7rjkHyTJ3iHqpn"];

export const isAdmin = () => {
  const { userId } = auth();
  if (!userId) return false;

  return adminIds.indexOf(userId) !== -1;
};
