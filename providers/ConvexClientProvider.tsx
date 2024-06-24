"use client";
import React, { useState, useEffect } from "react";
import {
  ClerkProvider,
  useAuth,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";

type Props = {
  children: React.ReactNode;
};

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "";
const CLERK_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "";
const convex = new ConvexReactClient(CONVEX_URL);

const ConvexClientProvider = ({ children }: Props) => {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <SignedIn>{children}</SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;
