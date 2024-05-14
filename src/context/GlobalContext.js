import React from "react";
import SmallCalendar from "../components/SmallCalendar";

const GlobalContext = React.createContext({
	monthIndex: 0,
	setMonthIndex: (index) => {},
	smallCalendarMonth: 0,
	setSmallCalendarMonth: (index) => {},
	daySelected: null,
	setDaySelected: (day) => {},
	showEventModal: false,
	setShowEventModal: () => {},
});

export default GlobalContext;
