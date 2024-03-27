import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, imgUrl, avatarUrl, author, topic} = blogItem

  return (
    <li className="blg-item">
      <Link to={`/blogs/${id}`} className="link-item">
        <div className="blog-item-container">
          <img src={imgUrl} alt={`item${id}`} className="topic-img" />
          <div className="blog-item-info">
            <p className="blog-topic">{topic}</p>
            <h1 className="blog-title">{title}</h1>
            <div className="avatar-img">
              <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
              <p className="blog-author">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
