import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

// notation below allows as to use the 'reducer' from 'redux-form' with another name.
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
