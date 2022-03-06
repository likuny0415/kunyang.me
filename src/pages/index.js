import HomePage from "../components/Homepage/home";
import Titlt from "../components/Homepage/title";

export default function Home() {
  return (
    <>
      <Titlt landing={"en_home"} />
      <HomePage lang={"en_homepage"} />
    </>
  );
}
