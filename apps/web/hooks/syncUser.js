"use client";
import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
export default function useSyncUser() {
  const { getToken, isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    const syncUser = async () => {
      try {
        const token = await getToken();
        console.warn("Syncing user with token:", token);
        if (!isSignedIn || !token) return;

        const rawres = await fetch(
          `${"http://20.204.216.223:5000"}/api/user/sync`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          },
        );

        const res = await rawres.json();
        console.log(res);
      } catch (err) {
        console.error("Error syncing user:", err);
      }
    };
    syncUser();
  }, [isLoaded, isSignedIn]);
}
