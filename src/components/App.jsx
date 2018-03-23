class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {videos: exampleVideoData,
      currentVideo: exampleVideoData[0] 
      } 
  
  this.onListItemClick = this.onListItemClick.bind(this)
  }

  getYoutubeVideos(query) {
    var options = {
      q: query,
      key: this.props.apiKey 
    }
    
    //what to do when we get our data?
      //app state changes
        //change video state to the new videos we get from youtube
        //just set the currentVideo to the first video we get from youtube
    this.props.searchYouTube(options, (videos) =>
      this.setState({
        videos: videos,
        currentVideo: videos[0] 
      });
    );
  }
  
  onListItemClick(video) {
    this.setState({
      currentVideo: video
    });
  }
  
  
  render() {
    return(
      <div>
        <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em><Search /></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.currentVideo}/></h5></div>
        </div>
        <div className="col-md-5">
          <div>
          <h5><em>videoList</em><VideoList videos={this.state.videos} onClick = {this.onListItemClick}/></h5>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
