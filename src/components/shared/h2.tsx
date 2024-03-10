import React from "react";

export default function H2({ children }: { children: React.ReactNode }) {
  return <div className="text-2xl font-semibold text-teal-800">{children}</div>;
}
