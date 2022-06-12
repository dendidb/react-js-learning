import features1 from "./assets/images/dummy/features-1.svg";
import features2 from "./assets/images/dummy/features-2.svg";
import features3 from "./assets/images/dummy/features-3.svg";
import features4 from "./assets/images/dummy/features-4.svg";
import features5 from "./assets/images/dummy/features-5.svg";
import features6 from "./assets/images/dummy/features-6.svg";
import OurServiceItem from "./OurServiceItem";
import Button from "./Button";

const OurService = () => {
  const ourServiceItem = [
    {
      image: features1,
      title: "Search Doctor",
      desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    },
    {
      image: features2,
      title: "Online pharmacy",
      desc: "Buy your medicines with our mobile application with a simple delivery system",
    },
    {
      image: features3,
      title: "Consultation",
      desc: "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      image: features4,
      title: "Details info",
      desc: "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      image: features5,
      title: "Emergency care",
      desc: "You can get 24/7 urgent care for yourself or your children and your lovely family",
    },
    {
      image: features6,
      title: "Tracking",
      desc: "Track and save your medical history and health data",
    },
  ];

  return (
    // our-services
    <div className="service" id="find-a-doctor">
      <div className="container">
        <div className="service__head">
          <h3 className="text-title">Our services</h3>
          <p className="text-desc">
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>
        <div className="service__body">
          <div className="service__list">
            {ourServiceItem.map((v, i) => {
              return (
                <OurServiceItem
                  key={`os-${i}`}
                  image={v.image}
                  title={v.title}
                  desc={v.desc}
                />
              );
            })}
          </div>
        </div>
        <div className="service__footer">
          <Button type="link" variant="secondary" to="#learnMore">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OurService;
