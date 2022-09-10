import { mode } from '@chakra-ui/theme-tools'

export const selectProps = {
   baseStyle: {
      field: {
         textStyle: 'h3Light',
         rounded: '8px',
         border: '1px solid',
      },
   },
   variants: {
      primary: props => ({
         field: {
            color: mode('greyBlack', '#fff')(props),
            bg: mode('#fff', 'purpleBlackDark')(props),
            borderColor: mode('greyLight', 'purpleBlackLight')(props),
            height: '50px',
            '> option, > optgroup': {
               textStyle: 'h3Light',
               bg: mode('#fff', 'purpleBlackDark')(props),
               color: mode('greyBlack', '#fff')(props),
               _hover: {
                  bgColor: 'yellow',
               },
            },
         },
         icon: {
            color: 'purpleDark',
         },
      }),
   },
}
