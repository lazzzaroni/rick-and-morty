import { type ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1 className="container m-auto flex h-32 w-80 items-center justify-center text-center text-3xl sm:text-4xl">
        Rick and Morty Characters
      </h1>
      <main className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
        {children}
      </main>
    </>
  );
}
