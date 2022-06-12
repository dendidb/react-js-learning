import blog1 from "./assets/images/dummy/blog-1.jpg";
import blog2 from "./assets/images/dummy/blog-2.jpg";
import blog3 from "./assets/images/dummy/blog-3.jpg";
import BlogItem from "./BlogItem";
import Button from "./Button";

const Blog = () => {
  const blogItem = [
    {
      image: blog1,
      title: "Disease detection, check up in the laboratory",
      desc: "In this case, the role of the health laboratory is very important to do a disease detection...",
    },
    {
      image: blog2,
      title: "Herbal medicines that are safe for consumption",
      desc: "Herbal medicine is very widely used at this time because of its very good for your health",
    },
    {
      image: blog3,
      title: "Natural care for healthy facial skin",
      desc: "A healthy lifestyle should start from now and also for your skin health. There are some",
    },
  ];

  return (
    <div className="blog" id="about-us">
      <div className="container">
        <div className="blog__title">
          <h3 className="text-title">Check out our latest article</h3>
        </div>
        <div className="blog__content">
          <div className="blog__list">
            {blogItem.map((v, i) => {
              return (
                <BlogItem
                  key={`b-${i}`}
                  image={v.image}
                  title={v.title}
                  desc={v.desc}
                />
              );
            })}
          </div>
        </div>
        <div className="blog__btn">
          <Button type="link" to="#readMore" variant="secondary">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
