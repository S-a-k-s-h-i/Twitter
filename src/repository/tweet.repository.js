const Tweet = require('../models/tweet');

class TweetRepository{
    async create(data){
        try{
         const tweet = await Tweet.create(data);
         return tweet;
        }catch(err){
            throw err;
        }
    }
    
    async get(id){
        try{
           const tweet = await Tweet.findById(id);
           return tweet;
        }catch(err){
            throw err;
        }
    }
    
    async getWithComments(id){
        try{
           const tweet = await Tweet.findById(id).populate({path:'comments'});
           return tweet;
        }catch(err){
            throw err;
        }
    }

    async update(id,data){
        try{
            const tweet = await Tweet.findByIdAndUpdate(id,data,{new:true});
           return tweet;
        }catch(err){
            throw err;
        }
    }

    async remove(){
        try{
           const tweet = await Tweet.findOneAndRemove(id);
           return tweet;
        }catch(err){
            throw err;
        }
    }
}

module.exports = TweetRepository;