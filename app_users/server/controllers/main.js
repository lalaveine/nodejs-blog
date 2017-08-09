const request = require('request');

let apiOptions = {
  server : "http://localhost:1337"
};

let renderHomepage = function (req, res, requestedPosts) {
  res.render('home', {
    pageHeader: {
      background: "/images/home-bg.jpg",
      heading: "Clean Blog",
      subheading: "A Clean Blog Theme by Start Bootstrap"
    },
    posts: requestedPosts.reverse()
  });
};

let renderBlogPage = function (req, res, requestedPost) {
  res.render('post', {
    pageHeader: {
      background: requestedPost.pageHeader.background,
      heading: requestedPost.pageHeader.heading,
      subheading: requestedPost.pageHeader.subheading,
      postedBy: requestedPost.pageHeader.postedBy,
      postedOn: requestedPost.pageHeader.postedOn
    },
    content: requestedPost.content
  });
};

/* GET 'home' page. */
module.exports.home = function (req, res, next) {
  let requestOptions, path;
  path = '/api/posts';
  requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json : {}
  };
  request(
    requestOptions,
    function(err, response, requestedPosts) {
      renderHomepage(req, res, requestedPosts);
    }
  );
};

/* GET 'about' page. */
module.exports.about = function(req, res, next) {
  res.render('about', {
    pageHeader: {
      background: "/images/about-bg.jpg",
      heading: "About Me",
      subheading: "This is what I do"
    }
  });
};

/* GET 'contact me' page. */
module.exports.contact = function(req, res, next) {
  res.render('contact', {
    pageHeader: {
      background: "/images/contact-bg.jpg",
      heading: "Contact Me",
      subheading: "Have questions? I have answers (maybe)."
    }
  });
};

/* GET blog post page. */
module.exports.post = function(req, res, next) {
  let requestOptions, path;
  path = '/api/posts/' + req.params.postId;
  requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json : {}
  };
  request(
    requestOptions,
    function(err, response, requestedPost) {
      console.log(requestedPost);
      renderBlogPage(req, res, requestedPost);
    }
  );
};