import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Grid, GridItem} from '@chakra-ui/react'

function App() {
  

  return (
    <div className="App">
      <Grid templateAreas={{base:`"nav" "aside main"`,lg : `"nav nav" "aside main"`}}>
        <GridItem area='nav' bg='coral'>
          Nav
        </GridItem>
        <GridItem area='aside' bg='gold'>
          Aside
        </GridItem>
        <GridItem area='main' bg='dodgerblue'>
          Main
        </GridItem>
      </Grid>
    </div>
  )
}

export default App
