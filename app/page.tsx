"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function HomePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.replace("/auth/login");
  };

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/auth/login");
    }
  }, [isPending, session, router]);

  if (isPending) {
    return (
      <div className="flex min-h-svh items-center justify-center">
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!session) {
    router.replace("/auth/sign-in");
    return null;
  }

  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-lg border p-6 shadow-sm text-center">
        <h1 className="text-xl font-medium">Welcome, {session.user.name || "User"}!</h1>
        <p className="text-sm text-muted-foreground">{session.user.email}</p>
        <Button onClick={handleSignOut} variant="destructive">
          Sign Out
        </Button>
      </div>
    </div>
  );
}
