import type { ReactNode } from "react";

export default function TodoBanner({ children }: { children: ReactNode }) {
  return <div className="todo-banner">TODO (fill in before publishing): {children}</div>;
}
