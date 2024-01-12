
import './App.css';
import Numbervalidation from './Componests/Numbervalidation';



function App() {


  return (
    <div className="container">


      <form action="" method="POST">
        <h1 align="center" className="formHeading">regestration form </h1>

        <Numbervalidation />

        <h1 align="center"><button id="submit" name="submit" type="Button">Subimt</button></h1>
      </form>




    </div>


  );
}

export default App;
