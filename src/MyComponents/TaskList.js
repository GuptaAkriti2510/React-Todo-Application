import React from 'react'
import TodoItem from './TodoItem'

import { Heading, Text,Box, Center, Alert,AlertIcon } from '@chakra-ui/react'

const TaskList = (props) => {
  return (
    <Box>
        <Heading fontSize={50}><Center>Todos List</Center></Heading>
        <Text>
        {/* Checking if there are any tasks left */}
        { props.total_items.length === 0? 
            <Alert status='success' fontSize={40} height={200} margin={10}>
              <AlertIcon />
                All Done!! No Todos to display
            </Alert> 
          :
          props.total_items.map((todo)=>{
          return(
          <>

          {/* Display remaining Tasks */}
            <br></br>
            <TodoItem t={todo} ondelete={props.ondelete} ></TodoItem>        
            <br></br>
          </>
          )
          })
        }
        </Text>
    </Box>
  )
}

export default TaskList

