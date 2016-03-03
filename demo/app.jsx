// class Hello extends React.Component{
//   constructor(){
//     super();
//     this.state={};
//   }
//   getInitialState(){
//     console.log('x')
//     return {'word':'hello'}
//   };
//   render(){
//     return (
//       <div>{this.state.word}{this.props.author}</div>
//       )
//   }
// };
// var Hello =React.createClass({
//    getInitialState: function() {

//       return {word: 'heool'};
//     },
//     handleclick:function(){
//           console.log(this.refs['span'].getDOMNode().innerHTML)
//       this.setState({word: 'hello'},function(){
//       })
//     },
//     render(){
//     return (
//       <div  ref='he' onClick={this.handleclick}>{this.state.word}---{this.props.author}
//       <span ref='span'>lalalla</span>
//       </div>
//       )
//   }
// })
//////////////

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var TodoList = React.createClass({
  getInitialState: function() {
    return {items: ['hello', 'world', 'click', 'me']};
  },
  handleAdd: function() {
    var newItems =
      this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  },
  handleRemove: function(i) {

    var newItems = this.state.items;
    newItems.splice(i, 1);
        console.log(newItems)
    this.setState({items: newItems});
  },
  render: function() {
    var items = this.state.items.map(function(item, i) {
      return (
        <div key={item} onClick={this.handleRemove.bind(this, i)}>
          {item}
        </div>
      );
    }.bind(this));
    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup transitionName="example">
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});
var WithLink = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return {message: 'Hello!',"message2":true,"message3":false,"message4":false};
  },
  getV:function(){
    console.log(this.state)
  },
  render: function() {
    return (
      <form action="">
      <input type="text" valueLink={this.linkState('message')} />
      <input type="checkbox" checkedLink={this.linkState('message2')} />
      <input type="radio" name='sex' checkedLink={this.linkState('message3')} />
      <input type="radio" name='sex' checkedLink={this.linkState('message4')} />
      </form>
      );
  }
});
React.render(<TodoList author='yang'/>,document.getElementById('container'))
var x= React.render(<WithLink author='yang'/>,document.getElementById('container2'))