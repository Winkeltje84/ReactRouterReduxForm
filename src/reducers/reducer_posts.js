import { FETCH_POSTS } from '../actions/index'
import _ from 'lodash'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      const state = _.mapKeys(action.payload.data, 'id')
      // this lodash function iterates over object and places its 'id' key value
      // as the key of every instance:
      // { { id: 2, content="hi"}} -----> { 2: { id: 2, content="hi"} } 
      return state

    default:
      return state;

  }

  return state;
}
