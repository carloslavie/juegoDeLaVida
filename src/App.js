import React from 'react';
import Game from '../src/components/game'
import { Box, Flex } from "@chakra-ui/react"
import styled from '@emotion/styled'




function App() {
  
  return (
    <Box maxWidth="1200px" m="50px auto" pb="50px" backgroundColor="#28c7fa" borderRadius="10%">
      <Flex flexDirection="column" justifyContent="center">
        <Box fontSize="6rem" textAlign="center" fontWeight="semibold">Juego de la Vida</Box>
        {/* <Box margin="auto">          
          <img src='/images/head.png' alt="head" width="200px"/>
        </Box>       */}
        <Box fontSize="1.5rem" textAlign="center" fontWeight="semibold" pb="1rem">John Horton Conway</Box>
      </Flex>
      
      <Game/>
    </Box>
  );
}

export default App;
