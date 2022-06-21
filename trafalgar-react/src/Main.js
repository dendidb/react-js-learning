import imgS01 from "./assets/images/dummy/section-description-1.png";
import imgS02 from "./assets/images/dummy/section-description-2.png";
import SectionDescription from "./SectionDescription";
import HeroBanner from "./HeroBanner";
import Header from "./Header";
import Footer from "./Footer";
import Tambahan from "./Tambahan";
import OurServices from "./OurServices";
import Blog from "./Blog";
import Testimonials from "./Testimonials";

function App() {
  const dataSection1 = {
    image: imgS01,
    title: "Leading healthcare providers",
    desc: "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, its not just work. We take pride in the solutions we deliver",
    button: {
      to: "/service",
      text: "Learn More",
    },
  };
  const dataSection2 = {
    image: imgS02,
    title: "Download our mobile apps",
    desc: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
    button: {
      to: "/providers",
      text: "Download",
    },
  };

  return (
    <>
      <Header />
      <div className="main-site">
        <HeroBanner />
        <OurServices />
        <Tambahan />
        <SectionDescription data={dataSection1} />
        <SectionDescription
          data={dataSection2}
          reverse={true}
          arrowIcon={true}
        />
        <Testimonials />
        <Blog />
      </div>
      <Footer />
    </>
  );
}

export default App;
