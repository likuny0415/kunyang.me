import data from "../../data/data.json";
import Image from "next/image";

export default function HomePage(props) {
  const lang = props.lang;
  const curHomePageData = data[lang];

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4 mb-4">
          <picture>
            <img
              src="/profile_picture.png"
              alt="profile pictures"
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
              <a href="tel:+1-(857)-296-2566">
                {curHomePageData.contacts.mobileNumber}
              </a>
            </div>
            <div className="col-lg-3 col-sm-4 col-5">
              {curHomePageData.contacts.email}
            </div>
            <div className="col-lg-9 col-sm-8 col-7 font-weight-bold">
              <a href=":mailto:li.kuny@northeastern.edu">
                li.kuny@northeastern.edu
              </a>
            </div>
          </div>
          <h2>{curHomePageData.links.title}</h2>
          <div className="row mb-3">
            <div className="col-lg-3 col-sm-4 col-5">Github</div>
            <div className="col-lg-9 col-sm-8 col-7 font-weight-bold">
              <a href={curHomePageData.links.githubUrl}>Kunyang</a>
            </div>
            <div className="col-lg-3 col-sm-4 col-5">LinkedIn</div>
            <div className="col-lg-9 col-sm-8 col-7 font-weight-bold">
              <a href={curHomePageData.links.linkedinUrl}>Kunyang</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
