import _ from 'lodash'
import * as Actions from '../actions'

export default function (state = {}, action) {
  switch (action.type) {
    case Actions.FETCH_POST_BY_ID:
      return {...state, [action.payload.data.id]: action.payload.data}
    case Actions.FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id')
    case Actions.CREATE_POST:
      console.log('create', action)
      return {...state, [action.payload.data.id]: action.payload.data}
    case Actions.DELETE_POST:
      console.log('delete', action)
      if (action.payload) {
        return state
      } else return state
  }
  return state
}
