// tutorial4.js
var Comment = React.createClass({
    render: function() {
      return (
        <div className="comment">
        <h2 className="commentAuthor">
        {this.props.author}
    </h2>
    {this.props.children}
  </div>
);
}
});
// tutorial5.js
/**
 * here * for emphasizing
 */
var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
      <Comment author="Pete Hunt">This is one comment</Comment>
    <Comment author="Jordan Walke"><a>This is *another* comment</a></Comment>
    </div>
    );
  }
});
/**
 * here if i add comment component without properties then no error
 */
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
      <h1>Comments</h1>
      <CommentList />
      </div>
    );
  }
});

ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
