import { Inter } from "next/font/google";
import Appwrite from "./components/Appwrite";
import { useAuth, useUser, SignInButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

// FIXME - Bug not working in custom domain i.e host.thingsxyz.co , cors error stuff.

export default function Home() {
  const { isLoaded } = useAuth();
  const { user } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (!user) {
    return (
      <>
        <main
          className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
          <SignInButton mode="modal">
            <div className="cursor-pointer block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 bg-gray-50">
              Log in
            </div>
          </SignInButton>
        </main>
      </>
    );
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Appwrite />

      <div>
        {/* TODO - Signout btn */}
      </div>
    </main>
  );
}
