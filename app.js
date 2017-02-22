var App = () => (
  <div> 
  <h2> Grocery List </h2>
  <GroceryList groceries={['Cucumbers', 'Kale']}/>
  </div>
)

var Cucumbers = () => (
  <li> Cucumbers </li>
  )

var Kale = () => (
  <li> Kale </li>
  )

var GroceryList = (props) => {

  var onListItemClick = (event) => {
    alert('you have been clicked');
  };
  return (
  <ul> 
    {props.groceries.map(grocery =>
      <GroceryListItem grocery={grocery}/>
      )}
  </ul>
  );
}

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  
  render () {
    var style = {
      textDecoration: this.state.done ? 'line-through': 'none'
    };
    return (
      <li style = {style} onClick={this.onListItemClick.bind(this)}>{this.props.grocery}</li>
      )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));