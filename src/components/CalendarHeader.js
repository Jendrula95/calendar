import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";

export default function CalendarHeader() {
	const { monthIndex, setMonthIndex } = useContext(GlobalContext);
	function handlePrevMonth() {
		setMonthIndex(monthIndex - 1);
	}
	function handleNextMonth() {
		setMonthIndex(monthIndex + 1);
	}
	function handleReset() {
		setMonthIndex(
			monthIndex === dayjs().month()
				? monthIndex + Math.random()
				: dayjs().month()
		);
	}

	return (
		<header
			className="px-4 py-2 flex items-center shadow-md "
			style={{ backgroundColor: "#F8F6E3" }}
		>
			<h2
				className="ml-2  text-xl text-gray-500 font-bold"
				style={{ color: "#FF6F00" }}
			>
				{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
			</h2>
			<button
				onClick={handleReset}
				className="border rounded py-2 px-4 ml-5 mr-5 shadow-md hover:shadow-2xl"
			>
				Today
			</button>

			<button onClick={handlePrevMonth}>
				<span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 ">
					chevron_left
				</span>
			</button>
			<button onClick={handleNextMonth}>
				<span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
					chevron_right
				</span>
			</button>
		</header>
	);
}
