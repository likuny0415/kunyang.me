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
          <a
            className={clsx(
              `${destination == "" ? "text-primary" : ""}`,
              "nav-link"
            )}
            href={navbarInfo.home.path}
          >
            {navbarInfo.home.name}
          </a>
        </li>
        <li className="nav-item">
          <a
            className={clsx(
              `${destination == "resume" ? "text-primary" : ""}`,
              "nav-link"
            )}
            href={navbarInfo.resume.path}
            id="resume"
          >
            {navbarInfo.resume.name}
          </a>
        </li>
        <li className="nav-item">
          <a
            className={clsx(
              `${destination == "projects" ? "text-primary" : ""}`,
              "nav-link"
            )}
            href={navbarInfo.projects.path}
            id="projects"
          >
            {navbarInfo.projects.name}
          </a>
        </li>
        <li className="nav-item">
          <a
            className={clsx(
              `${destination == "posts" ? "text-primary" : ""}`,
              "nav-link"
            )}
            href={navbarInfo.posts.path}
            id="posts"
          >
            {navbarInfo.posts.name}
          </a>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li
          className={clsx(
            `${isZh ? "" : "active d-none d-md-block"}`,
            "nav-item"
          )}
        >
          <a
            href={`/en/${destination}`}
            className={clsx(
              `${navbarInfo.language.isEn ? "text-primary" : ""}`,
              "nav-link"
            )}
          >
            English
          </a>
        </li>
        <li
          className={clsx(
            `${isZh ? "active d-none d-md-block" : ""}`,
            "nav-item"
          )}
        >
          <a
            href={`/zh/${destination}`}
            className={clsx(
              `${navbarInfo.language.isEn ? "" : "text-primary"}`,
              "nav-link"
            )}
          >
            中文
          </a>
        </li>
      </ul>
    </div>
  );
}
