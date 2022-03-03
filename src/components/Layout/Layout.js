import Header from "./Header";

export default function Layout({ children }) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
