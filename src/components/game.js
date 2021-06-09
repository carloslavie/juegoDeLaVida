import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';
import { Button, Flex, Grid, Box } from "@chakra-ui/react"

const numRows = 50;
const numCols = 50;

//Definimos en arrays todas las operaciones alrededor de la celula
const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const generateEmptyGrid = ()=>{
  const rows = [];
    //itinero los rows y agrego los cols con 0
    for(let i = 0; i < numRows; i++){
    //inserto en rows un array con 0 por cada columna
    rows.push(Array.from(Array(numCols), ()=> 0))
    }
    return rows;
}


const Game = () => {

  //Crear el grid
  const [ grid, setGrid ] = useState(()=>{
    return generateEmptyGrid();
  });

  const [ running, setRunning ] = useState(false);
  const [ interval, setInterval ] = useState({
      intervalo:300
  })

  const runningRef = useRef(running);
  runningRef.current = running;

  //useCallback con una array vacio para que solo lo ejecute una vez
  const runSimulation = useCallback(() => {
      if(!runningRef.current){
        return;
      }

      setGrid(g => {
        return produce(g, gridCopy => {//va por el current grid g y recorre cada celda
          for (let i = 0; i < numRows; i++) {
            for (let k = 0; k < numCols; k++) {
              //computa el numero de vecinos que tiene
              let neighbors = 0;
              operations.forEach(([x, y]) => {
                const newI = i + x;
                const newK = k + y;
                if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                  neighbors += g[newI][newK];//Si tenemos una celula viva, va a sumar 1 al neighbor. Esto nos va a decir cuantos vecinos tiene
                }
              });
              //Condiciones que van a determinar el estado de la celula
              if (neighbors < 2 || neighbors > 3) {
                gridCopy[i][k] = 0;//La celula muere
              } else if (g[i][k] === 0 && neighbors === 3) {
                gridCopy[i][k] = 1;//celula nace
              }
            }
          }
        });
      });
  
      setTimeout(runSimulation, 300);
    }, []);
      

  return (
    <>
    <Flex justifyContent="center" mt="2rem">
        <Button 
            m="1rem"
            colorScheme="blue"
            width="100px"
            onClick={()=> {
                setRunning(!running);
                if(!running){
                    runningRef.current = true;
                    runSimulation();
                }      
            }}
        >{running ? 'Detener' : 'Iniciar'}</Button>

        <Button 
            m="1rem"
            colorScheme="blue"
            width="100px"
            onClick= {()=>{
                const rows = [];
                for(let i = 0; i < numRows; i++){
                rows.push(Array.from(Array(numCols), ()=> (Math.random() > 0.7 ? 1 : 0)))
                }

                setGrid(rows)
            }}
        >Random</Button>
        
        <Button
            m="1rem" 
            colorScheme="blue"
            width="100px"
            onClick= {()=>{
                setGrid(generateEmptyGrid())
            }}
        >Reiniciar</Button>

</Flex>
<Flex justifyContent="center" >   
<Box 
  backgroundImage="url('/images/head.png')" 
  backgroundRepeat="no-repeat" 
  bgSize="800px" 
  backgroundPosition="center"  >                
    <Grid 
      templateColumns={`repeat(${numCols}, 20px)`}
      backgroundColor="#28c7fabd"
      border="3px solid #3182ce"
      borderRadius="2%"
      padding= "5px"
    >
      {grid.map((rows, i) => 
      rows.map((col, k) => <div
        onClick={()=>{
          const newGrid = produce(grid, gridCopy=>{
            gridCopy[i][k] = grid[i][k] ? 0 : 1;
          })
          setGrid(newGrid)
        }}
        key={`${i}-${k}`}
        style={{
        width:20, 
        height:20, 
        backgroundColor: grid[i][k] ? "#FAA44B" : undefined,
        border: "1px solid #3182ce",
        borderRadius:"50%",
        }}/>
        ))}
    </Grid>
    </Box>
</Flex>
    </>
  );
}
 
export default Game;