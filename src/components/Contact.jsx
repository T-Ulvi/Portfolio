import React from 'react'
import { Container,Grid,Typography,Paper  } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';  
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bgimage from '../assets/images/bg.svg'
function Contact() {
  const [send,Setsend]=useState(false);
  const [inputs,Setinputs]=useState({
    user_email:"",
    name:"",
    texts:"",
  });
const handleInp=(e)=>{
 Setinputs({...inputs,[e.target.name]:e.target.value})
}
  const sendData=(e)=>{
    e.preventDefault();
    if(inputs.name&&inputs.texts&&inputs.user_email){
     if(inputs.user_email.includes("@gmail.com")||inputs.user_email.includes("@mail.ru")){
      emailjs.sendForm("service_c7uvsvu","template_7luqctv",e.target,"nr9aHJcRDwCqJzcVM")
      toast("😉 Message's sent!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
        Setinputs({
       user_email:"",
        name:"",
        texts:"",})
     }
     else{
      toast("😕 Email is incorrect!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
     }
    }
    else{
      toast("🤔 Please fill all text fields!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    }
    
  }
  return (
    <div>
           <ToastContainer />
      <Container id="contact" sx={{paddingTop:"120px"}} align="center">
        <img className='contactImage' src={bgimage} alt="" />
      <Typography variant="h6" className='other-Header contact'align='center' >
          <span className='numbers'>04.What’s Next? </span>
     </Typography >
      <Typography variant="h3" className='contact-header' align='center' >
                          Get In Touch
     </Typography >
     <Button variant='contained' color={send? "error":"primary"} sx={{marginTop:"40px !important",marginBottom:"40px !important"}} onClick={(e)=>Setsend(!send)}>
       { send? "Close mail":" Send me mail"
       }
     </Button>

    <Paper className={send? "paper":"paper scaleY-0"}>
      <Grid container component={"form"} onSubmit={(e)=>sendData(e)} alignItems={"center"} spacing={2}>
          <Grid item xs={12} md={6} >
              <TextField fullWidth id="Emailinputs"  name="user_email" value={inputs.user_email} onChange={(e)=>handleInp(e)} type="email" label="Enter your email" variant="outlined" />
          </Grid>
          <Grid  item xs={12} md={6} >
              <TextField fullWidth id="Nameinputs"  name="name"  value={inputs.name}  onChange={(e)=>handleInp(e)} label="Enter your name" variant="outlined" />
          </Grid>
          <Grid item xs={12} >
          <TextareaAutosize
              aria-label="minimum height"
              minRows={6}
              onChange={(e)=>handleInp(e)}
              name="texts"
              value={inputs.texts}
              placeholder="Enter your message"
              style={{ width: "100%",padding:'20px',marginBottom:"10px" }}
            />
            
             <Button component="button" variant='contained' endIcon={<SendIcon/>} color='primary'>
               <button style={{position:"absolute",opacity:"0",width:"100%",height:"100%"}}></button>Send</Button>
          </Grid>  
     </Grid>

  </Paper>
  <Typography variant='h5' className={send? "d-none":'Mailtext'}>

  My inbox is always open. Whether you have a question or just want to say hi,
   I’ll try my best to get back to you!
  </Typography>

  <Typography variant="h5" sx={{color:"white"}}>OR</Typography>


      <List className='socialIcons'>
              <ListItem >
                  <a href="https://www.facebook.com/profile.php?id=100007840247481">
                  <i class="fa-brands fa-facebook-f"></i>
                  </a>
              </ListItem>

              <ListItem >
                  <a href="https://github.com/T-Ulvi">
                  <i class="fa-brands fa-github"></i>
                  </a>
              </ListItem>

              <ListItem >
                   <a href="https://www.linkedin.com/in/%C3%BClvi-t%C9%99yyarzad%C9%99-84a92a224/">
                   <i class="fa-brands fa-linkedin"></i>  
                   </a>
              </ListItem>

              <ListItem >
                   <a href="tel:+994514084879">
                   <i class="fa-brands fa-whatsapp"></i>
                   </a>
              </ListItem>

              <ListItem >
                  <a href="https://www.instagram.com/ulvi_tayyarzade/">
                  <i class="fa-brands fa-instagram"></i>
                  </a>
              </ListItem>
        
      </List>
   
      </Container>
    </div>
  )
}

export default Contact