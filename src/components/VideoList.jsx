var VideoList = (props) => (
  <div className="video-list">
    { console.log('this', props) }
    {props.videos.map(el => <VideoListEntry vid = {el.snippet}/> )}
  </div>
);

// class VideoList extends React.component { 
//   constuctor(props) { 
//     super(props);
//   console.log('2'this.props)
//   }
//   render() {
  
//     return (
  
//     <div className="video-list">
    
    
//     </div>
//     );
//   }
    
// }






// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
//console.log(exampleVideoData)

//