function User(){
    function start(){
        alert("Hello");
}

   
    return(
        <div className="App">
            <h1 >Hello User buddies</h1>
            <button onClick={start}>Click Me</button>
        </div>
    )
}

export default User;