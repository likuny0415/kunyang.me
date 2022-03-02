import Navbar from "./Header";

export default function Layout({ children }) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}
