//My code is below. It works, but bolds everything upon mouseover, not just the one item

const GroceryList = () => (
    <div>
      <h1>My Grocery List</h1>
      <GroceryListItems item={['Milk', 'Cookies', 'Brownies']}/>
    </div>
);

function GroceryListItems(props) {
  const listItems = props.item.map(item =>
    <BoldItPlease item={item}/>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const { useState } = React;

const BoldItPlease = (props) => {
  const [isDone, setIsDone] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const style = {
    fontWeight: isBold ? 'Bold' : 'normal'
  };
  const style2 = {
    textDecoration: isDone ? 'line-through' : 'none'
  }
  return (
    <li style={{...style, ...style2}} onClick={() => setIsDone(!isDone)} onMouseEnter={() => setIsBold(!isBold)} onMouseLeave={() => setIsBold(!isBold)}>
      {props.item}
    </li>
  )

}

ReactDOM.render(<GroceryList/>, document.getElementById("app"));


//The code below is copied from Learn. It does not work

// const TodoList = (props) => (
//   console.log('HI');
//   return (
//     <ul>
//       {['Milk', 'Cookies', 'Brownies'].map((todo) => (
//         <TodoListItem/>
//       ))}
//     </ul>
//   )
// );

// const { useState } = React;

// const TodoListItem = (props) => {
//   const [isDone, setIsDone] = useState(false);
//   const style = {
//     fontWeight: isDone ? 'Bold' : 'none'
//   };
//   return (
//     <h1>'HI'</h1>
//     // <li style={style} onMouseOver={mouse()}>
//     //   {props.todo}
//     // </li>
//   )
// }



