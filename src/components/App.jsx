class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
      } //track currentVideo and all videos
  
  this.onListItemClick = this.onListItemClick.bind(this)
  }
  
  onListItemClick() {
    // this.setState({
    //   currentVideo: video
    // });
    console.log('hi')
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
          <h5><em>videoList</em><VideoList videos={this.state.videos} onClick = {this.onListItemClick }/></h5>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
}



// var App = (props) => (
  
//   <div>
//   {console.log(props.videos[0])}
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em><Search /></h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em><VideoPlayer video={props.videos[0]}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div>
//         <h5><em>videoList</em><VideoList videos={props.videos}/></h5>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
// window.App = App;
ReactDOM.render(<App videos={window.exampleVideoData} />, document.getElementById("app"));
