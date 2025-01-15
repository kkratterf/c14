import type React from 'react';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="bg-red-400">{children}</section>;
}
