import React from 'react';
import { shallow } from 'enzyme';
import CommentsList from '../comments_list';

it('renders without crashing', () => {
	const comments = [{

approved_at_utc:null,approved_by:null,archived:false,author:"dashauskat",author_flair_css_class:null,author_flair_text:null,banned_at_utc:null,banned_by:null,body:"133 of 150 electorates voted yes in the majority, 95 by more than 60%. Just 17 electorates voted no.\n\n7,817,247 people voted yes.\n4,873,987 voted no - just 38.4% of the clear responses.\n\n79.5% of peop…",body_html:"<div class=\"md\"><p>133 of 150 electorates voted yes in the majority, 95 by more than 60%. Just 17 electorates voted no.</p>\n\n<p>7,817,247 people voted yes.\n4,873,987 voted no - just 38.4% of the clear…",can_gild:true,can_mod_post:false,collapsed:false,collapsed_reason:null,controversiality:0,created:1510729888,created_utc:1510701088,depth:0,distinguished:null,downs:0,edited:false,gilded:0,id:"dptvtcl",is_submitter:false,likes:null,link_id:"t3_7czn23",mod_reports:Array[0],name:"t1_dptvtcl",num_reports:null,parent_id:"t3_7czn23",permalink:"/r/worldnews/comments/7czn23/australias_samesex_marriage_postal_survey_616_yes/dptvtcl/",removal_reason:null,replies: [],report_reasons:null,saved:false,score:2419,score_hidden:false,stickied:false,subreddit:"worldnews",subreddit_id:"t5_2qh13",subreddit_name_prefixed:"r/worldnews",subreddit_type:"public",ups:2419,user_reports: []
	}]
  shallow(<CommentsList comments={comments}/>);
});