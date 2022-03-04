import Link from "next/link";
import { useRouter } from "next/router";

export default function Url() {
  const router = useRouter();
  console.log(router.pathname.split("/")[1]);
  return (
    <div>
      <Link href="/about">{router.pathname}</Link>
    </div>
  );
}
