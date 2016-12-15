// tutorial8.js
var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 3, author: "Vini", text: "Vinis comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var Comment = React.createClass({
  rawMarkup: function() {
  var md = new Remarkable();
  console.log('this.props.children.-------------',this.props.children);
  var rawMarkup = md.render(this.props.children.toString());
  return { __html: rawMarkup };
},

render: function() {
  return (
    <div className="comment">
    <h2 className="commentAuthor">
    {this.props.author}
</h2>
<span dangerouslySetInnerHTML={this.rawMarkup()} />
</div>
);
}
});

// tutorial10.js
var CommentList = React.createClass({
    render: function() {
      var commentNodes = this.props.data.map(function(comment) {
        return (
          <Comment author={comment.author} key={comment.id}>
    {comment.text}
  </Comment>
);
});
return (
  <div className="commentList">
  {commentNodes}
  </div>
);
}
});
// tutorial14.js
var CommentBox = React.createClass({
    loadCommentsFromServer: function() {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        cache: false,
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
    getInitialState: function() {
      return {data: []};
    },
    componentDidMount: function() {
      this.loadCommentsFromServer();
      setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    render: function() {
      return (
        <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
    </div>
);
}
});

ReactDOM.render(
<CommentBox url="http://localhost:3000/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);
