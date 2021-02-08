import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function Todo() {
  const [data, setData] = React.useState([]);


  function post(event) {
    event.preventDefault();
    let post = document.getElementById("post").value;
    setData([...data, post]);
    document.getElementById('post').value = ''


    console.log(post)
    console.log(data);


  };




  const remove = (i) => {

    let todo = ([...data])
    todo.splice(i)
    setData(todo)
   

  };


  // var todo = document.getElementById("post").value
  // if(todo === ""){
  //   alert("some text ")
  // }

  const delete1 =  (v)  =>{

    let todo1 =  [...data]
    todo1.splice(v,1)
    setData(todo1)
    

  };
 
  // const edit = (v) => {
        
    // let edit =  [...data]
    // edit.push(v,1)
    // setData(edit)
    
  // }


  return <div className="input">
       <h1>To Do Application</h1>
           <h3>Created By</h3>
        <h1>Mohammad Ahmed Khan</h1>
  <form onSubmit={post}>
<div className="todo">
        <input   type="text"  placeholder="Enter Todo List" required="required" id="post" className="input-group mb-2" />
       <div className="Buttons">
       <button className="btn btn-outline-success" >Add</button>
       <button className="btn btn-outline-danger" onClick={remove}>Delete All</button>
</div>
</div>
       </form>
    



    {
      data.map((v, i) => {
        return (
          <div>
            {v} <button className="btn btn-outline-dark" onClick={delete1}>Delete1</button>
            {/* <button className="btn btn-outline-dark" onClick={edit}>edit </button> */}
            </div>

        )
      })

    }


  </div>
}
ReactDOM.render(<Todo />,

  document.getElementById("root")
)



