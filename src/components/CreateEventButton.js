import React from "react";
import plusImg from "../assets/plus.png";
export default function CreateEventButton() {
	return (
		<button className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl ">
			<img src={plusImg} alt="add" className="w-7 h-7"></img>
			<span className="pl-3 pr-7" style={{ color: "green" }}>
				Create
			</span>
		</button>
	);
}
