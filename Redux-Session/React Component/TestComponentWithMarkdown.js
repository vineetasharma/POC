/*// tutorial6.js
var Comment = React.createClass({
    render: function () {
      var md = new Remarkable();
      return (
        < div
      className = "comment" >
        < h2
      className = "commentAuthor" >
        {this.props.author
    }
    < / h2 >
    {md.render(this.props.children.toString())
  }
  < / div >
);
}
})
;*/

// tutorial7.js
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
// tutorial5.js
/**
 * here comment message is '< a > This
 is * another * comment < /a>' so how we will show it in correct way because now its showing as an object?
 */
var CommentList = React.createClass({
  render: function () {
    return (
      < div
    className = "commentList" >
      < Comment
    author = "Pete Hunt" > This
    is
    one
    comment < / Comment >
    < Comment
    author = "Jordan Walke" >< a > This
    is * another * comment < /a></
    Comment >
    < / div >
    )
    ;
  }
});
/**
 * here if i add comment component without properties then no error
 */
var CommentBox = React.createClass({
  render: function () {
    return (
      < div
    className = "commentBox" >
      < h1 > Comments < / h1 >
      < CommentList / >
      < / div >
    )
    ;
  }
});

ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('content'));
