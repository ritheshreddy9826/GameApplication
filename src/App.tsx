import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Box, Flex, Grid, GridItem, HStack, Show} from '@chakra-ui/react'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenre'
import GameGrid from './components/GameGrid'
import Navbar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/usePlatforms'
import SortSelector from './components/SortSelector'

export interface GameQuery{
  genre : Genre | null;
  platform : Platform | null;
  sortOrder: string;
  searchText : string;
}

function App() {
  
  const[gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery);
  
  return (
    <div className="App">
      <Grid templateAreas={{base:`"nav" "aside main"`,lg : `"nav nav" "aside main"`}} templateColumns={{base :'1fr',lg:'200px 1fr'}}>
        <GridItem area="nav">
          <Navbar onSearch={(searchText)=> setGameQuery({...gameQuery,searchText})}/>
        </GridItem>
        <Show above ="lg"> 
        <GridItem area='aside' paddingX={5} bg='gold'>
        <GenreList selectedGenre ={gameQuery.genre} onSelectedGenre={(genre)=>setGameQuery({...gameQuery,genre})}/>
        </GridItem>
        </Show>
        <GridItem area= "main" >
          <Flex paddingLeft={2} marginBottom={5}>
            <Box marginRight={5}>
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
            </Box>
           <SortSelector sortOrder={gameQuery.sortOrder}onselectedSortOrder={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})}/>
          </Flex>
          <GameGrid gameQuery={gameQuery}  />
        </GridItem>
      </Grid>
    </div>
  )
}

export default App;
