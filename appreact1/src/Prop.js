import "./App.css"
function Student(props){
console.log(props);
    return(
        <div className="App">
            <h1>Hello {props.name}</h1>
            <h2>Email {props.email}</h2>
            <h4>Address: {props.other.address} Phone: {props.other.mobile}</h4>
        </div>
    )
}
export default Student;