import { useEffect, useRef } from 'react'
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

export const ColorModeSwitcher = ({ toggleColorFlag, ...rest }) => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  const isfirstMount = useRef(true)

  useEffect(() => {
    if (isfirstMount.current) {
      isfirstMount.current = false
      return
    }
    toggleColorMode()
  }, [toggleColorFlag])

  return (
    <IconButton
      size='md'
      fontSize='lg'
      aria-label={`Switch to ${text} mode`}
      variant='ghost'
      color='current'
      marginLeft='2'
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...rest}
    />
  )
}