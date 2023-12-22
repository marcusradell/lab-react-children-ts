"use client";

import toast, { Toaster } from "react-hot-toast";
import { Button } from "./button";
import { useState } from "react";

const notify = () => toast("Hi!");

export default function Home() {
  const [name, setName] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Toaster />
      <label htmlFor="name">Name</label>
      <input
        className="text-black"
        id="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Button onClick={notify}>
        <h1>Say hi!</h1>
        <span>...and you will get a greeting back.</span>
      </Button>
    </main>
  );
}
