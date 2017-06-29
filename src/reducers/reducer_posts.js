import { FETCH_POSTS } from '../actions/index'
import _ from 'lodash'

export default function(state = {}, action) {
  console.log('state before reducer: ', state)
  switch (action.type) {
    case FETCH_POSTS:
      console.log("will this work?")
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
