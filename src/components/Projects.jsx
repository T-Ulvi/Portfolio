import { Typography,Grid } from '@mui/material'
import React from 'react'
import fashion from '../assets/project images/fashionStore.jpg'
import netflix from '../assets/project images/netflix.png'
import timezone from '../assets/project images/Timezone.jpg'
import photography from '../assets/project images/Photography.jpg'
import salvation from '../assets/project images/salvation.jpg'
import pivot from '../assets/project images/pivot.jpg'
function Projects() {

  let projects=[
    {
      url:"https://t-ulvi.github.io/TimeZone/",
      img:timezone
    },
   
    {
      url:"https://t-ulvi.github.io/Netflix-movies/",
      img:netflix
    },
    
    {
      url:"t-ulvi.github.io/fashion-store/",
      img:fashion
    },
    {
      url:"https://t-ulvi.github.io/Salvation-Project/",
      img:salvation
    },
   
    {
      url:"https://t-ulvi.github.io/Photography/",
      img:photography 
    },
    {
      url:"https://t-ulvi.github.io/Pivot/",
      img:pivot 
    }
    
  ]
  return (
    <div className='projects'  id='projects'>
      
      <div className="GlowName">
       <Typography variant="h4" sx={{color:"black",marginTop:"20px"}}>
       My Projects
       </Typography>
      </div>
      <Grid  container justifyContent={"center"} sx={{paddingTop:"140px",paddingInline:"10px"}}>
          {
            projects.map((item,index)=>(
             
                <Grid key={item.url} data-aos="fade-down"  data-aos-delay={index*150}  data-aos-duration="500"  position={"relative"} className="project" item xs={6} sm={3}>
                   <a href={item.url} className="Overlay">
                 <img src={item.img} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}} />
                    </a>
              </Grid>
            ))
          } 
       </Grid>
    </div>
  )
}

export default Projects