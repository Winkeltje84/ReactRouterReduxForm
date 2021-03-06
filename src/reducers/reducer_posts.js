import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index'
import _ from 'lodash'

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload); // look at state object, if it has
      // a key with the id passed on as payload, then drop it & return the new
      // object --> this will make sure this is immediatly dropped &
      // will make the application faster
    case FETCH_POST:
      // const post = action.payload.data;    // getting data from api & setting it to post
      // const newState = { ...state };       // creating a new state
      // newState[post.id] = post;            // adding post to the state with key of its id
      // console.log(newState);
      // return newState;

      // below is ES6 equivalent to above ES5
      return { ...state, [action.payload.data.id]: action.payload.data };

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
