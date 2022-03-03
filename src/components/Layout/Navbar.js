/* eslint-disable @next/next/no-html-link-for-pages */
export default function Navbar(props) {
  const language = props.language;
  let navbarInfo;
  if (language === "en") {
    navbarInfo = {
      home: "Home",
      resume: "Resume",
      projects: "Projects",
      posts: "Posts",
    };
  } else if (language === "zh") {
    navbarInfo = {
      home: "首页",
      resume: "简历",
      projects: "项目",
      posts: "文章",
    };
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
        <li className="nav-item active d-none d-md-block">
          <a href="en" className="nav-link">
            English
          </a>
        </li>
        <li className="nav-item">
          <a href="zh" className="nav-link">
            中文
          </a>
        </li>
      </ul>
    </div>
  );
}
