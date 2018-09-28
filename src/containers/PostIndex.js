import _ from 'lodash'
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const postList = !this.props.posts ? (
      <p>No post yet.</p>
    ) : (
      _.map(this.props.posts, post => {
        return (
          <div key={post.id} >
            <Link to={`/${post.id}`}>{post.title}</Link>
          </div>
        )
      })
    )

    return (
      <Fragment>
        <h1>Post Index</h1>
        <hr/>
        <Link to='/new'>New Post</Link>
        <hr/>
        { postList }
      </Fragment>
    )
  }

}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {
  fetchPosts
})(PostIndex)
