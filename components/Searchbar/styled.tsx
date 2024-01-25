import { styled } from "@/styles/stitches";

export const StyledSearchBar = styled("input", {
	padding: "0.25rem 0.75rem",
	width: "100%",
	background: "inherit",
	border: "1px solid $primary",
	borderRadius: "4px",

	"&:placeholder": {
		color: "$primary",
	},

	"&:focus": {
		outline: "$primary 2px solid",
	},

	variants: {
		darkMode: {
			true: {
				border: "1px solid $secondary",
				color: "$primary",

				"&:focus": {
					outline: "$primary 2px solid",
				},
			},
		},
	},
});
