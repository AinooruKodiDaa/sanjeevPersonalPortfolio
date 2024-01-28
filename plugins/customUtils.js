const CustomUtils = ({ addUtilities }) => {
  addUtilities({
 
    ".custom-scroll-bar": {
      scrollbarWidth: "0px",
      scrollbarColor: "var(--colors-gray) transparent",
    },

    ".custom-scroll-bar:-webkit-scrollbar": {
      width: "4px",
    },

    ".custom-scroll-bar::-webkit-scrollbar-track ": {
      backgroundColor: "transparent",
    },

    ".custom-scroll-bar::-webkit-scrollbar-thumb ": {
      backgroundColor: "transparent",
      borderRadius: "6px",
      border: "3px solid transparent",
    },
  });
};

module.exports = CustomUtils;
