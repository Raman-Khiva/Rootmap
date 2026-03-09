import Image from "next/image";

import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="w-screen min-h-screen flex items-center justify-center">
      <div className="flex gap-2 items-center">
        <SignUpButton />
        <SignInButton />
        <UserButton />
      </div>
    </main>
  );
}
