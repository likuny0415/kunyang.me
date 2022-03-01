import Link from "next/link";
import navbar from "../data/navbar";
import React from "react";

export default function About() {
  return (
    <ul>
      {navbar.map((link) => {
        <Link href={link.path} passHref>
          <li>{link.name}</li>
        </Link>;
      })}
    </ul>
  );
}
