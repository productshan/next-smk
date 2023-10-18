"use client";
import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ClientOnlyPortal({ children, selector }: { children: React.ReactNode; selector: string }) {
  const ref = useRef<Element | null>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  const Ele = new Element();

  return mounted ? createPortal(children, ref.current ? ref.current : Ele) : null;
}
