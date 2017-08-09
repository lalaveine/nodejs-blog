const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const humanReadableDate = require('human-date');

let PostModel = mongoose.model('Post');

let sendJsonResponse = function(res, status, content, callback) {
  res.status(status);
  res.json(content);
  if (callback) callback();
};

let makeUrlFromHeading = function (heading) {
  return heading.toString('utf-8').toLowerCase().trim().replace(/ /g, '-');
};

let getDateToday = function () {
  return humanReadableDate.prettyPrint(new Date(Date.now())).toString('utf-8')
  // Date Month, Year
};


module.exports.postsCreate = function (req, res) {
  PostModel.create({
    pageHeader: {
      background: req.body.background,
      heading: req.body.heading,
      subheading: req.body.subheading,
      postedBy: req.body.postedBy,
      postedOn: getDateToday()
    },
    postUrl: makeUrlFromHeading(req.body.heading),
    content: req.body.content
  }, function(err, post) {
    if (err) {
      console.log(err);
      sendJsonResponse(res, 400, err);
    } else {
      sendJsonResponse(res, 201, post);
    }
  });
};

module.exports.postsReadOne = function (req, res) {
  PostModel
    .findById(req.params.postId)
      .exec(function (err, post) {
        if (!post) {
          sendJsonResponse(res, 404, {
            "message": "postId not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJsonResponse(res, 400, err);
          return;
        }
        sendJsonResponse(res, 200, post);
      });
};

module.exports.postsList = function (req, res) {
  PostModel.find(function (err, posts) {
    if (err) {
      console.log(err);
      sendJsonResponse(res, 400, err);
    } else {
      sendJsonResponse(res, 200, posts);
    }
  })
};

module.exports.postsUpdateOne = function (req, res) {
  PostModel
    .findById(req.params.postId)
      .exec(function (err, post) {
        if (!post) {
          sendJsonResponse(res, 404, {
            "message": "post not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJsonResponse(res, 400, err);
          return;
        }

        post.pageHeader.background = (req.body.background) ? req.body.background : post.pageHeader.background;
        post.pageHeader.heading = (req.body.heading) ? req.body.heading : post.pageHeader.heading;
        post.pageHeader.subheading = (req.body.subheading) ? req.body.subheading : post.pageHeader.subheading;
        post.pageHeader.postedBy = (req.body.postedBy) ? req.body.postedBy : post.pageHeader.postedBy;
        post.postUrl = (req.body.heading) ? makeUrlFromHeading(req.body.heading) : post.postUrl;
        post.content = (req.body.content) ? req.body.content : post.content;

        post.lastUpdated = getDateToday();

        post.save(function(err, updatedPost) {
          if (err) {
            console.log(err);
            sendJsonResponse(res, 400, err);
          }
          sendJsonResponse(res, 200, updatedPost);
        });
    });
};

module.exports.postsDeleteOne = function (req, res) {
  let postId = req.params.postId;
  if (postId) {
    PostModel
      .findByIdAndRemove(postId)
      .exec(
        function(err) {
          if (err) {
            console.log(err);
            sendJsonResponse(res, 400, err);
            return;
          }
          sendJsonResponse(res, 204, null);
        }
      );
  } else {
    sendJsonResponse(res, 404, {
      "message": "There is no post with such id"
    });
  }
};
