import React, {Component} from 'react';
import redddit from '../../snoowrap';

import ArticleListItem from '../index/article_list_item';
import CommentsList from './comments_list';

class Comments extends Component{
	constructor(props){
		super(props);

		this.state = {
			article: '',
			comments: [],
			interval: setInterval(() => {
				this.getArticle(this.props.match.params.id);
			}, 5000)
		}

		this.getArticle(props.match.params.id);
	}

	componentWillUnmount() {
		clearInterval(this.state.interval);
	}

	getArticle(id) {
		redddit.getSubmission(id).fetch()
			.then((submission) => {
				console.log(submission);
				const subm = JSON.parse(JSON.stringify(submission));
				const comm = subm.comments;
				this.setState({article: subm, comments: comm});
			}).catch((err) => {
				console.log(err);
			});
	}

	render() {
		if(this.state.article === ''){
			return (
				<div>Loading...</div>
			)
		}
		return (
			<div>
				<ArticleListItem article={this.state.article} />
				<CommentsList comments={this.state.comments} />
			</div>
		);
	}
}

export default Comments;