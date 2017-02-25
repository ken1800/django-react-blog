import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { PageHeader, Panel, Label } from 'react-bootstrap';

import { fetchPosts } from '../actions/index';

import Post from './post';

class PostList extends Component {
    componentWillMount() {
	console.log(">>>> src/components/post_list.js:");
	console.log("Calling fetchPosts() action creator.");		
	this.props.fetchPosts();
	
    }

    renderPosts() {
	const posts = this.props.posts.results;
	console.log(">>>> src/components/post_list.js:");
	console.log("Rendering posts.");		

	if (!posts) {
	    return (
		<div></div>
	    );
	};
	return posts.map((post) => {
	    return (
		<Post key={post.slug}
		      title={post.title}
		      body={post.body}
		      tags={post.tags}
		      link={`post/${post.slug}`}/>
	    )
	});
    }
    render() {
	return (
	    <div>
		<PageHeader> Recent Posts </PageHeader>
		{ this.renderPosts() }
	    </div>
	);
    }
}


function mapStateToProps(state) {
    return { posts: state.posts.all };
}
/* First argument allows to access state */
/* Second allows to fire actions */
export default connect(mapStateToProps, { fetchPosts })(PostList);