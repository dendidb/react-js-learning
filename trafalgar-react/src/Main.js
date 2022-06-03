import HeroBanner from "./HeroBanner"
import OurServices from "./OurServices"
import Blog from "./Blog"
import Testimonials from "./Testimonials"
import SectionDescription from "./SectionDescription"

function App() {
  return (
    <>
      <div className="main-site main-site--hide js-main-site">
        <HeroBanner />
        <OurServices />
        <Testimonials />
        <Blog />
        <SectionDescription />
      </div>
    </>
  )
}

export default App;
