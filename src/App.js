import contacts from "./contacts.json";
import './App.css';
import React from 'react';

{/* <Random /> */}

class App extends React.Component {
  state = {
    c: contacts
  }
  render() {
  
    const t1= "10";
    function sayHello() {
      
    }

  return(
    <div classname= "App">
          <h3 style={{ display: 'flex', justifyContent: 'center' }}>IronContacts List</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <h3><button onClick={sayHello}>Add Random </button></h3>
      <h3> <button onClick={() => this.sortByName()}> Sort By Name</button></h3>
      <h3> <button onClick={() => this.sortByPopularity()}> Sort By Popularity</button></h3>
        </div>

 
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <table><thead >
              <tr>
                <th>Picture</th>
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
