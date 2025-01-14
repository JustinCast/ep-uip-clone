import { ColorMode } from '@chakra-ui/color-mode/src/color-mode.utils'

type ThemeProps = {
  colorMode: ColorMode
}

export const Button = {
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: 'base',
  },
  variants: {
    social: ({ colorMode }: ThemeProps) => ({
      bg: colorMode === 'dark' ? 'brand.800' : 'brand.500',
      color: 'white',
      mr: 2,
      mb: 4,
      px: 4,
      py: 6,
      _hover: {
        bg: colorMode === 'dark' ? 'brand.600' : 'brand.700',
      },
      _active: {
        bg: colorMode === 'dark' ? 'brand.700' : 'brand.800',
      },
    }),
    solid: ({ colorMode }: ThemeProps) => ({
      bg: colorMode === 'dark' ? 'brand.800' : 'brand.500',
      color: 'white',
      fontSize: 'md',
      _hover: {
        bg: colorMode === 'dark' ? 'brand.600' : 'brand.700',
      },
      _active: {
        bg: colorMode === 'dark' ? 'brand.700' : 'brand.800',
      },
      px: 10,
    }),
  },
}
