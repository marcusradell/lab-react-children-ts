"use client";

import toast, { Toaster } from "react-hot-toast";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};

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
