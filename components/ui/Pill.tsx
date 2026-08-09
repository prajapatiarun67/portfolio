import React from "react";

interface PillProps {
  children: React.ReactNode;
}

export function Pill({ children }: PillProps) {
  return <span className="pill">{children}</span>;
}
