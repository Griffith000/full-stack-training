"use client";

// 👉 Imports needed to use TanStack Query in our app
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

// This component wraps our entire app
// It provides TanStack Query to all child components
export default function Providers({ children }: { children: React.ReactNode }) {
  // 🧠 We create ONE QueryClient instance
  // - QueryClient manages cache, requests, loading & errors :so its like the brain that remeber everything

  const [queryClient] = useState(() => new QueryClient());

  return (
    // 🧩 QueryClientProvider makes the client available everywhere
    // Any component inside can now use:
    // - useQuery
    // - refetch, cache, loading, errors, etc.
    <QueryClientProvider client={queryClient}>
      {/* 👇 All pages and components of the app go here */}
      {children}
    </QueryClientProvider>
  );
}
