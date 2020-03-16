import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import { fetchUsers } from "../actions";
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"></i>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <div>{this.props.users.name}</div>
          </div>
        </div>
      )
    })
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts, users: state.users };
}

export default connect(mapStateToProps, { fetchPosts, fetchUsers })(PostList);
