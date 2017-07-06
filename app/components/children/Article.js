// Include React
var React = require("react");

// This is the Articles component, where we save our Articles
var Articles = React.createClass({
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">My Articles</h3>
        </div>
        <div className="panel-body text-center">

         {/* Here we use a map function to loop through an array in JSX */}
          {this.props.savedArticles.map(function(search, i) {
            return (
              
                 <div key={i} className="panel panel-default">
                  <div className="panel-body">
                    <h4>{search.title}</h4>
                    <p>{search.pub_date}</p>
                    <p><a href={search.url} styles={styles.link} target="_blank">{search.url}</a></p>
                    <button 
                    className="btn btn-danger btn-sm">Remove</button>
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

// Export the component back for use in other files
module.exports = Articles;