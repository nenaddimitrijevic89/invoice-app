const toastCommonProps = {
   duration: 5000,
   position: 'top-right',
   variant: 'solid',
   isClosable: true,
}

export const successToastProps = {
   ...toastCommonProps,
   status: 'success',
   bg: 'green',
}

export const errorToastProps = {
   ...toastCommonProps,
   status: 'error',
}
