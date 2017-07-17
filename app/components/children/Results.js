// Include React
// var React = require("react");
import React, { Component } from "react";
import helpers from "../utils/helpers";

// Helper for making AJAX requests to our API
// var helpers = require("../utils/helpers");

// Creating the Results component
// var Results = React.createClass({
class Results extends Component {
  constructor() {
    super();
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  // This function handles the 
  handleButtonClick(index) {
    // this.setState(function(){
    //   return {
    //     title: select.title.innertext,
    //     pub_date: select.pub_date.innertext,
    //     url: select.web_url.href
    //   }
    // }); 
    // console.log("click handler");
    // console.log(this);
    // console.log(refName);
    //  console.log(event);
     console.log(index);
     // console.log(search);
    
    // console.log(title);
    // console.log(pub_date);
    // console.log(url); 
  }

  // Here we render the function
  render() {
    
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body text-center">
        
         {/* Here we use a map function to loop through an array in JSX */}
          {this.props.articles.map((search, i) => {
            return (
              
                 <div key={i} className="panel panel-default">
                  <div className="panel-body">
                    <h4 id="title">{search.headline.print_headline}</h4>
                    <p id="pub_date">{search.pub_date}</p>
                    <p><a id="url" href={search.web_url} styles={styles.link} target="_blank" >{search.web_url}</a></p>
                   <button 
                    onClick={this.handleButtonClick.bind(this, search)}
                    className="btn btn-success btn-sm">Save</button> 
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
//});
};

const styles = {
  link: {
    fontSize: 10
  }
};

// Export the component back for use in other files
module.exports = Results;

//onClick={this.handleButtonClick}






