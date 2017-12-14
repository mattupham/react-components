var Kale = () => (
  <div>Kale</div>
);

var Cucumber = () => (
  <div>Cucumber</div>
);


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }
  
  onListItemHover(){
    this.setState({
      hover: !this.state.hover
    });
  }
  
  render(){
    var bold = {
      'fontWeight': this.state.hover ? 'bold' : 'normal'
    };
    
    return (
      <li style={bold} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
    )
  };
} 

var GroceryList = (props) => (
  <ul>
    {props.groceryList.map(item => 
      <GroceryListItem item={item} />  
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryList={[<Cucumber />, <Kale />]}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));