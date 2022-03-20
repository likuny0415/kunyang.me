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

  let destination;
  // pathName could be "/zh", "/", "resume"...
  // when pathName is 'zh' or '/', set destination to '/' for redirect
  if (pathName === "/zh" || pathName == "/") {
    destination = "";
  } else {
    const lastPartOfPath = pathsAddress[pathsAddress.length - 1];
    destination = lastPartOfPath;
  }

  let isZh;
  // 1. pathNanme is '/' or '/en' or '/en/...': lands on En Version of pages
  // 2. pathName is '/zh' or '/zh/..: lands on Zh Version of pages
  if (pathName === "/" || pathsAddress.includes("en")) {
    navbarInfo = data["en"];
    isZh = false;
  } else {
    navbarInfo = data["zh"];
    isZh = true;
  }

  return (
    <div
      className="collapse navbar-collapse justify-content-between"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link href={navbarInfo.home.path}>
            <a
              className={clsx(
                `${destination == "" ? "text-primary" : ""}`,
                "nav-link"
              )}
            >
              {navbarInfo.home.name}
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href={navbarInfo.resume.path}>
            <a
              className={clsx(
                `${destination == "resume" ? "text-primary" : ""}`,
                "nav-link"
              )}
              id="resume"
            >
              {navbarInfo.resume.name}
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href={navbarInfo.projects.path}>
            <a
              className={clsx(
                `${destination == "projects" ? "text-primary" : ""}`,
                "nav-link"
              )}
              id="projects"
            >
              {navbarInfo.projects.name}
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href={navbarInfo.posts.path}>
            <a
              className={clsx(
                `${destination == "posts" ? "text-primary" : ""}`,
                "nav-link"
              )}
              id="posts"
            >
              {navbarInfo.posts.name}
            </a>
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li
          className={clsx(
            `${isZh ? "" : "active d-none d-md-block"}`,
            "nav-item"
          )}
        >
          <Link href={`/en/${destination}`}>
            <a
              className={clsx(
                `${navbarInfo.language.isEn ? "text-primary" : ""}`,
                "nav-link"
              )}
            >
              English
            </a>
          </Link>
        </li>
        <li
          className={clsx(
            `${isZh ? "active d-none d-md-block" : ""}`,
            "nav-item"
          )}
        >
          <Link href={`/zh/${destination}`}>
            <a
              className={clsx(
                `${navbarInfo.language.isEn ? "" : "text-primary"}`,
                "nav-link"
              )}
            >
              中文
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
