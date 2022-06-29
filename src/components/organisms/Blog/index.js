
import { Fragment } from 'react';
import { BlogItem, Button } from 'components';

const Blog = ( { data }) => {
	const { title, button, item } = data;

  return (
    <div className="blog">
      <div className="container">
        <div className="blog__head">
          <h2 className="text-title">{title}</h2>
        </div>
        <div className="blog__body">
          <div className="blog__list js-blog-list">
            {
							item.map((val, idx) => {
								return (
									<Fragment key={idx}>
										<BlogItem data={val} />
									</Fragment>
								)
							}) 
						}
					</div>
        </div>
        <div className="blog__btn">
					<Button type="link" variant="secondary" to={button.to}>
						{button.text}
					</Button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
