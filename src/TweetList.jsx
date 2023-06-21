import { Tweet } from "./Tweet";

export function TweetList({tweets, onDelete, onLike}) {

    if(!tweets || tweets.length === 0){
        return "No tweets";
    }

    return(
        <div className="tweet-container">{tweets.map((tweet) => {
            return(
              <Tweet id={tweet.id}
                key={tweet.id} 
                name={tweet.name} 
                content={tweet.content} 
                like={tweet.like}
                onDelete={onDelete}
                onLike={onLike}/>
            )
          })}</div>
    )
}