import { FETCH_POSTS, FETCH_POST } from '../actions/index'
import _ from 'lodash'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      const post = action.payload.data;    // getting data from api & setting it to post
      const newState = { ...state };       // creating a new state
      newState[post.id] = post;            // adding post to the state with key of its id
      console.log(newState);
      return newState;

    case FETCH_POSTS:
      const new_state =  _.mapKeys(action.payload.data, 'id')
      // this lodash function iterates over object and places its 'id' key value
      // as the key of every instance:
      // { { id: 2, content="hi"}} -----> { 2: { id: 2, content="hi"} }
      return new_state
      // you CAN NOT do 'const state = ...' becaue you do not want to change state!
      // you only want to return a whole new different object (= new_state  in this case)

    default:
      return state;

  }
}
