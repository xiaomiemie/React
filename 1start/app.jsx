var Hello  = React.createClass({
  render:function(){
    return <h1>hello</h1>
  }
});

class HelloWorld extends React.Component{
  render(){
    return <h1>helloworld</h1>
  }
}
ReactDOM.render(<Hello/>,$('#container2')[0]);
ReactDOM.render(<HelloWorld/>,$('#container')[0]);


