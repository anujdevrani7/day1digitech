
import './App.css';
import Numbervalidation from './Componests/Numbervalidation';

import { check } from './Componests/functions';

function App() {
  function buttonclick(){
    let length = parseInt(document.getElementById("phone").value.length);
    if(length!==10){
      document.getElementById("phone").classList.add("error");
    }
   
  }

  return (
    <div className="container">

      <form action="" method="POST">
        <h1 align="center" className="formHeading">regestration form </h1>
        <table>
          <tr>
            <td><label htmlFor="fullname">Full Name</label></td>
            <td><input type="text" id="fullname" name="fullname" /></td>
          </tr>
          <tr>
            <td><label htmlFor="email">Email</label></td>
            <td><input type="email" id="email" name="email" /></td>
          </tr>
          <tr>
            <td><label htmlFor="password">Password</label></td>
            <td><input type="password" id="password" name="password" /></td>
          </tr>

          <Numbervalidation />


        </table>
        <h1 align="center"><button id="submit" onClick={buttonclick} name="submit" type="Button">Subimt</button></h1>
      </form>




    </div>


  );
}

export default App;
