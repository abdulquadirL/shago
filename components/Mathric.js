import React, { useState } from 'react'
import { Box, Text } from '@chakra-ui/react';

export const Mathric = () => {

  const [state, setState] = React.useState
  ({
    num1: 3,
    num2: 2,
    response: "",
    score: 0,
    incorrect: false
  });

  function inputKeyPress(event) 
  {
    if (event.key === 'Enter') {
      const answer = parseInt(state.response);
      if (state.num1 + state.num2 === answer) {
        //User got the question right
        setState({
          ...state,
          num1: Math.ceil(Math.random() * 10),
          num2: Math.ceil(Math.random() * 10),
          score: state.score + 1,
          response: "",
          incorrect: false
        })
      } else {
        //User got the question wrong
        setState({
          ...state,
          score: state.score,
          response: "",
          incorrect: true
        })
      }
    }
  }

  function updateResponse(event) {
    setState({
      ...state, 
      response: event.target.value
    })
    
  }

  if (state.score === 10) {
    return(
      <Text color='green' textAlign='center' fontSize='80px' fontFamily='Helvetica'> You Won</Text>
    )

  }

  return (
    <Box fontFamily='sans-serif' bg={'gray.200'} textAlign='center'>
      <Text color={state.incorrect ? 'red' : 'green.400'} fontSize='70px'>{state.num1} + {state.num2}</Text>
      <input autoFocus={true} onKeyPress={inputKeyPress} onChange={updateResponse} value={state.response}/>
      <div>Score: {state.score}</div>
    </Box>
  )
}
