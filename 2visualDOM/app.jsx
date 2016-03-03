class Count extends React.Component{
  constructor(){
    this.state={
      count:0
    };
    this.cc=1;
  }
  render(){
    return (
      <div>
      <h1 style={{color:'red'}}>Count</h1>
      <h3>{this.cc}</h3>
      </div>
    )
  };
  update(){
    this.setState({
      count:++this.cc
    })
  }
}
var count = ReactDOM.render(<Count/>,document.getElementById('container'));
count.update()
