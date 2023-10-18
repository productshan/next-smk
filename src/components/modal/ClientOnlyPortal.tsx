"use client";
import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ClientOnlyPortal({ children, selector }: { children: React.ReactNode; selector: string }) {
  var ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  if (ref.current) {
    useEffect(() => {
      ref.current = document.querySelector(selector);
      setMounted(true);
    }, [selector]);

    return mounted ? createPortal(children, ref.current) : null;
  }
}
