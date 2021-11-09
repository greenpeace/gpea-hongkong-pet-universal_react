export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    donateButton: {
      fontSize: 'xl',
      color: '#fff',
      fontWeight: 'bold',
      height: '50px',
      mt: 2,
      mb: 4,
    },
    formSubmitButton: {
      bgColor: 'brand.500',
      fontWeight: 'bold',
      w: '100%',
      borderRadius: 'md',
      fontSize: 'xl',
      px: 2,
      py: 6,
      color: 'white',
      bg: 'orange.500',
      _hover: { bg: 'orange.300' },
    },
  },
  // default values for `size` and `variant`
  defaultProps: {},
};

export const HeadingStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {},
};
