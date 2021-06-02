export const TextStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    heading: {
      color: "brand.500",
      fontSize: {base: "2xl", sm: "3xl"},
      fontWeight: 700
    },
    paragraph: {
      color: "gray.900",
      fontSize: {base: "sm", sm: "18px"},
      fontWeight: 500,
      lineHeight: '30px'
    },
    authorName: {
      color: "brand.500",
      fontSize: {base: "2xl", sm: "3xl"},
      fontWeight: 700
    },
    authorTitle: {
      color: "gray.500",
      fontSize: {base: "sm", sm: "md"},
      fontWeight: 500,
      lineHeight: '24px'
    }
  },
  // default values for `size` and `variant`
  defaultProps: {},
}

export const HeadingStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
  },
  // default values for `size` and `variant`
  defaultProps: {},
}