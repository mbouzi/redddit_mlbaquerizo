import snoowrap from 'snoowrap';
import cred from './snoowrap.config.js'

const snoo = new snoowrap(cred);
snoo.config({continueAfterRatelimitError: true});

export default snoo;

/*// Submitting a link to a subreddit
r.getSubreddit('gifs').submitLink({
  title: 'Mt. Cameramanjaro',
  url: 'https://i.imgur.com/n5iOc72.gifv'
});

// Printing a list of the titles on the front page
r.getHot().map(post => post.title).then(console.log);

// Extracting every comment on a thread
r.getSubmission('4j8p6d').expandReplies({limit: Infinity, depth: Infinity}).then(console.log)

// Automating moderation tasks
r.getSubreddit('some_subreddit_name').getModqueue({limit: 100}).filter(someRemovalCondition).forEach(flaggedItem => {
  flaggedItem.remove();
  flaggedItem.subreddit.banUser(flaggedItem.author);
});

// Automatically creating a stickied thread for a moderated subreddit
r.getSubreddit('some_subreddit_name')
  .submitSelfpost({title: 'Daily thread', text: 'Discuss things here'})
  .sticky()
  .distinguish()
  .approve()
  .assignFlair({text: 'Daily Thread flair text', css_class: 'daily-thread'})
  .reply('This is a comment that appears on that daily thread');
  // etc. etc.

// Printing the content of a wiki page
r.getSubreddit('AskReddit').getWikiPage('bestof').content_md.then(console.log);*/