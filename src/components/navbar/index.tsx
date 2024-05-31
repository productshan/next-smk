"use client";
import React, { useState, useEffect, useRef } from "react";
import Item from "./item";
import Desc from "./desc.tsx";
import Link from "next/link";
import Image from "next/image";
import { navbar_icon } from "@/assets";
import DescMobile from "./descMobile";
import { navItems } from "@/data";

function useOutsideAlerter(ref: any, onPush: any) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        onPush("");
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default function Navbar() {
  const [mobileDescActive, setMobileDescActive] = useState(false);
  const [active, setActive] = useState("");
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setActive(""));
  useOutsideAlerter(wrapperRef, () => setMobileDescActive(false));

  return (
    <div ref={wrapperRef} className="sticky top-0 w-full bg-primary-300 z-50" onClickCapture={() => setActive("")}>
      <div className="w-5/6 flex flex-col sm:block lg:w-[95%] xl:w-[80%] 2xl:w-[60%] mx-auto">
        <div className="w-full py-2 flex flex-row items-center justify-between">
          <Link
            href={"/"}
            className="flex h-[80px]"
            onClick={() => {
              setActive("");
              setMobileDescActive(false);
            }}
          >
            <Image src={navbar_icon} alt="navbar-icon" className="h-[80px] w-auto" />
          </Link>
          <div className="hidden sm:flex ml-4 w-full flex-row justify-around">
            {navItems.map((data, key) => {
              return (
                <Item
                  key={key}
                  text={data.text}
                  onClick={() => (active !== data.text ? setActive(data.text) : console.log("first"))}
                  isActive={active === data.text}
                />
              );
            })}
          </div>
          <div onClick={() => setMobileDescActive(!mobileDescActive)} className="justify-center items-center flex w-[48px] h-[48px] sm:hidden">
            <i className={`fa ${mobileDescActive ? "text-white" : "text-gray"} fa-solid fa-bars w-auto`}></i>
          </div>
        </div>
        {navItems.map((data, key) => {
          return (
            <Desc
              onClick={() => setActive("")}
              key={key}
              isActive={active === data.text}
              description={data.description ? data.description : "Default"}
              items={data.items ? data.items : [{ title: "Empty", path: "Empty" }]}
            />
          );
        })}
      </div>
      {/* Star Region Mobile Responsive */}
      <div
        className={`w-full bg-white transition transform ease-in-out duration-300 ${
          mobileDescActive ? "translate-y-0 pt-4" : "-translate-y-[300px] max-h-[0px] opacity-0"
        } sm:hidden`}
      >
        <div className={`flex flex-col w-full mx-auto`}>
          {navItems.map((data, key) => {
            return (
              <div key={key}>
                <div className={`${active === data.text ? "" : "mb-4"} ml-4`}>
                  <Item text={data.text} onClick={() => (active !== data.text ? setActive(data.text) : console.log("first"))} isActive={active === data.text} />
                </div>
                <div onClick={() => setMobileDescActive(false)}>
                  <DescMobile isActive={active === data.text} items={data.items ? data.items : [{ title: "Empty", path: "Empty" }]} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* End Region Mobile Responsive */}
    </div>
  );
}
