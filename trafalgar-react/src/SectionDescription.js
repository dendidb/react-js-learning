import sdImg1 from "./assets/images/dummy/section-description-1.png";
import sdImg2 from "./assets/images/dummy/section-description-2.png";
import SectionDescriptionItem from "./SectionDescriptionItem";

const SectionDescription = () => {
  const sdItem = [
    {
      image: sdImg1,
      title: "Leading healthcare providers",
      desc: "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, its not just work. We take pride in the solutions we deliver",
    },
    {
      image: sdImg2,
      title: "Download our mobile apps",
      desc: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
    },
  ];

  return sdItem.map((v, i) => {
    return (
      <div
        key={`sd-${i}`}
        className={`section-description ${
          i == 1 ? "section-description--reverse" : ""
        }`}
        id="apps"
      >
        <div className="container">
          <SectionDescriptionItem
            image={v.image}
            title={v.title}
            desc={v.desc}
          />
        </div>
      </div>
    );
  });
};

export default SectionDescription;
