var App = (props) => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search<Search/></em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><h5><em>videoPlayer <VideoPlayer /></em> view goes here</h5></div>
      </div>
      <div className="col-md-5">
        <div><h5><em>videoList<VideoList videos = {props.videos} /></em> view goes here</h5></div>
      </div>
    </div>
  </div>
);

ReactDOM.render(<App videos = {exampleVideoData} />, document.getElementById('app'));

// ReactDOM.render(<VideoListEntry/>, document.getElementById('video-list'));
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
//console.log('obj',exampleVideoData)
//console.log('snip',exampleVideoData[0].snippet)