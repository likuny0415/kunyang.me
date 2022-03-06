import HomePage from "../../components/Homepage/home";
import Titlt from "../../components/Homepage/title";

export default function Index() {
  return (
    <>
      <Titlt landing={"zh_home"} />
      <HomePage lang={"zh_homepage"} />
    </>
  );
}
