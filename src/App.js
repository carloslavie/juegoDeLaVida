import React from 'react';
import Game from '../src/components/game'
import { Box, Flex } from "@chakra-ui/react"


function App() {
  
  return (
    <Box 
      boxShadow="lg"
      width={{base:"100%", sm:"100%", md:"1200px", lg:"1200px"}} 
      maxWidth={{base:"100%", sm:"100%", md:"1200px", lg:"1200px"}} 
      m={{base:"auto", sm:"auto", md:"50px auto", lg:"50px auto"}}  
      pb="50px" 
      backgroundColor="#28c7fa" 
      borderRadius={{base:"0", sm:"0", md:"2%", lg:"2%"}}>
      <Flex flexDirection="column" justifyContent="center">
        <Box 
          fontFamily="Roboto"
          fontSize={{base:"2.5rem", sm:"2.5rem", md:"6rem", lg:"6rem"}} 
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
