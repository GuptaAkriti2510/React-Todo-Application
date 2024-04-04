import React, { useState } from 'react'
import { Box, Button, Center, Heading,Input,Text } from '@chakra-ui/react';

const TaskInput = (props) => {
    //State Variables
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");

    //Function to submit the tasks given by the user.
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description not defined");
        }    
        else{
            props.addTodo(title,desc);          //addTodo() function from App.js is called.
            setTitle("");                       
            setDesc("");                        //Making boxes empty
        }  
        
    }
  return (
    <Box marginLeft={20} marginRight={30}>
        <Heading fontSize={50}><Center>Add a Todo</Center></Heading>
        <br></br>
        <br></br>
        <form  onSubmit={submit}>
                <Text fontSize={40}>Title</Text>
                <Input placeholder='Task Name' type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}  id="title" ></Input>
                <br></br>
                <br></br>
                <Text fontSize={40} >Description</Text>
                <Input  placeholder='Describe the Task' type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}  id="desc"/>  
            <Button type="submit" className="btn btn-primary"  colorScheme='teal' marginTop={5} fontSize={24}>Submit</Button>
        </form>
    </Box>
  )
}

export default TaskInput
