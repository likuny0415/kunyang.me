import data from "../../data/data.json";
import Link from "next/link";

export default function HomePage(props) {
  const lang = props.lang;
  const curHomePageData = data[lang];

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4 mb-4">
          <picture>
            <source
              media="(max-width: 767.98px)"
              srcSet="/profile_picture_3x.jpg 1080w, /profile_picture_2x.jpg 720w, /profile_picture_3x.jpg 360w"
              sizes="calc(100vw - 30px)"
            />
            <img
              src="/profile_picture.jpg"
              srcSet="/profile_picture_3x.jpg 1080w, /profile_picture_2x.jpg 720w, /profile_picture_3x.jpg 360w"
              sizes="(min-width: 1200px) 350px, (min-width: 992px) 290px, (min-width: 768px) 210px, calc(100vw - 30px)"
              className="img-fluid"
            />
          </picture>
        </div>
        <div className="col-md-8">
          <h2>{curHomePageData.introduction.title}</h2>
          <p>{curHomePageData.introduction.content}</p>
          <h2>{curHomePageData.contacts.title}</h2>
          <div className="row mb-3">
            <div className="col-lg-3 col-sm-4 col-5">
              {curHomePageData.contacts.mobile}
            </div>
            <div className="col-lg-9 col-sm-8 col-7 font-weight-bold">
              <Link href="tel:+1-(857)-296-2566">
                <a>{curHomePageData.contacts.mobileNumber}</a>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-4 col-5">
              {curHomePageData.contacts.email}
            </div>
            <div className="col-lg-9 col-sm-8 col-7 font-weight-bold">
              <Link href="/li.kuny@northeastern.edu">
                <a>li.kuny@northeastern.edu</a>
              </Link>
            </div>
          </div>
          <h2>{curHomePageData.links.title}</h2>
          <div className="row mb-3">
            <div className="col-lg-3 col-sm-4 col-5">Github</div>
            <div className="col-lg-9 col-sm-8 col-7 font-weight-bold">
              <Link href={curHomePageData.links.githubUrl}>
                <a>Kunyang</a>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-4 col-5">LinkedIn</div>
            <div className="col-lg-9 col-sm-8 col-7 font-weight-bold">
              <Link href={curHomePageData.links.linkedinUrl}>
                <a>Kunyang</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
