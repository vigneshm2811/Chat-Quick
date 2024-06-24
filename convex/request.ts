import { ConvexError, v } from "convex/values";
import { mutation } from "./_generated/server";
import { getUserByClerkId } from "./_utils";

export const create = mutation({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    console.log("Identity:", identity); // Log the identity for debugging

    if (!identity) {
      throw new ConvexError("Unauthorized");
    }

    if (args.email === identity.email) {
      throw new ConvexError("can't send a request to yourself");
    }

    const currentUser = await getUserByClerkId({
      ctx,
      clerkId: identity.subject,
    });

    console.log("Current User:", currentUser); // Log the current user for debugging

    if (!currentUser) {
      throw new ConvexError("User not found");
    }

    const receiver = await ctx.db
      .query("user")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();

    console.log("Receiver:", receiver); // Log the receiver for debugging

    if (!receiver) {
      throw new ConvexError("User could not be found");
    }

    const requestAlreadySent = await ctx.db
      .query("requests")
      .withIndex("by_receiver_sender", (q) =>
        q.eq("receiver", receiver._id).eq("sender", currentUser._id)
      )
      .unique();
    if (requestAlreadySent) {
      throw new ConvexError("Request already sent");
    }

    const requestAlreadyReceived = await ctx.db
      .query("requests")
      .withIndex("by_receiver_sender", (q) =>
        q.eq("receiver", currentUser._id).eq("sender", receiver._id)
      )
      .unique();

    if (requestAlreadyReceived) {
      throw new ConvexError("This user has already sent you a request");
    }

    const request = await ctx.db.insert("requests", {
      sender: currentUser._id,
      receiver: receiver._id,
    });

    return request;
  },
});
