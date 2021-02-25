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
      <h3 style={{ display: 'flex', justifyContent: 'center' }}>IronContacts List</h3>

      {/* <table  cellpadding="2">
        <tbody>
        <tr>
        <td>Picture</td>
        <td>Name</td>
        <td>Popularity</td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td>{this.state.c.slice(0,5).map(a=>(<td><img src={a.pictureUrl} width="60" height="90"></img></td> ))}</td>
        <td>{this.state.c.slice(0,5).map(a=>( <td>{a.name}</td>))}</td>
        <td>{this.state.c.slice(0,5).map(a=>( <td>{a.popularity}</td>))}</td>
        <td>&nbsp;</td>
        </tr>
        </tbody>
        </table> */}

        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <table >
            <thead >
              <tr>
                <th >Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>

            <tbody>
              {this.state.c.slice(0,5).map(contact => {
                return (
                  <tr >
                    <td><img src={contact.pictureUrl} height='90px'alt={contact.name}/> </td>
                    <td >{contact.name}</td>
                    <td>{contact.popularity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
    </div>
    </div>
  );
}}
export default App;
