class App extends React.Component {
//constructor 
  constructor (props) {
    super(props);
//state
    this.state = {
      isSelected: false,
      videos: window.exampleVideoData,
      video: window.exampleVideoData[0],
     
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  
  componentDidMount () {
    this.getYouTubeVideos('bball');
  }
  

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query,
    };
    
    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        video: videos[0]
      });
    });
     
  }

  handleClick(e) {
    console.log('was clicked', e);
    
    this.setState({video:e});
  }

 
  



  render() {
    return (
      <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search handleSearchInputChange = {this.getYouTubeVideos.bind(this)}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
         <VideoPlayer video = {this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList videos = {this.state.videos} vleHandler = {this.handleClick} />
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


//the props in videolist is not recognizing the data that was pass in the App function
//App is not properly being fed a prop value 

// <VideoPlayer /> line 10

//handeClick func in app
//pass handle click to viewList
//pass handle click to videoListEntry
//in VLE, invoke handle func so that its waiting to be clicked 
//and output data to viewList

