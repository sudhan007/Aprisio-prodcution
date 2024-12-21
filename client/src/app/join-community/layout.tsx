import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

export default function JoinLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <section className="min-h-screen">
    <NavBar />
      {children}
      <div className="mt-14">
      <Footer  />
      </div>
     
    </section>
      
    </>
  );
}

