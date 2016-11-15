var USER_DATA = {
  name: "Matthew Porter",
  username: "matthew-porter",
  image: "https://blogs.scientificamerican.com/blogs/cache/file/E926B011-38C7-4B05-8843AA4318D2BA15.jpg?w=690&h=460&AD40DEE1-9D81-4CF1-830C39BA6D6A3164"
}


var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}}></img>
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'https://github.com/' + this.props.username }>
        {this.props.username}
        </a>
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function () {
    return (
      <div>{this.props.name}</div>
    )
  }
});

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic imageUrl ={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    );
  }
});
// var HelloWorld = React.createClass({
//   render: function () {
//     console.log(this.props)
//     return (
//       <div> Hello {this.props.name} </div>
//     )
//   }
// });

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
