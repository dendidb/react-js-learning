import sdImg1 from './assets/images/dummy/section-description-1.png'
import sdImg2 from './assets/images/dummy/section-description-2.png'
import SectionDescriptionItem from './SectionDescriptionItem';


const SectionDescription = () => {

  const sdItem = [
    {
      image: 'sdImg1',
      title: 'Leading healthcare providers',
      desc: 'Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, its not just work. We take pride in the solutions we deliver'
    },
    {
      image: sdImg2,
      title: 'Download our mobile apps',
      desc: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely',
    },
  ]

  return (
    <div className="section-description" id="apps">
      <div className="container">
          { sdItem.map((v, i) => {
            return (
              <SectionDescription key={`sd-${i}`} image={v.image} title={v.title} desc={v.desc} />
            )
          })}
      </div>
    </div>
  )
}

export default SectionDescription;