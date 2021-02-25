import contacts from "./contacts.json";
import './App.css';
import React from 'react';

// function App() {
// const name ='michele';
//   return (
//     <div className="App">
//      <h1>Lab-React-IronContacts</h1>
//      <h2>{name}</h2>
//      {/* <h3>{contacts}></h3> */}
//     </div>
//   )
// }


class App extends React.Component {
  state = {
    c: contacts
  }
  render() {
  return(
    <div classname= "App">
      <h3>IronContacts List</h3>
      <table  cellpadding="2">
<tbody>
<tr>
<td>Picture</td>
<td>Name</td>
<td>Popularity</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>{this.state.c.map(a=>(<td><img src={a.pictureUrl} width="60" height="90"></img></td>))}</td>
<td>{this.state.c.map(a=>( <td>{a.name}</td>))}</td>
<td>{this.state.c.map(a=>( <td>{a.popularity}</td>))}</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>



    
    </div>
  );
}}
export default App;
