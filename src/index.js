import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ColorModeScript } from '@chakra-ui/react'  

import App from './App'

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <App />
  </StrictMode>,
  document.getElementById('root')
)