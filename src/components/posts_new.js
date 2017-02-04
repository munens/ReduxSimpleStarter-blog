import React, { Component } from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

export default class PostsNew extends Component {

  // reduxForm has some helper methods that are injecting the values from the fields here to props 
  // - that is hence available in this component. We can access them with 'this.props':
  // - we want to access 'handleSubmit' - which is the function we want to call when a form is submitted.
  render() {
    const { handleSubmit } = this.props; // same as: const handleSubmit = this.props.handleSubmit
    const { fields: {title, categories, content } } = this.props; //same as: const title = this.props.fields.title ..etc.

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>

        <h3>Create a new post:</h3>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" className="form-control" { ...title } />
        </div>

        <div className="form-group">
          <label>Categories:</label>
          <input type="text" className="form-control" { ...categories } />
        </div>
        
        <div className="form-group">
          <label>Content:</label>
          <textarea type="text" className="form-control" { ...content } ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button> 
        
      </form>
    );
  }
}

// give redux the feilds we want it to be in charge of and the name of the form:
export default ReduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
}, null, {createPost})(PostsNew);

// When the user makes changes to the input the value of each of the fields is making 
// changes in the global applicaiton state. THe difference in the way we did this before 
// is that we are defining these values in the global Component state rather than on 
// the component level.

// similar to this:
/*
state === {
  form: {
    PostsNewForm: {
      title: '....',
      categories: '....',
      content: '....'

    }
  }
}
*/