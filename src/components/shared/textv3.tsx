import { cn } from "@/lib/utils";
import React from "react";

export default function TextV3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("text-2xl font-medium", className)}>{children}</div>
  );
}
