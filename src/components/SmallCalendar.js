import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { getMonth } from "../util";
import chevronLeft from "../assets/chevron_left_24dp_FILL0_wght400_GRAD0_opsz24.png";
import chevronRight from "../assets/chevron_right_24dp_FILL0_wght400_GRAD0_opsz24.png";
import GlobalContext from "../context/GlobalContext";

export default function SmallCalendar() {
	const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
	const [currentMonth, setCurrentMonth] = useState(getMonth());
	useEffect(() => {
		setCurrentMonth(getMonth(currentMonthIdx));
	}, [currentMonthIdx]);
	const { monthIndex } = useContext(GlobalContext);
	useEffect(() => {
		setCurrentMonthIdx(monthIndex);
	}, [monthIndex]);
	function handlePrevMonth() {
		setCurrentMonthIdx(currentMonthIdx - 1);
	}
	function handleNextMonth() {
		setCurrentMonthIdx(currentMonthIdx + 1);
	}
	return (
		<div className="mt-9">
			<header className="flex justify-between">
				<p className="text-gray-500 fond-bold">
					{dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM")}
				</p>
				<button onClick={handleNextMonth}>
					<span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
						<img src={chevronLeft}></img>
					</span>
				</button>
				<button onClick={handlePrevMonth}>
					<span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
						<img src={chevronRight}></img>
					</span>
				</button>
			</header>
		</div>
	);
}
