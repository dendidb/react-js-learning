import HeroBannerItem from './HeroBannerItem';
import bannerImg1 from './assets/images/dummy/home-banner-1.png';
import bannerImg2 from './assets/images/dummy/section-description-1.png';

const HeroBanner = () => {

  const bannerItem = [
    {
      image: bannerImg1,
      title: 'Leading healthcare providers',
      desc: 'Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver'
    },
    {
      image: bannerImg2,
      title: 'Leading healthcare providers',
      desc: 'Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver'
    },
  ]
  
  return (
    // hero banner
    <div className="hero-banner">
      { bannerItem.map((v, i) => {
        return (
          <HeroBannerItem key={`hb-${i}`} image={v.image} title={v.title} desc={v.desc} />
        )
      })}
    </div>
  )
}

export default HeroBanner;