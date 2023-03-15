// import React, { Component ,useState } from "react";


// class State1 extends Component{
//     constructor(){
//         super();
//         this.state={data:1}
//     }

//     UpdateName () {
//        this.setState({data:this.state.data+1});
//     }

//     render(){
//         return(
//             <div>
//                 <h1>{this.state.data}</h1>
//             <button onClick= {()=>this.UpdateName()}>Sign Up</button>
//             </div>
//         )
//     }
// }

// function State1(){
//     const [name, setName]= useState("Manisha");
//     function UpdateState(){
//         setName("Shelke")
//     }


//     return (
//         <div className="App">
//             <h1>{name}</h1>
//             <button onClick={UpdateState}>Click Me</button>
//         </div>
//     )
// }
// export default State1;

// import React, { Component } from 'react'

// export default class State extends Component {

//     constructor(){
//         super();
//         this.state={
//             data:"Manisha"
//         }
//     }
// handle(){
//     this.setState({data:"Shelke"})
// }
    
//   render() {
//     return (
//       <div className="App">
//            <h1>{this.state.data}</h1>
//            <button onClick={()=>this.handle()}>Click mi
//         </button>
        
     
//         </div>
//     )
//   }
// }

import React, { Component } from 'react'

export default class State extends Component {

    constructor(){
        super();
        this.state={data:1}
    }
    UpdateCount(){
        this.setState({data:this.state.data+1})
    }
    DecrCount(){
        this.setState({data:this.state.data-1})
    }
  render() {
    return (
      <div className='App'>
        
        <button onClick={()=>this.UpdateCount()}>increment</button>
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.DecrCount()}> decrement </button>
      </div>
    )
  }
}




