// Include React
var React = require("react");

// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

// Creating the Results component
var Results = React.createClass({
  
  // This function handles the 
  handleButtonClick: function(save) {
    this.setState({ title: term, searchTerm: term, searchTerm: term });
  },

  // Here we render the function
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body text-center">
        
         {/* Here we use a map function to loop through an array in JSX */}
          {this.props.articles.map(function(search, i) {
            return (
              
                 <div key={i} className="panel panel-default">
                  <div className="panel-body">
                    <h4>{search.headline.print_headline}</h4>
                    <p>{search.pub_date}</p>
                    <p><a href={search.web_url} styles={styles.link} target="_blank">{search.web_url}</a></p>
                    <button 
                    
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
});

const styles = {
  link: {
    fontSize: 10
  }
};

// Export the component back for use in other files
module.exports = Results;


// onClick={this.handleButtonClick}