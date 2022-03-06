import ResumeTemp from "../../components/Homepage/resume";
import Titlt from "../../components/Homepage/title";

export default function Resume() {
  return (
    <>
      <Titlt landing={"en_resume"} />
      <ResumeTemp version={"en_resume"} />
    </>
  );
}
