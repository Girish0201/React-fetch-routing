// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsData} = props

  return (
    <div className="blog-list-container">
      <ul className="blogs-list">
        {blogsData.map(eachItem => (
          <BlogItem blogDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}
export default BlogList
