import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    isFetched: true,
    fetchedData: {},
  }

  componentDidMount() {
    this.getItemDetatil()
  }

  getItemDetatil = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      topic: data.topic,
      author: data.author,
      content: data.content,
      imgUrl: data.image_url,
      avatarUrl: data.avatar_url,
    }

    this.setState({isFetched: false, fetchedData: updatedData})
  }

  render() {
    const {isFetched, fetchedData} = this.state
    const {title, author, content, imgUrl, avatarUrl} = fetchedData
    return (
      <div>
        {isFetched ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="item-detail-container">
            <div className="blg-item-details-cont">
              <h1 className="details-title">{title}</h1>
              <div className="author-details-info">
                <img className="avatar-details " src={avatarUrl} alt={author} />
                <p className="author-name-details">{author}</p>
              </div>
              <div className="img-container-details ">
                <img className="details-topic-img" src={imgUrl} alt={title} />
              </div>
              <p className="details-topic-content">{content}</p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
