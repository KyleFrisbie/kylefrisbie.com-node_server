const BlogpostsAPI = require('./controllers/api/blogposts-api');

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.send({'SUCCESS': true});
  });

  // blog post api
  app.get('/api/blogposts', BlogpostsAPI.getAllBlogposts);
  app.post('api/blogposts/add-blogpost', BlogpostsAPI.insertBlogpost);
};
