import React, { useContext, useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import GlobalContext, {
	GlobalContextProps,
	Event,
} from "../context/GlobalContext";

interface DayProps {
	day: Dayjs;
	rowIdx: number;
}

const Day: React.FC<DayProps> = ({ day, rowIdx }) => {
	const [dayEvents, setDayEvents] = useState<Event[]>([]);
	const {
		setDaySelected,
		setShowEventModal,
		filteredEvents,
		setSelectedEvent,
	} = useContext<GlobalContextProps>(GlobalContext);

	useEffect(() => {
		const events = filteredEvents.filter(
			(evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
		);
		setDayEvents(events);
	}, [filteredEvents, day]);

	function getCurrentDayClass() {
		return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
			? "bg-blue-600 text-white rounded-full w-7"
			: "";
	}

	return (
		<div className="border border-gray-200 flex flex-col shadow-md hover:shadow-2xl">
			<header className="flex flex-col items-center">
				{rowIdx === 0 && (
					<p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
				)}
				<p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
					{day.format("DD")}
				</p>
			</header>
			<div
				className="flex-1 cursor-pointer"
				onClick={() => {
					setDaySelected(day);
					setShowEventModal(true);
				}}
			>
				{dayEvents.map((event, idx) => (
					<div
						key={idx}
						onClick={(e) => {
							e.stopPropagation(); // Prevent the parent click event
							setSelectedEvent(event);
						}}
						className={`bg-${event.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
					>
						{event.title}
					</div>
				))}
			</div>
		</div>
	);
};

export default Day;
