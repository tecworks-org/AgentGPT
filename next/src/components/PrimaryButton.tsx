import Button from "../ui/button";
import type { ReactNode } from "react";
import React from "react";

type PrimaryButtonProps = {
  children: ReactNode | string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export default function PrimaryButton({ children, onClick, icon }: PrimaryButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="group rounded-full border border-black bg-white text-black transition duration-200 ease-in-out hover:hover:bg-neutral-200 focus-visible:bg-white/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
    >
      {icon}
      {children}
    </Button>
  );
}
