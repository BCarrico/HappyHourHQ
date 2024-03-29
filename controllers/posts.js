const Mongoose = require("mongoose");
const ObjectId  = require('mongoose').ObjectID;
const Post = require("../models/HH");


const User = require("../models/User");
const { post } = require("../routes/main");


module.exports = {
    createHH: async (req, res) => {
        try {
          console.log()
          await Post.create({
            name: req.body.name,
            address: req.body.address,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            website: req.body.website,
            zipcode: req.body.zipcode,
            state: req.body.state,
            city: req.body.city,
            phone: req.body.phone,
            user: req.user.id,
            monday: req.body.monday,
            tuesday: req.body.tuesday,
            wednesday: req.body.wednesday,
            thursday: req.body.thursday,
            friday: req.body.friday,
            saturday: req.body.saturday,
            sunday: req.body.sunday,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            ratingAvg: 0,
            drinks: req.body.drinks,
            food: req.body.food
          });
          console.log("HH has been added!");
          res.status(201).json({
            message: {
              msgBody: 'Success! Happy Hour Created.'
            }
          });
        } catch (err) {
          console.log(err);
        }
      },

      getHHPost: async (req, res) => {
        console.log("Trying to get HH Post from API")
        console.log(req.params.id)
        try {
          const post = await Post.findById(req.params.id);
          res.json(post);
          console.log(post)
        } catch (err) {
          console.log(err);
        }
      }, 

      getHHData: async (req, res) => {
        console.log("Trying to get HH Data from API")
        
        try {
          const post = await Post.find().sort({ ovRating: "desc" }).lean();
          res.json(post);
          console.log(post)
        } catch (err) {
          console.log(err);
        }
      },

      getFavoritePosts: async (req, res) => {
        console.log("Trying to get HH Favorite Posts from API")
        
        const array = req.body.favArray
        const arrayID = array.map(id => Mongoose.Types.ObjectId(id))
        console.log(arrayID)
        try {
          const post = await Post.find({'_id' : {$in: arrayID}});
          res.json(post);
          console.log(post)
        } catch (err) {
          console.log(err);
        }
      },

      getUserData: async (req, res) => {
        console.log("Trying to get User Data from API")
        
        try {
          const user = await User.findById(req.user)
          res.json(user);
          console.log(user)
        } catch (err) {
          console.log(err);
        }
        
      },
      
        addFavorite: async (req, res) => {
        console.log(req.params.id)
        console.log(req.body.post)
        console.log("Trying to add to favorites")
        try {
          await User.findByIdAndUpdate(
            { _id: req.params.id},
            {
              $addToSet: { favoritePosts: req.body.post },
            }
          );
        } catch (err) {
          console.log(err);
          res.redirect(`/feed`)
        }
      },

      rmFavorite: async (req, res) => {
        console.log(req.params.id)
        console.log(req.body.user)
        
        console.log("Trying to remove from favorites")
        
        
        try {
          await User.findByIdAndUpdate(
            { _id: req.params.id},
            {
              $pull: { favoritePosts: req.body.post },
            }
          );
        } catch (err) {
          console.log(err);
          res.redirect(`/feed`)
        }
      },
      
      updateRating: async (req, res) => {
        console.log(req.params.id)
        console.log("Trying to update ratings")
        console.log(req.body.ovRating, req.body.worthRating, req.body.sizeRating, req.body.tasteRating, req.body.ambRating,)
        
        
        try {
          await Post.findByIdAndUpdate(
            { _id: req.params.id},
            {
              $push: { ovRating: req.body.ovRating, worthRating: req.body.worthRating, sizeRating: req.body.sizeRating, tasteRating: req.body.tasteRating, ambRating: req.body.ambRating   },
              
              $addToSet: { ratedBy: req.body.userRated},
              $set: {ovRatingAvg: req.body.ovAverage, worthRatingAvg: req.body.worthAverage, sizeRatingAvg: req.body.sizeAverage, ambRatingAvg: req.body.ambAverage, tasteRatingAvg: req.body.tasteAverage},
              
            }
          );
        } catch (err) {
          console.log(err);
          // res.redirect(`/feed`)
        }
      },

      addImage: async (req, res) => {
        console.log("Trying to update image")
        try {
          await Post.findByIdAndUpdate(
            { _id: req.params.id},
            {
              $addToSet: { images: req.body.image}, 
            }
          );
        } catch (err) {
          console.log(err);
          // res.redirect(`/feed`)
        }
      },
      

}