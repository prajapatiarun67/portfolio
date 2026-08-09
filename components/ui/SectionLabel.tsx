import React from "react";

interface SectionLabelProps {
  number: string;
  children: React.ReactNode;
}

export function SectionLabel({ number, children }: SectionLabelProps) {
  return (
    <div className="section-label">
      {number} — {children}
    </div>
  );
}
