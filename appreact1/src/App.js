// import logo from './logo.svg';
import './App.css';
import Student from './Prop';
// import User1 from './User1';

function App() {
  return (
    <div className="App">
     <h1>Props in React: </h1>
     {/* <User1 /> */}
     <Student name={"Manisha"} email={"manisha@gmail.com"} other={{address:"Delhi", mobile:"12345678"}} />
    </div>
  );
}

export default App;
