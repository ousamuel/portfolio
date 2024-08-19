"use client";
import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { Image, Divider } from "@nextui-org/react";
import { Context } from "./providers";

export default function Header({ hide }) {
  const { isOpen, setIsOpen } = useContext(Context);

  const github = "https://github.com/ousamuel";
  const linkedIn = "https://www.linkedin.com/in/samuel-ou-0510s/";
  const email = "mailto:samuelou510@gmail.com";
  return (
    <nav className="navbar px-10 bg-transparent">
      {/* <div className="fixed ">hello</div> */}
      <span className="float-right font-bold text-2xl flex">
        <Link
          color="foreground"
          className="image-rep mx-2 pt-[3px]"
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logos/linkedin.svg"
            alt="linkedin logo"
            width="25px"
            className="rounded-none"
          />
        </Link>
        <Link
          color="foreground"
          className="image-rep mx-2 mt-1 py-0 opacity-50 bg-white rounded-full"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/logos/githubblack.svg" alt="github logo" width="23px" />
        </Link>
      </span>
    </nav>
  );
}

{
  /* <div
  className="flex pt-1 dropbox"
  onClick={() => setIsOpen((prevstate) => !prevstate)}
>
  <div className={isOpen ? "dropdown open " : "dropdown pr-2}"}>
    <svg
      className={"arrow1"}
      width="25px"
      viewBox="5 5 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(180)"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
          fill="#f4f2d2"
        ></path>{" "}
      </g>
    </svg>
    <svg
      className="arrow2"
      width="25px"
      viewBox="4 4 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
          fill="#f4f2d2"
        ></path>{" "}
      </g>
    </svg>
  </div>

  <div href="/" className="items-center justify-center float-left pl-2">
    <Image
      src="/images/SO.png"
      alt="logo"
      className="so-logo rounded-none"
    />
  </div>
</div> */
}
{
  /* <div className={isOpen ? "dropdown-menu open " : "dropdown-menu"}>
  <ul>
    <li>
      <Link
        color="foreground"
        className="link mx-2"
        href="/"
        onClick={() => setIsOpen(false)}
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        color="foreground"
        className="link mx-2"
        href="#about"
        onClick={() => setIsOpen(false)}
      >
        About
      </Link>
    </li>
    <li>
      <Link
        color="foreground"
        className="link mx-2"
        href="/#projects"
        onClick={() => setIsOpen(false)}
      >
        Projects
      </Link>
    </li>
    <li>
      <Link
        color="foreground"
        className="link mx-2"
        href="/#contact-me"
        onClick={() => setIsOpen(false)}
      >
        Contact
      </Link>
    </li>
  </ul>
</div> */
}
