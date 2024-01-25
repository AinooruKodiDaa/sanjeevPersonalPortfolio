const CustomUtils = ({ addUtilities }) => {
  addUtilities({
 
    ".custom-scroll-bar": {
      scrollbarWidth: "thin",
      scrollbarColor: "var(--colors-gray) transparent",
    },

    ".custom-scroll-bar:-webkit-scrollbar": {
      width: "4px",
    },

    ".custom-scroll-bar::-webkit-scrollbar-track ": {
      backgroundColor: "transparent",
    },

    ".custom-scroll-bar::-webkit-scrollbar-thumb ": {
      backgroundColor: "var(--colors-gray)",
      borderRadius: "6px",
      border: "3px solid transparent",
    },
  });
};

module.exports = CustomUtils;
