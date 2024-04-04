import React from 'react'
import { Link } from 'react-router-dom'

//Importing components and Icons from React Chakra UI
import { Button,Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,useDisclosure, VStack, Center } from '@chakra-ui/react'
import {HamburgerIcon,ChatIcon} from '@chakra-ui/icons';

export default function Header(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()               //To implement the functionality of drawer
  return (
        <>
        <Button colorScheme='teal' onClick={onOpen} fontSize={45} height={50} marginLeft={5} marginTop={5}><HamburgerIcon></HamburgerIcon></Button>
        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />  
                <DrawerHeader fontSize={30} marginBottom={10}><Center><u>Welcome</u></Center></DrawerHeader>
                <DrawerBody>
                    <VStack>
                        <Button onClick={()=>{onClose()}} variant="ghost" colorScheme='teal' fontSize={30} marginBottom={10} ><Link to="/home">Home</Link></Button>
                        <Button onClick={()=>{onClose()}} variant="ghost" colorScheme='teal' fontSize={30} marginBottom={10}><Link to="/taskinput">Add Task</Link></Button>
                        <Button onClick={()=>{onClose()}} variant="ghost" colorScheme='teal' fontSize={30} marginBottom={220}><Link to="/tasklist">View Tasks</Link></Button>
                        <Button onClick={()=>{onClose()}} colorScheme='teal' bgColor={'white'} fontSize={30}><Link to="/tellus">Tell Us &nbsp; <ChatIcon></ChatIcon></Link></Button>   
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>      
        </>
  )
}
