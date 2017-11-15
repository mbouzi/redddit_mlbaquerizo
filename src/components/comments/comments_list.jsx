import React from 'react';
import CommentsListItem from './comments_list_item';


const CommentsList = ({comments}) => {
	const commentItems = comments.map( (comment) => {
		return (
			<CommentsListItem
				key={comment.name}
				comment={comment}/>
		)
	});

	return (
		<div className="row">
			<ul className="col-xs-12">
				{commentItems}
			</ul>
		</div>
	)
}

export default CommentsList;