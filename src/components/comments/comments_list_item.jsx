import React, {Component} from 'react';
import CommentsList from './comments_list';
import timeSince from '../../timeSince';

class CommentsListItem extends Component {
	constructor(props){
		super(props);

		this.state = {
			replies: props.comment.replies
		}
	}

	render() {
		const hasReplies = !!this.props.comment.replies.length;
		let replyDiv = null;
		if(hasReplies){
			replyDiv = (
					<CommentsList className="comment-replies" comments={this.props.comment.replies} />
			);
		}
		return (
			<li className="row comment-list-item">
				<div>
					<div className="col-xs-12 comment-body">
						<p className="small"><span className="comment-author">{this.props.comment.author}</span> {this.props.comment.score} points {timeSince(this.props.comment.created_utc)}</p>
						<div dangerouslySetInnerHTML={{__html:this.props.comment.body_html}} />
					</div>
				</div>
				{replyDiv}
			</li>
		);
	}
	
}

export default CommentsListItem;