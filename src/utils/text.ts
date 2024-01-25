import { ORG_DATE_FORMAT } from "@src/consts";
import { GetAge, ParseStringDate } from "./dates-fns";

export function SnakeCaseToTitleCase(str: string, firstLtrCapitalize = true) {
	const words = str.split("_");

	const capitalizedWords = words.map((word, i) => {
		if (firstLtrCapitalize && i > 0) return word.toLowerCase();

		const firstLetter = word[0].toUpperCase();
		const rest = word.slice(1).toLowerCase();
		return `${firstLetter}${rest}`;
	});
	console.log({ capitalizedWords });
	return capitalizedWords.join(" ");
}

export const extractTabPath = (url: string) => {
	const tabParam = "tab=";
	const tabValue = url.includes(tabParam) ? url.split(tabParam)[1] : null;

	// If you want to display the value in title case (e.g., "Patients" instead of "patients")
	const formattedTabValue = tabValue
		? tabValue.charAt(0).toUpperCase() + tabValue.slice(1)
		: null;

	return formattedTabValue as string;
};


export const formatAge = (dateOfBirth: string): string => {
	const birthDate = ParseStringDate(dateOfBirth, ORG_DATE_FORMAT);
	const ageInYears = GetAge(birthDate);
	const month = birthDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month
  
	return `${ageInYears} - ${month.toString().padStart(2, '0')}`;
  };
  