const express = require('express');
const connect = require('./config/database');
const TweetRepository= require('./repository/tweet.repository');
const Comment=require('./models/comment');

const app = express();

app.listen(3000,async()=>{
    console.log('server started')
    await connect();
    console.log('db connected');
    // await Tweet.create({content:'testing',userEmail:'test@com'})
    // const tweet= await Tweet.create({content:'testing4',userEmail:'testing4@com'});
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.getWithComments('6473542850990b7fc9fab217');
    // const tweet = await tweetRepo.create({content:'tweet with comment schema',userEmail:'user@com'});
    // const comment = await Comment.create({content:'new comment',commentBy:"user1@com"});
    // tweet.comments.push(comment);
    // // tweet.comments.push({
    //     content:'first comment',
    //     commentBy:'user1@com'
    // })
    // await tweet.save();
    console.log(tweet)
})