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
    this.setState({
      comments: c
    });
  }
  handleS(comment){
    var that = this;
    $.ajax({
      url:'comment.json',
      data:comment,
      type:'GET'
    }).success(function(data){
      that.setState ({
      comments: data
    })
    }).fail(function(xhr,status,err){
      console.log(xhr,err,status)
    })
  }
  render() {
    var x = this.state.comments.map(function(item) {
      return <p>item{'meimei'}</p>
    })
    return (
      <div className='comment-box'>
      {this.props.commentsparent[1].author}
        <CommentList comments={this.state.comments}/>
        <CommentForm onSubmitFun={comment=>this.handleS(comment)}/>
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
    super()
    this.state = {
      count: 0
    }
  }
  handleSubmit(e){
    console.log(e)
    e.preventDefault();
    const author=this.refs.author.value.trim();
    const comment=this.refs.comment.value.trim();
    const form=this.refs.form;
    this.props.onSubmitFun({
      author:author,
      comment:comment
    })
  }
  render() {
    return (
      <form className="comment-form" ref='form' onSubmit={(e)=>{this.handleSubmit(e)}}>
      <input type='text' placeholder='your name' ref='author'/>
      <input type='text' placeholder='your commentContent' ref='comment'/>
      <input type='submit' value='add comment'/>
      </form>
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
      {this.props.children}
      </div>
      <div className="comment-author">
       ----{this.props.author}     
      </div>
      </div>
    );
  }
}
var cb = ReactDOM.render(<CommentBox commentsparent={commentsList}/>, document.getElementById('container'));
