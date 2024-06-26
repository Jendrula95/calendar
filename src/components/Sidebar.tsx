import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
export default function Sidebar() {
	return (
		<aside
			className="border  p-6 w-64 shadow-md hover:shadow-2xl"
			style={{ backgroundColor: "#F8F6E3" }}
		>
			<CreateEventButton />
			<SmallCalendar />
		</aside>
	);
}
