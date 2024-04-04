import React, { useState } from 'react'
import { Button, Container, Heading, Input, Text } from '@chakra-ui/react';

const TellUs = (props) => {
  //Function to keep updating the Message box content. 
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }

  //Function to submit the message.
  const messagesubmit=()=>{
    setText("");
    setDisplay("Feedback submitted. Thank You!");
  }

  //Use State and State Hook(React Hooks).
  const [text,setText]=useState("");
  const [display,setDisplay]=useState("");

  return (
    <Container marginTop={8} border={'0.5px solid grey'}>
          <Heading >Liked our Application ? Share with us...</Heading>
          <br></br>
          <br></br>
          <Text fontSize={25} marginBottom={2}>Message </Text>
          <Input size={'lg'} placeholder='type here..'  type='text' value={text} onChange={handleOnChange} id="text" /> 
          <Button onClick={messagesubmit} colorScheme='teal' marginTop={5} marginBottom={3}>Submit</Button>
          <Text color={'teal'}>{display}</Text>
    </Container>
  )
}

export default TellUs
