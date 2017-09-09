class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      blank : false,
      videos: exampleVideoData
    };
  }

  render() {
  console.log("App", this.props)
    return (
      <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
         <VideoPlayer video = {this.state.videos[0]}/>
        </div>
        <div className="col-md-5">
          <VideoList videos = {this.state.videos}/>
        </div>
      </div>
    </div>
    );
  }
}


// ReactDOM.render(<VideoListEntry/>, document.getElementById('video-list'));
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
//console.log('obj',exampleVideoData)
//console.log('snip',exampleVideoData[0].snippet)

//the props in videolist is not recognizing the data that was pass in the App function
//App is not properly being fed a prop value 

// <VideoPlayer /> line 10

