import React, { useState } from "react";

function App() {
	let currentTime = new Date().toLocaleTimeString();
	const [updatedTime, setTime] = useState(currentTime);

	function updateTheTime() {
		console.log("called");
		const newTime = new Date().toLocaleTimeString();
		setTime(newTime);
	}
	setInterval(updateTheTime, 1000);

	return (
		<div className='container'>
			<h1>{updatedTime}</h1>
			<button onClick={updateTheTime}>Get Time</button>
		</div>
	);
}

export default App;
