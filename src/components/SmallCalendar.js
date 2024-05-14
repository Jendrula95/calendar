import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { getMonth } from "../util";

import GlobalContext from "../context/GlobalContext";

export default function SmallCalendar() {
	const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
	const [currentMonth, setCurrentMonth] = useState(getMonth());
	useEffect(() => {
		setCurrentMonth(getMonth(currentMonthIdx));
	}, [currentMonthIdx]);
	const { monthIndex, setSmallCalendarMonth, setDaySelected, daySelected } =
		useContext(GlobalContext);
	useEffect(() => {
		setCurrentMonthIdx(monthIndex);
	}, [monthIndex]);
	function handlePrevMonth() {
		setCurrentMonthIdx(currentMonthIdx - 1);
	}
	function handleNextMonth() {
		setCurrentMonthIdx(currentMonthIdx + 1);
	}
	function getDayClass(day) {
		const format = "DD-MM-YY";
		const nowDay = dayjs().format(format);
		const currDay = day.format(format);
		const selectedDay = daySelected && daySelected.format(format);
		if (nowDay === currDay) {
			return "bg-blue-500 rounded-full text-white";
		} else if (currDay === selectedDay) {
			return "bg-blue-100 rounded-full text-red-600 font-bold";
		} else {
			return "";
		}
	}
	return (
		<div className="mt-9">
			<header className="flex justify-between">
				<p
					className="text-gray-500 fond-bold ml-2"
					style={{ color: "#1B5E20" }}
				>
					{dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM")}
				</p>
				<div>
					<button onClick={handleNextMonth}>
						<span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
							chevron_left
						</span>
					</button>
					<button onClick={handlePrevMonth}>
						<span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
							chevron_right
						</span>
					</button>
				</div>
			</header>
			<div className="grid grid-cols-7 grid-rows-6">
				{currentMonth[0].map((day, i) => (
					<span
						key={i}
						className="text-sm py-1 text-center"
						style={{ color: "red" }}
					>
						{day.format("dd").charAt(0)}
					</span>
				))}
				{currentMonth.map((row, i) => (
					<React.Fragment key={i}>
						{row.map((day, idx) => (
							<button
								key={idx}
								onClick={() => {
									setSmallCalendarMonth(currentMonthIdx);
									setDaySelected(day);
								}}
								className={`py-1 w-full ${getDayClass(day)}`}
							>
								<span className="text-sm">{day.format("D")}</span>
							</button>
						))}
					</React.Fragment>
				))}
			</div>
		</div>
	);
}
