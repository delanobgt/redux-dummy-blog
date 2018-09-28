import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPostById, deletePost } from '../actions'

class PostDetail extends Component {

  componentDidMount() {
    this.props.fetchPostById(this.props.match.params.post_id)
  }

  render() {
    const { deletePost, post } = this.props
    if (!post) return <p>Loading..</p>
    
    return (
      <Fragment>
        <h1>Post Detail</h1>
        <Link to='/'>Back</Link>
        <hr/>
        <h1>{post.title}</h1>
        <h3>{post.categories}</h3>
        <h6>{post.content}</h6>
        <button onClick={() => deletePost(post.id, () => this.props.history.push('/'))}>Delete</button>
      </Fragment>
    )
  }

}

function mapStateToProps(state, ownProps) {
  return {
    post: state.posts[+(ownProps.match.params.post_id)]
  }
}

export default connect(mapStateToProps, {
  fetchPostById, deletePost
})(PostDetail)
