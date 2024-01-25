// Define a function to get the status text based on the reportStatus value

//Call from lookup//
export const getAllergyTypeText = (reportStatus: string | number) => {
	switch (reportStatus) {
		case 26:
			return "Drug";
		case 27:
			return "Iodine";
		case 28:
			return "Shellfish";
		case 29:
			return "Latex";
      	case 30:
        	return "Food";
		case 31:
			return "Environmental";
		case 32:
			return "Etcetra";
		default:
			return "--";
	}
};


export const getAllergySeverityText = (reportStatus: string | number) => {
	switch (reportStatus) {
		case 35:
			return "High";
		case 34:
			return "Medium";
		case 33:
			return "Mild";	
		default:
			return "--";
	}
};

