import { styled } from "@/styles/stitches";
import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_VARIANTS } from "./consts";



export const StyledButton = styled("button", {
	width: "fit-content",
	padding: "0.5rem 0.75rem",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: "0.5rem",
	gap: "4px",
	transition: "all 50ms ease-in-out",

	"&:disabled": {
		cursor: "not-allowed",
	},

	variants:{
		iconButton: {
			true: {
				padding: "0.25rem",
				aspectRatio: "1/1",
			},
		},

		darkMode: {
			true: {
				background: "inherit",
				color: "LightGray",
			},
		},

		color: BUTTON_COLORS,
		size:BUTTON_SIZES,
		variant:BUTTON_VARIANTS,
		noPadding: {
			true: {
				padding: 0,
			},
		},
	}
});

