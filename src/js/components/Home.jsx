import React, { useState } from "react";


const Home = () => {


	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="text-center container mt-5">
			<label for="inp">Tareas por hacer</label>

			<ul>
				<li className="list">
					<input className="input" id="inp"

						placeholder="Agrega tarea"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={(e) => {
							if (e.key === 'Enter' && inputValue.trim() !== "") {
								setTodos(todos.concat(inputValue.trim()));
								setInputValue("");
							}
						}}
					/>
				</li>

				{todos.map((item, index) => (
					<li className="items">
						{item}	<span className="delete-btn" onClick={() => setTodos(todos.filter((item, indexDelete) => index !== indexDelete))}>X</span>
					</li>
				))}
				<p>{todos.length} tareas</p>
			</ul>

		</div>
	);
};


export default Home;