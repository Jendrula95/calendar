import React, { Dispatch, SetStateAction } from "react";
import { Dayjs } from "dayjs";

export type Event = {
	title: string;
	description: string;
	label: string;
	day: number;
	id: number;
};

type Action = {
	type: string;
	payload: Event;
};

type Label = {
	label: string;
	checked: boolean;
};

export interface GlobalContextProps {
	monthIndex: number;
	setMonthIndex: Dispatch<SetStateAction<number>>;
	smallCalendarMonth: number | null;
	setSmallCalendarMonth: Dispatch<SetStateAction<number | null>>;
	daySelected: Dayjs | null;
	setDaySelected: Dispatch<SetStateAction<Dayjs | null>>;
	showEventModal: boolean;
	setShowEventModal: Dispatch<SetStateAction<boolean>>;
	dispatchCalEvent: (action: Action) => void;
	savedEvents: Event[];
	selectedEvent: Event | null;
	setSelectedEvent: Dispatch<SetStateAction<Event | null>>;
	setLabels: Dispatch<SetStateAction<Label[]>>;
	labels: Label[];
	updateLabel: (label: Label) => void;
	filteredEvents: Event[];
}

const GlobalContext = React.createContext<GlobalContextProps>({
	monthIndex: 0,
	setMonthIndex: () => {},
	smallCalendarMonth: null,
	setSmallCalendarMonth: () => {},
	daySelected: null,
	setDaySelected: () => {},
	showEventModal: false,
	setShowEventModal: () => {},
	dispatchCalEvent: () => {},
	savedEvents: [],
	selectedEvent: null,
	setSelectedEvent: () => {},
	setLabels: () => {},
	labels: [],
	updateLabel: () => {},
	filteredEvents: [],
});

export default GlobalContext;
