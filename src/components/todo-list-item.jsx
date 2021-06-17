
import "../styles/todolistitem.css";

export default function TodoListItem({item}) {

	function editHandler(){
		alert("This would edit your todo");
	}

	function deleteHandler(){
		alert("This would delete your todo")
	}


  	return (
    	<li>
			<h2 className='title'>{item.todo}</h2>
			{/* <p className='description'>{ListItem.description}</p> */}
			<button onClick={editHandler} className='btn'>Edit</button>
			<button onClick={deleteHandler} className='btn remove'>Delete</button>
		</li>
  	)
};


