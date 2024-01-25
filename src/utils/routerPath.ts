export const extractTabPath = (url: string) => {
	const tabParam = "tab=";
	const tabValue = url.includes(tabParam) ? url.split(tabParam)[1] : null;

	// If you want to display the value in title case (e.g., "Patients" instead of "patients")
	const formattedTabValue = tabValue
		? tabValue.charAt(0).toUpperCase() + tabValue.slice(1)
		: null;

	return formattedTabValue as string;
};
