import { bannerData, osData, sdLeadingData, sdDownloadData, testimonyData, blogData } from 'assets/dummy';
import { Header, Footer, HeroBanner, OurServices, SectionDescription, Testimony, Blog } from 'components';

function App() {
	
  return (
		<>
			<Header />
			<div className="main-site">
				<HeroBanner data={bannerData} />
				<OurServices data={osData} />
				<SectionDescription data={sdLeadingData} />
				<SectionDescription data={sdDownloadData} reverse={true} arrowIcon={true} />
				<Testimony data={testimonyData} />
				<Blog data={blogData} />
				{/* 
				<Modal /> */}
			</div>
			<Footer />
		</>
  );
}

export default App;
