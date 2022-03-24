import { Button,Container, Typography } from '@mui/material'
import React, { useRef, useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter';
import gsap from "gsap"
function Home() {

  const wordRef1=useRef();
  const wordRef2=useRef();
  const btn=useRef();
  const letter1=useRef();
  const letter2=useRef();
  const letter3=useRef();
  const letter4=useRef();
  const letter5=useRef();
  const letter6=useRef();
  const letter7=useRef();
  const letter8=useRef();
  const letter9=useRef();
  const letter10=useRef();
  const letter11=useRef();
  const letter12=useRef();
  const letter13=useRef();
  const letter14=useRef();
  const letter15=useRef();
  const letter16=useRef();
  const letter17=useRef();
  const letter18=useRef();
  const letter19=useRef();
  const letter20=useRef();
  const tl = gsap.timeline();
  
  
  
  useEffect(() => {
  
     setTimeout(() => {
  
      tl.from(letter1.current, { scale:2,duration:0.2,opacity:"0"})
      .from(letter2.current, { scale:2,duration:0.2,opacity:"0"})
      .from(letter3.current, { scale:2,duration:0.2,opacity:"0"})
      .from(letter4.current, { scale:2,duration:0.2,opacity:"0"})
      .from(letter5.current, { scale:2,duration:0.2,opacity:"0"})
      .from(letter6.current, { scale:2,duration:0.2,opacity:"0"})
      .from(letter7.current, { scale:2,duration:0.2,opacity:"0"})
      .from(letter8.current, { scale:2,duration:0.2,opacity:"0"})
      .from(letter9.current, { scale:2,duration:0.2,opacity:"0"})
      .from(letter10.current, { scale:2,duration:0.2,opacity:"0"})
      .from(letter11.current, { scale:2,duration:0.2,opacity:"0"})
      .from(letter12.current, { scale:2,duration:0.2,opacity:"0"})
      .from(letter13.current, { scale:2,duration:0.2,opacity:"0"})
      .from(letter14.current, { scale:2,duration:0.2,opacity:"0"})
      .from(letter15.current, { scale:2,duration:0.2,opacity:"0"})
      .from(letter16.current, { scale:2,duration:0.2,opacity:"0"})
      .from(letter17.current, { scale:2,duration:0.2,opacity:"0"})
      .from(letter18.current, { scale:2,duration:0.2,opacity:"0"})
      .from(letter19.current, { scale:2,duration:0.2,opacity:"0"})
      .from(letter20.current, { scale:2,duration:1,opacity:"0",ease:"elastic"})

     .from(wordRef2.current, {y:200,scale:0.3,duration:1,opacity:"0",ease:"elastic"})
     .to(wordRef1.current, {color:"rgb(93, 253, 93) ",duration:1})
     .to(wordRef2.current, {color:"rgb(93, 253, 93) ",duration:1})
     .from(btn.current, {y:100,rotate:"360deg",opacity:"0",ease:"elastic",duration:2  },"-=2")
     
     
     },3000);     
       
    },[]);
  return (
    <Container id="home" className='pt-8'>
    <div className='text-center'>
        <div className='scroll'>
        <a href="#about">
          <div className='next'>
        <span>Scroll Down</span>
            <div className="scroll-more">↓</div>
          </div>
          </a>
        </div>

       
        <div className='intro'>

          <Typography variant='h1' ref={wordRef1} className='fadeword'>
          

          <span ref={letter1}>H</span>
          <span ref={letter2}>i</span>
          <span ref={letter3}>,</span>
          &nbsp;
          <span ref={letter4}>I</span>
          <span ref={letter5}>'</span>
          <span ref={letter6}>m</span>
          &nbsp;
          <span ref={letter7}>Ü</span>
          <span ref={letter8}>l</span>
          <span ref={letter9}>v</span>
          <span ref={letter10}>i</span>
          &nbsp;
          <span ref={letter11}>T</span>
          <span ref={letter12}>ə</span>
          <span ref={letter13}>y</span>
          <span ref={letter14}>y</span>
          <span ref={letter15}>a</span>
          <span ref={letter16}>r</span>
          <span ref={letter17}>z</span>
          <span ref={letter18}>a</span>
          <span ref={letter19}>d</span>
          <span ref={letter20}>ə</span>

          {/* <span ref={letter2}> I'm Ülvi Təyyarzadə</span>  */}
          
          </Typography>
          <a href="#about">
          <Typography variant='h1' sx={{color:"#ccd6f6"}}  ref={wordRef2} className='fadeword fade2'>
          Welcome to my portfolio
          </Typography>
          </a>
        <Button ref={btn} href="tel:+994514084879"  className="btnCall" variant="contained">Let's Talk</Button>
      </div>
    
      <Typography className='typewriterLetter' sx={{color:"rgb(93, 253, 93) "}} variant='h3'>
         I'm 
        <Typewriter
            words={[' Front End Developer', ' React Developer']}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
      </Typography>
    </div>
    </Container>
  )
}

export default Home