import React from 'react';
import Game from '../src/components/game'
import { Box, Flex } from "@chakra-ui/react"


function App() {
  
  return (
    <Box 
      boxShadow="lg"
      maxWidth="1200px" 
      m="50px auto" 
      pb="50px" 
      backgroundColor="#28c7fa" 
      borderRadius="2%">
      <Flex flexDirection="column" justifyContent="center">
        <Box 
          fontFamily="Roboto"
          fontSize="6rem" 
          textAlign="center" 
          fontWeight="semibold"            
          pt="2rem"
          textShadow= "3px 3px #308fad"
        >Juego de la Vida</Box>
        <Box 
          fontFamily="Pt Sans"
          fontSize="1.5rem" 
          textAlign="center" 
          fontWeight="semibold" 
          pb="1rem"
        >John Horton Conway</Box>
      </Flex>
      
      <Game/>

    </Box>
  );
}

export default App;
