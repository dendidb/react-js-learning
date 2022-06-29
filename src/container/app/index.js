import imgSD1 from "../../assets/img/dummy/leading-healthcare-providers.png";
import imgSD2 from "../../assets/img/dummy/download-our-mobile-apps.png";

import {
  Header,
  HeroBanner,
  OurServices,
  SectionDescription,
  Testimony,
  Blog,
  Modal,
  Footer,
} from "components";

function App() {
  const dataSection1 = {
    img: imgSD1,
    title: "Leading healthcare providers",
    desc: "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver",
    button: {
      to: "leading-healthcare-providers.html",
      text: "Learn more",
    },
  };
  const dataSection2 = {
    img: imgSD2,
    title: "Download our mobile apps",
    desc: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
    button: {
      to: "download.html",
      text: "Learn more",
    },
  };

  return (
    <>
      <Header />
      <div className="main-site">
        <HeroBanner />
        <OurServices />
        <SectionDescription data={dataSection1} />
        <SectionDescription
          data={dataSection2}
          reverse={true}
          arrowIcon={true}
        />
        <Testimony />
        <Blog />
        <Modal />
      </div>
      <Footer />
    </>
  );
}

export default App;
