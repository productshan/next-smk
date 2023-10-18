"use client";
import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ClientOnlyPortal({ children, selector }: { children: React.ReactNode; selector: string }) {
  var ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  if (ref.current) {
    return mounted ? createPortal(children, ref.current) : null;
  }
}
