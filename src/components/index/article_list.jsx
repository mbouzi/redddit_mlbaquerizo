import React from 'react';
import ArticleListItem from './article_list_item';

const ArticleList = ({articles}) => {
	const articleItems = articles.map( (article) => {
		return (
			<ArticleListItem
				key={article.name}
				article={article}

			/>
		)
	});
	return (
		<div className="row">
			<ul className="col-xs-12 article-list">
				{articleItems}
			</ul>
		</div>
	)
}

export default ArticleList;