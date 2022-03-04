/* eslint-disable @next/next/no-html-link-for-pages */

import { useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Navbar />
      </div>
    </nav>
  );
}
