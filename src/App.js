import React from 'react';
import Game from '../src/components/game'
import { Box, Flex } from "@chakra-ui/react"
import styled from '@emotion/styled'




function App() {
  
  return (
    <Box maxWidth="1200px" m="50px auto" pb="50px" backgroundColor="#28c7fa" borderRadius="5%">
      <Flex flexDirection="column" justifyContent="center">
        <Box fontSize="6rem" textAlign="center" fontWeight="semibold" pb="1rem" pt="2rem">Juego de la Vida</Box>
        <Box fontSize="1.5rem" textAlign="center" fontWeight="semibold" pb="1rem">John Horton Conway</Box>
      </Flex>
      
      <Game/>
    </Box>
  );
}

export default App;
