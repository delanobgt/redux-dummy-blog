import axios from 'axios'

const API_KEY = 'test'

export const FETCH_POST_BY_ID = 'FETCH_POST_BY_ID'
export function fetchPostById(postId) {
  const request = axios.get(`http://reduxblog.herokuapp.com/api/posts/${postId}?key=${API_KEY}`)
  return {
    type: FETCH_POST_BY_ID,
    payload: request
  }
}

export const FETCH_POSTS = 'FETCH_POSTS'
export function fetchPosts() {
  const request = axios.get(`http://reduxblog.herokuapp.com/api/posts?key=${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export const CREATE_POST = 'CREATE_POST'
export function createPost(post, callback) {
  const request = axios.post(`http://reduxblog.herokuapp.com/api/posts?key=${API_KEY}`, post)
  return {
    type: CREATE_POST,
    payload: request
  }
}

export const DELETE_POST = 'DELETE_POST'
export function deletePost(postId, callback) {
  const request = axios.delete(`http://reduxblog.herokuapp.com/api/posts/${postId}?key=${API_KEY}`)
  return {
    type: DELETE_POST,
    payload: request
  }
}
