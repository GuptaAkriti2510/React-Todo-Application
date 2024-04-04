import { Center, Heading, Image,Box} from '@chakra-ui/react'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import c1 from '../assests/eating-almonds.webp';
import c2 from '../assests/drink-water.webp';
import c3 from '../assests/make-notes.jpg';
import c4 from '../assests/Reading-.webp';
import c5 from '../assests/walking.webp';
import c6 from '../assests/wash-clothes.jpg';
import {EditIcon} from '@chakra-ui/icons';

export default function Home() {
  return (
    <>
      <Heading marginTop={130} fontFamily={'cursive'} fontSize={60}><Center>Having a bundle of Tasks to do? </Center></Heading>
      <br></br>
      <Heading fontFamily={'cursive'} fontSize={70}><Center>Organize them &nbsp;<EditIcon></EditIcon></Center></Heading>
      <Carousel autoPlay infiniteLoop interval={1000} showIndicators={false} showArrows={false} showStatus={false} showThumbs={false}>
        <Box padding={40}>
          <Image src={c1}></Image>
        </Box>
        <Box padding={40}>
          <Image src={c2}></Image>
        </Box>
        <Box padding={40}>
          <Image src={c3}></Image>
        </Box>
        <Box padding={40}>
          <Image src={c4}></Image>
        </Box>
        <Box padding={40}>
          <Image src={c5}></Image>
        </Box>
        <Box padding={40}>
          <Image src={c6}></Image>
        </Box>
                    
      </Carousel>
    </>
  )
}
