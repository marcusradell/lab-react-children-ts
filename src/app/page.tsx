"use client";

import toast, { Toaster } from "react-hot-toast";
import { Button } from "./button";

const notify = () => toast("Hi!");

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Toaster />
      <Button onClick={notify}>
        <h1>Say hi!</h1>
      </Button>
    </main>
  );
}
