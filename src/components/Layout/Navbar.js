/* eslint-disable @next/next/no-html-link-for-pages */
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import data from "../../data/data.json";

export default function Navbar(props) {
  const router = useRouter();
  const pathName = router.pathname;

  // En/Zh version of navbar info
  let navbarInfo;
  const pathsAddress = pathName.split("/");

  // 1. pathNanme is '/' or '/en' or '/en/...': lands on En Version of pages
  // 2. pathName is '/zh' or '/zh/..: lands on Zh Version of pages
  if (pathName === "/" || pathsAddress.includes("en")) {
    navbarInfo = data["en"];
  } else {
    navbarInfo = data["zh"];
  }

  return (
    <div
      className="collapse navbar-collapse justify-content-between"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">
            {navbarInfo.home}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/resume">
            {navbarInfo.resume}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/projects">
            {navbarInfo.projects}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/posts">
            {navbarInfo.posts}
          </a>
        </li>
      </ul>
      <ul className="navbar-nav">
        {/* <li className="nav-item active d-none d-md-block">
          <a
            href="en"
            className={clsx(`${isEn ? "text-primary" : ""}`, "nav-link")}
          >
            English
          </a>
        </li>
        <li className="nav-item">
          <a
            href="zh"
            onClick={handleChange}
            className={clsx(`${isEn ? "" : "text-primary"}`, "nav-link")}
          >
            中文
          </a>
        </li> */}
      </ul>
    </div>
  );
}
