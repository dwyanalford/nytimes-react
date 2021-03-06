var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String
  },
  url: {
    type: String
  },
  pub_date: {
    type: Date
  },
  saved: {
    type: Boolean
  },

});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;