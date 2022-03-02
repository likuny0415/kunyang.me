/* eslint-disable @next/next/no-html-link-for-pages */

export default function Info() {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/resume">
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/projects">
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/posts">
          Posts
        </a>
      </li>
    </ul>
  );
}
