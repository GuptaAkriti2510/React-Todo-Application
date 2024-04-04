import React from 'react'
import { Button, Heading, Text,Box } from '@chakra-ui/react'

const TodoItem = ({t,ondelete}) => {
  return (
    <>
    <Box marginLeft={130} marginRight={100} marginBottom={30} bg={'rgb(60, 130, 125)'} borderRadius={20} padding={8}>
      <Heading fontSize={40}>{t.sno}-   {t.title}</Heading>
      <Text fontSize={25}>{t.desc}</Text>
      <Button onClick={()=>{ondelete(t)}} colorScheme='red' bgColor={'black'} color={'white'} fontSize={25} marginBottom={5} marginLeft={900}>Delete Task</Button>
    </Box>  
    </>
  )
}

export default TodoItem

