import { useState } from "react";
import { Tweet } from "./Tweet";

const DEFAULT_TWEET = [
  {
    id: 0,
    name:"Seb", 
    content:"Je vais bien", 
    like:1000
  },
  {
    id: 1,
    name:"Alex", 
    content:"Cool", 
    like:30
  },
  {
    id: 2,
    name:"Denis", 
    content:"Super !", 
    like:12
  },
  {
    id: 3,
    name:"Nico", 
    content:"Fun", 
    like:400
  },
]

function App(){
  const [tweets, setTweets] = useState(DEFAULT_TWEET);

  const onDelete = (tweetId) =>{
    
  }

  const tweetLists = tweets.map(tweet => {
    return <Tweet id={tweet.id} key={tweet.id} name={tweet.name} content={tweet.content} like={tweet.like}
    onDelete={(id) => {

    }}/>
  })

  return(
    <div>
      <div className="tweet-container">{tweetLists}</div>
    </div>
  );
}

export default App;