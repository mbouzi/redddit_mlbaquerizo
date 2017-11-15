import React from 'react';
import {Link} from 'react-router-dom';
import timeSince from '../../timeSince';

const ArticleListItem = ({article}) => {
	const domain = article.domain;
	let articleUrl = null;
	if(domain.indexOf("self.") === 0){
		articleUrl = <Link to={`/comments/${article.name}`}>{article.title}</Link>;
	} else {
		articleUrl = <a href={article.url}>{article.title}</a>;
	}
	const subr = `/${article.subreddit_name_prefixed}`;
	const comments = article.num_comments === 1 ? 'comment' : 'comments';
	const numComments = article.num_comments;
	const img = article.thumbnail;
	const imgStyle = {width: 70};

	const imgHtml = () => {
		switch(img){
			case 'image': return <i className="fa fa-picture-o"></i>
			case 'default': return <i className="fa fa-link fa-flip-horizontal"></i>
			case 'self': return <i className="fa fa-newspaper-o"></i>
			default: return <img src={img} alt="" style={imgStyle} />
		}
	}

	return (
		<li className="row middle-xs article-list-item">
			<div className="col-xs-1 center-xs article-upvotes">
				{article.score}
			</div>
			<div className="col-xs-2 center-xs article-thumbnail">
				<a href={article.url}>{imgHtml()}</a>
			</div>
			<div className="col-xs-9 article-details">
				<p>{articleUrl} <span className="small"> ({article.domain})</span></p>
				<p className="small">submitted {timeSince(article.created_utc)} by {article.author} to {article.subreddit_name_prefixed}</p>
				<p className="small"><Link to={`/comments/${article.name}`}>{numComments + ' ' + comments}</Link></p>
			</div>
		</li>
	)
}