const ContainerPlugin = ({ addUtilities }) => {
	addUtilities({
		".container": {
			margin: "0 auto",
			maxWidth: "90rem",
			
		},
	});
};

module.exports = ContainerPlugin;
