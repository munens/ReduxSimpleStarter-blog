import React, { Component } from 'react';
import { connect } from 'react-redux'
// unnescessary due to using 2nd way shown below: 
// import { BindActionCreators } from 'redux'; 
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends Component {
  
  componentWillMount(){
    console.log(this.props.fetchPosts());
    
  }

  render() {
    return (
      <div className="text-xs-right">
        <Link to="/posts/new" className="btn btn-primary">
          Add Post
        </Link>
        <div>All posts: </div>
      </div>  
      
    );
  }
}

/* !st way:
function mapDispatchToProps(dispatch) {
    return BindActionCreators({fetchPosts}, dispatch);
}
export default connect(null, mapDispatchToProps)(PostIndex);
*/

/* 2nd way:
export default connect(null, {fetchPosts: fetchPosts})(PostIndex)
 */
/* or even further: */
export default connect(null, {fetchPosts})(PostIndex)