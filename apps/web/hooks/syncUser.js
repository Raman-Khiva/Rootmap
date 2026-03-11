"use client";
import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
export default function useSyncUser() {
  const { getToken, isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    const syncUser = async () => {
      const token = await getToken();

      const rawres = await fetch(`${"http://localhost:5000"}/api/user/sync`, {
        method: "POST",
        body: JSON.stringify({
          email: "example@text",
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const res = await rawres.json();
      console.log(res);
    };
    syncUser();
  }, [isLoaded, isSignedIn]);
}
