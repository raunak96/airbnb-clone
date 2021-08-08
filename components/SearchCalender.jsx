import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useMemo } from "react";

/**
 * DateRangePicker component - basically a calender to select a range of dates
 * ranges - Defines range of date selected
 * rangeColors - color corresponding to each range of date selected
 * minDate - Earliest start Date possible - (in this case today as we cant book in past)
 **/
const SearchCalender = ({ startDate, endDate, setStartDate, setEndDate }) => {
	const selectionRange = useMemo(
		() => ({
			startDate,
			endDate,
			key: "selection",
		}),
		[startDate, endDate]
	);
	const handleRangeSelect = range => {
		setStartDate(range.selection.startDate);
		setEndDate(range.selection.endDate);
	};
	return (
		<DateRangePicker
			ranges={[selectionRange]}
			minDate={new Date()}
			rangeColors={["#FF385C"]}
			onChange={handleRangeSelect}
		/>
	);
};

export default SearchCalender;
