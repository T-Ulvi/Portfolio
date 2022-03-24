import { Container,Grid,Typography } from '@mui/material'
import React from 'react'
import second from '../assets/images/last.png'
import Button from '@mui/material/Button';
import Resume from '../assets/Resume.pdf'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Box } from '@mui/system';
function About() {

  return (
    
      <Container id="about" sx={{paddingTop:"120px",marginBottom:"40px"}}>
     <Grid container alignItems="center">
      <Grid data-aos='fade-right'  data-aos-duration="1000" item xs={12} md={6} sx={{overflow:"hidden"}}>
      <Typography variant="h4" className='section-Header' >
     <span className='numbers'>02.</span>  About Me
     </Typography>
      <Typography className='mytext' variant='h6' >
      <i className="fa-solid fa-quote-left quote"></i> Hi, I’m <Typography variant='h6' component={"span"} sx={{fontWeight: '700 !important',color:"#e63d3d" }}>Ülvi Təyyarzadə</Typography>, a Front-End Developer located in Baku. 
       I have a serious passion for entire frontend spectrum, UI designs, 
       effects and creating intuitive, dynamic user experiences. I will help you make creative and memorable web applications.
        I am interested in working on ambitious projects with positive people. 
        If you have any request or question, don’t hesitate to use the form or send me an email. <i className="fa-solid fa-quote-right quote"></i>
       </Typography >
         <div className='Cvbtn'>
        <Button variant="contained" className='downloadbtn' style={{marginTop:"20px", backgroundColor:"#CC3333",overflow:"hidden",transition:"0.4s"}}href={Resume} download endIcon={<FileDownloadOutlinedIcon/>}>Download CV
         <span className='ribbon'></span>
         </Button>
           </div>
      </Grid>
      <Grid data-aos='fade-left'  data-aos-duration="1200" className='mypicture' position={"relative"} item xs={12} md={6} sx={{zIndex:"-1",transform:"translate(40px,-50px)"}}>

          <Box component="div"  sx={{transform:"translateY(-40px)",height:"550px",textAlign:"center",overflow:"hidden"}}>
          <img src={second} style={{transform:"translateY(-35px)",height:"650px",width:"100%",objectFit:"cover",}} alt="" />
          </Box>        
     </Grid>
     </Grid>
    </Container>
  
  )
}

export default About