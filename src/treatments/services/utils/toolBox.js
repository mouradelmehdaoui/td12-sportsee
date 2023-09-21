

// Function to format a date for chart labels
export const formatChartDate = (dateString) => {
	const date = new Date(dateString);
	const dayOfMonth = date.getDate();
	return dayOfMonth;
};

