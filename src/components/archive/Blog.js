import img1 from '../../assets/img/dummy/disease-detection.jpg';
import img2 from '../../assets/img/dummy/herbal-medicines.jpg';
import img3 from '../../assets/img/dummy/natural-care.jpg';

import BlogItem from './BlogItem';

const Blog = () => {

  const dataBLog = {
		title: 'Check out our latest article',
		item: [
			{
				img: img1,
				title: 'Disease detection, check up in the laboratory Disease detection, check up in the laboratory',
				desc: 'In this case, the role of the health laboratory is very important to do a disease detection...',
				to: 'disease-detection.html'
			},
			{
				img: img2,
				title: 'Herbal medicines that are safe for consumption',
				desc: 'Herbal medicine is very widely used at this time because of its very good for your health...',
				to: 'herbal-medicines.html'
			},
			{
				img: img3,
				title: 'Natural care for healthy facial skin',
				desc: 'A healthy lifestyle should start from now and also for your skin health There are some...',
				to: 'natural-care.html'
			}
		]
	}

  return (
    <div className="blog">
      <div className="container">
        <div className="blog__head">
          <h2 className="text-title">{dataBLog.title}</h2>
        </div>
        <div className="blog__body">
          <div className="blog__list js-blog-list">
            {
              dataBLog.item.map((v, i) => {
								return (
									<BlogItem key={`b-${i}`} img={v.img} title={v.title} desc={v.desc} to={v.to}  />
								)
              }) 
            }
					</div>
        </div>
        <div className="blog__btn">
          <a className="btn btn--secondary" href="index.html">View all</a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
