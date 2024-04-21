import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Grid, GridItem, Show} from '@chakra-ui/react'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenre'
import GameGrid from './components/GameGrid'
import Navbar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/usePlatforms'

function App() {
  
  const[selectedGenre,setSelectedGenre]=useState<Genre |null>(null);
  const[selectedPlatform,setSelectedPlatform] = useState<Platform | null>(null);
  return (
    <div className="App">
      <Grid templateAreas={{base:`"nav" "aside main"`,lg : `"nav nav" "aside main"`}} templateColumns={{base :'1fr',lg:'200px 1fr'}}>
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above ="lg"> 
        <GridItem area='aside' paddingX={5} bg='gold'>
        <GenreList selectedGenre ={selectedGenre} onSelectedGenre={(genre)=>setSelectedGenre(genre)}/>
        </GridItem>
        </Show>
        <GridItem area= "main" >
          <PlatformSelector onSelectPlatform={(platform)=>setSelectedPlatform(platform)}/>
          <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </div>
  )
}

export default App;
