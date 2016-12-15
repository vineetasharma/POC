var CommentBox = React.createClass({
  getInitialState:function(){
    return {
      name:this.props.name
    }
  },
  render: function() {
    return (
        <div>
        Hello, world! I am a CommentBox : {this.state.name}
    </div>
    );
  }
});
ReactDOM.render(
<CommentBox />,
    document.getElementById('content')
);

/**
 * part2
 * Component with display name
 */
/*
var CommentBox = React.createClass({displayName: 'CommentBoxCustomName',
  render: function() {
    return (
      React.createElement('div', {className: "commentBox"},
        "Hello, world! I am a CommentBox."
      )
    );
  }
});
ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
*/

/**
 * part3
 * with nested components
 */

/*
var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
      Hello, world! I am a CommentList.
    </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
      Hello, world! I am a CommentForm.
    </div>
    );
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
      <h1>Comments</h1>
      <CommentList />
      <CommentForm />
      </div>
    );
  }
});

ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
*/
