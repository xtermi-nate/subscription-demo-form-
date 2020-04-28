import React,{Component} from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    console.log("this is my intializer")

    const movies =[

      {id:0, title: "these are the movies based on your section", 
      overview: "number want to display"},
    
    ]



  this.state={rows:[
  <p key ="1"> this is my row </p>,
  <p key ="2"> this is my row </p>
  ]}
  var moviesRows =[]
  movies.forEach((movies)=>{
    console.log(movies.title)
    moviesRows.push(<p key ={movies.id}>{movies.title}</p>)
  })

  this.state={rows:moviesRows}


  }
  render(){
  return (
    <div className="App">

      <table className ="titleBar">
        
        <tbody>
          <tr>
            <td>
              <img alt="app icon" width ="70"src="123.png"/>
            </td>
            <td width = "9"/>
            <td>
              <h1>User Subscription</h1>
              
            </td>
          </tr>
        </tbody>
      </table>
      <input style ={{
        fontSize:25,
        display:'center',
        width:"65%",
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:16

      }}placeholder ="enter movies"/>
      {this.state.rows}  
      
      
    </div>
  );
 }
}
export default App;
