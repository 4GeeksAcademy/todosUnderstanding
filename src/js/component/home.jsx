import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

	const [inputValue, setInputValue]= useState("")
	const [list, setList]=useState([])

	function saveList(e){
		if(e.key === "Enter"){
			console.log("Enter was pressed");
			// setList(list.concat(inputValue))
			setList(current => ([...current, inputValue]));
			setInputValue("") 
		} 
	}

	return (
		<div className="container">
			<div className="text-center" style={{background: "beige", width: "50%", margin: "auto"}}>
				<h1 className="text-center mt-5">To Do List </h1>
				<ul>
					<li> <input type="text" placeholder="What do you need to do?"
					onChange={(e) => setInputValue(e.target.value)} 
					value={inputValue}
					onKeyDown={saveList}
					style={{background: "beige"}}
					/></li> 
					
					{list.map((item, index) =>(
						<li> 
							{item} {" "}
							<FontAwesomeIcon icon={faTrash} 
							onClick={() => 
								setList(
									list.filter(
										(l,currentIndex) =>
											index != currentIndex
									)
								)
							}/>
						</li>					
					)
					)}
				
					{/* {list.map ((element) => <li>{element} <FontAwesomeIcon icon={faTrash} /></li> )} */}
					
					<li>
						<div>{list.length} Task</div>
					</li>
				</ul>
				
			</div>
		</div>
	);
};

export default Home;

