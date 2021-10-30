import { useState, useEffect, useRef } from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import alanBtn from '@alan-ai/alan-sdk-web'
import { scroller } from 'react-scroll'

import Navbar from './components/Navbar'
import Faq from './components/Faq'

const App = () => {
  const [index, setIndex] = useState(null)
  const [toggleColorFlag, setToggleColorFlag] = useState(false)

  const alanBtnInstance = useRef(null)
  
  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: process.env.REACT_APP_ALAN_AI_KEY,
        onCommand: (commandData) => {
          console.log(commandData)
          if (commandData.command === 'gotoFaq') {
            scroller.scrollTo(`accordion-item-${commandData.faqId}`, {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart'
            })
            setIndex(commandData.faqId - 1)
          }
          else if (commandData.command === 'toggleColorMode') {
            setToggleColorFlag(prevFlag => !prevFlag)
          }
        }
      })
    }
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Navbar toggleColorFlag={toggleColorFlag} />
      <Faq {...{ index, setIndex }} />
    </ChakraProvider>
  )
}

export default App