import data from "../../data/data.json";
import Link from "next/link";
import Image from "next/image";

export default function HomePage(props) {
  const lang = props.lang;
  const curHomePageData = data[lang];

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4 mb-4">
          <Image
            src="/profile_picture_3x.jpg"
            height={360}
            width={400}
            layout="responsive"
            alt="profile"
          />
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
