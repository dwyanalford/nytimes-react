// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");
//import createFragment from 'react-addons-create-fragment'; // ES6

// New York Times API
var nytimesAPI = "3912d1c37026447b8fd4c2f6c5789a01";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(location) {

    console.log(location);

    // Run API
    var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + location + "&sort=newest&begin_date=19000101&end_date=20170701&api-key=" + nytimesAPI;
    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      if (response) {
        return response.data.response.docs;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    return axios.get("/api");
  },

  // This function hits our own server to retrieve the record of query results
  getArticles: function() {
    return axios.get("/api/articles");
  },

  // This function posts new searches to our database.
  postHistory: function(location) {
    return axios.post("/api", { location: location });
  }
};

// We export the API helper
module.exports = helper;
