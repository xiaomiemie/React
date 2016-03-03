var commentsList = [{
  author: 'lee',
  content: 'this is 1'
}, {
  author: 'lee',
  content: 'this is 2'
}, {
  author: 'lee',
  content: 'this is 3'
}];
var c = [{
  "author": 'yang',
  "content": 'this si is'
}]
class CommentBox extends React.Component {

  constructor(props) {
    super();
    this.state = {
      comments: commentsList
    }
  }
  update() {
    console.log(this.props.commentsparent)
    this.setState({
      comments: c
    });
  }
  render() {
    var x = this.props.commentsparent.map(function(item) {
      return <p>item{'meimei'}</p>
    })
    return (
      <div className='comment-box'>
      {this.props.commentsparent[1].author}
        <CommentList comments={this.state.comments}/>
        <CommentForm/>
      </div>
    );
  }
};

class CommentList extends React.Component {
  render() {
    var x = this.props.comments.map(function(item, index) {
      return <Comment key={'comment-'+index} author={item.author}>{item.content}</Comment>
    });
    return (
      <div className='comment-list'>
      {x}
      </div>
    );
  }
};
class CommentForm extends React.Component {
  constructor() {
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div className="comment-form">commentForm{++this.state.count}</div>
    );
  }
};
class Comment extends React.Component {
  constructor() {
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div className="comment">
      <div className="comment-body">
      {++this.state.count}{this.props.children}
      </div>
      <div className="comment-author">
       ----{this.props.author}     
      </div>
      </div>
    );
  }
}
var cb = ReactDOM.render(<CommentBox commentsparent={commentsList}/>, document.getElementById('container'))