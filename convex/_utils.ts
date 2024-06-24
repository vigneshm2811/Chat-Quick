import { QueryCtx, MutationCtx } from "./_generated/server";

export const getUserByClerkId = async ({
  ctx,
  clerkId,
}: {
  ctx: QueryCtx | MutationCtx;
  clerkId: string;
}) => {
  return await ctx.db
    .query("user")
    .withIndex("by_clerkId", (q) => q.eq("clerkId", clerkId))
    .unique();
};
