import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {
    isFetched: true,
    fetchedData: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)

    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      author: eachItem.author,
      topic: eachItem.topic,
      imgUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
    }))

    this.setState({isFetched: false, fetchedData: updatedData})
  }

  render() {
    const {isFetched, fetchedData} = this.state
    return (
      <div className="list-container">
        {isFetched ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="blg-list">
            {fetchedData.map(eachItem => (
              <BlogItem key={eachItem.id} blogItem={eachItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
