
/* GET 'home' page. */
module.exports.home = function(req, res, next) {
  res.render('home', {
    pageHeader: {
      background: "/images/home-bg.jpg",
      heading: "Clean Blog",
      subheading: "A Clean Blog Theme by Start Bootstrap"
    },
    posts: [{
      heading: "Man must explore, and this is exploration at its greatest",
      subheading: "Problems look mighty small from 150 miles up",
      posted_by: "Start Bootstrap",
      posted_on: "September 24, 2014"
    },{
      heading: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
      subheading: "",
      posted_by: "Start Bootstrap",
      posted_on: "September 18, 2014"
    },{
      heading: "Science has not yet mastered prophecy",
      subheading: "We predict too much for the next year and yet far too little for the next ten.",
      posted_by: "Start Bootstrap",
      posted_on: "August 24, 2014"
    },{
      heading: "Failure is not an option",
      subheading: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
      posted_by: "Start Bootstrap",
      posted_on: "July 8, 2014"
    },{
      heading: "Failure is not an option",
      subheading: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
      posted_by: "Start Bootstrap",
      posted_on: "July 8, 2014"
    }]
  });
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
  res.render('post', {
    pageHeader: {
      background: "/images/post-bg.jpg",
      heading: "Man must explore, and this is exploration at its greatest",
      subheading: "Problems look mighty small from 150 miles up",
      posted_by: "Start Bootstrap",
      posted_on: "August 24, 2014"
    },
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  });
};