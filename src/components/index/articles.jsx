import React, { Component } from 'react';
import redddit from '../../snoowrap';
import ArticleList from './article_list';
import PaginationContainer from './pagination_container';

class Articles extends Component{
	constructor(props){
		super(props);
		this.state = {
      articles: [],
      before: '',
      after: '',
      firstItem: '',
      lastItem: ''
    };
    this.getArticles();
	}

	getArticles(options) {
    const firstReq = !options;
    if(!options) options = {limit:5};
    options.limit = 5;

    redddit.getHot(options)
      .then((listing) => {
        if(listing){
          this.setState({
            articles:JSON.parse(JSON.stringify(listing)),
            before: options.before || '',
            after: options.after || '',
            firstItem: listing[0].name,
            lastItem: listing[4].name
          });
          if(firstReq) this.setState({firstSubm: listing[0].name});
        }
        
      }).catch((err) => {
        console.log(err);
      });
  }

	render(){
    if(!this.state.articles.length){
      return (
        <div>Loading...</div>
      )
    }
		return (
		  <div>
		    <ArticleList articles={this.state.articles} />
		    <PaginationContainer
		      onPageChange={(options) => this.getArticles(options)}
          firstSubm={this.state.firstSubm}
		      before={this.state.firstItem}
		      after={this.state.lastItem}
		    />
		  </div>
		)
	}
}

export default Articles;