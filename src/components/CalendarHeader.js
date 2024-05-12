import React, { useContext } from "react";
import chevronLeft from "../assets/chevron_left_24dp_FILL0_wght400_GRAD0_opsz24.png";
import chevronRight from "../assets/chevron_right_24dp_FILL0_wght400_GRAD0_opsz24.png";
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
		<header className="px-4 py-2 flex items-center">
			<img src="" alt="calendar" className="mr-2 w-12 h-12" />
			<h1 className="mr-10 text-xl text-gray-500 fond-bold">Calendar</h1>
			<button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
				Today
			</button>
			<button onClick={handlePrevMonth}>
				<span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
					<img src={chevronLeft}></img>
				</span>
			</button>
			<button onClick={handleNextMonth}>
				<span className="material-symbols-outlined cursor-pointer text-gray-600 mx-2">
					<img src={chevronRight}></img>
				</span>
			</button>
			<h2 className="ml-4 text-xl text-gray-500 font-bold">
				{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
			</h2>
		</header>
	);
}
