import CheckIcon from '@mui/icons-material/Check';
import { Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Button, Container, Grid, OutlinedInput, Paper, Rating, TextareaAutosize, Toolbar, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import '../master.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import CircleIcon from '@mui/icons-material/Circle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import TwitterIcon from '@mui/icons-material/Twitter';
import av1 from '../assets/av1.avif';
import av2 from '../assets/av2.avif';
import av3 from '../assets/av3.avif';
import game1 from '../assets/game1.png';
import game2 from '../assets/game2.png';
import game3 from '../assets/bg2.png';
import game4 from '../assets/bg3.png';
import game5 from '../assets/bg2.png';
import game6 from '../assets/bg1.png';
import game7 from '../assets/bg7.png';
import quote from '../assets/quote.png';
import md1 from '../assets/img3.png'
import md2 from '../assets/img4.png'
import md3 from '../assets/img5.png'
import lg1 from '../assets/img1.png'
import lg2 from '../assets/img2.png'
import black from '../assets/hero.avif'
import { useNavigate } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'







const LandingPage = () => {

    const navigate=useNavigate()


    const smImgArr=[{img:game7},{img:game6},{img:game3},{img:game4},{img:game2},{img:game1},{img:game3}]
    const imagesArr=[{img:lg1},{img:lg2}]
    const mdImgArr =[{img:md1},{img:md2},{img:md3}]

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    const handleNavigator =(ele)=>{
        navigate(ele)
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    // 
    return (
        <>
            <Container maxWidth={'xl'} disableGutters sx={{overflow:"hidden"}}>

            <AppBar sx={{bgcolor:'black',borderBottom:"2px solid white"}}>
                    <Toolbar>
                    
                        <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', padding: '10px 5px ', }}>
                            <Grid item xs={3} sx={{ display: 'flex',cursor:"pointer" }} onClick={()=>{navigate('/')}}>
                                <Typography sx={{ color: 'lightgreen', fontSize: '22px', fontWeight: '800' }}>L</Typography>
                                <Typography sx={{ color: 'yellow', fontSize: '22px', fontWeight: '800' }}>u</Typography>
                                <Typography sx={{ color: 'skyblue', fontSize: '22px', fontWeight: '800' }}>c</Typography>
                                <Typography sx={{ color: 'white', fontSize: '22px', fontWeight: '800' }}>k</Typography>
                                <Typography sx={{ color: '#ef6c00', fontSize: '22px', fontWeight: '800' }}>y</Typography>
                                <Typography sx={{ color: 'lightpink', fontSize: '22px', fontWeight: '800' }}>Q</Typography>
                                <Typography sx={{ color: 'orange', fontSize: '22px', fontWeight: '800' }}>u</Typography>
                                <Typography sx={{ color: 'lightgrey', fontSize: '22px', fontWeight: '800' }}>i</Typography>
                                <Typography sx={{ color: 'white', fontSize: '22px', fontWeight: '800' }}>z</Typography>
                            </Grid>
                            <Grid item xs={7}>
                                <Box sx={{ width: '100%', display: { lg: 'flex', md: 'flex', sm: 'none', xs: 'none' } }}>
                                    <Box sx={{ width: '20%', color: '#5c6bc0', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <Typography sx={{ fontSize: '17px',cursor:"pointer", color:'white' }} onClick={()=>{navigate('/');window.scrollTo({top:0,
                                        behavior:"smooth"})}}>Home</Typography>
                                    </Box>
                                    <Box sx={{ width: '20%', color: '#5c6bc0', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <Typography sx={{ fontSize: '17px',cursor:"pointer",color:'white' }} onClick={()=>{navigate('/about');window.scrollTo({top:0,
                                        behavior:"smooth"})}}>About</Typography>
                                    </Box>
                                    <Box sx={{ width: '20%', color: '#5c6bc0', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <Typography sx={{ fontSize: '17px',cursor:"pointer",color:'white' }}>Gallery</Typography>
                                    </Box>
                                    <Box sx={{ width: '20%', color: '#5c6bc0', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <Typography sx={{ fontSize: '17px' ,cursor:"pointer",color:'white'}}>Contact</Typography>
                                    </Box>
                                    <Box sx={{ width: '20%', color: '#5c6bc0', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <Button variant='contained' sx={{ bgcolor: '#5c6bc0', color: 'white', fontSize: '13px', borderRadius: '10px' }}>Download</Button>
                                    </Box>

                                </Box>

                            </Grid>
         

                        </Grid>


                   

                    </Toolbar>
                </AppBar>
                <Grid container sx={{ justifyContent: "center", alignItems: "center", bgcolor: "#f1f3f6", overflow: "hidden",pt:{lg:"60px",md:"60px",sm:"60px",xs:"55px"}}}>
                    {/* one  */}
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap-reverse', backgroundImage:`url(${black})`,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%', p: '20px 8px'}}>
                        <Grid item lg={6} md={6} sm={12} xs={12} data-aos='fade-up' sx={{mt:'-30px'}}  >
                            <Typography sx={{ color: '#f5f5f5', fontSize: { lg: '30px', md: '28px', sm: '25px', xs: '23px' }, fontWeight: '800', textAlign: 'center' }}>Luckyquiz is one of the best skill based  game in india.</Typography>
                            <Typography sx={{ fontSize: '15px', mt: '5px', textAlign: 'center', color:'#aed581' }}>Luckyquiz allows you to earn money by applying ur skill The amount earned can be withdraw easily.</Typography>
                        </Grid>

                        <Grid item data-aos='fade-up' lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box sx={{ width: { lg: '50%', md: '70%', sm: '50%', xs: '80%' }, height: {lg:'470px',md:"470px",sm:"430px",xs:"400px"}, }}>
                                <img src={game5} width={'100%'} height={'100%'} alt='game1' style={{ borderRadius: '10px' }} />
                            </Box>

                        </Grid>


                    </Grid>

                    {/* two  */}
                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: '20px 10px', }}>
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <Typography sx={{ color: '#1565c0', fontSize: { lg: '32px', md: '28px', sm: '25px', xs: '24px' }, fontWeight: '800', mt: '10px' }}>WHY LUCKY QUIZ</Typography>

                        </Grid>
                        <Grid item xs={11.8} sx={{ textAlign: 'center' }}>

                            <Typography sx={{ color: "black", mt: "16px", fontWeight:'bold' }}>Luckyquiz is one of the Best Quiz base game .Luckyquiz is a calculation base game .Many people have shared their personal experience  with quiz games.You can play online by downloading the Luckyquiz game .and u can earn 20to 30k Iq monthly by u r anaylitic skills.</Typography>
                        </Grid>
                        <Grid container sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap-reverse', mt: "25px" }}>
                            <Grid item lg={6} md={6} sm={12} xs={12} >

                                <Grid container sx={{ padding: '2px', mt: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <Grid item xs={3} data-aos='fade-right' sx={{ textAlign: 'center' }} >
                                        <ThumbUpOffAltIcon sx={{ fontSize: '60px', color: '#1565c0' }} />
                                    </Grid>
                                    <Grid item xs={9} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', mb: '20px' }}>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#1565c0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: 'bold',  }}>Start quiz with only 1 rs</Typography>
                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#1565c0' }} />
                                            <Typography sx={{ fontSize: '15px', ml: '8px', fontWeight: 'bold',  }}>Fast Withdrawal (Most of the time, money comes to your account within 1 hour)</Typography>
                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#1565c0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: 'bold', }}>No Withdrawal Fee (You can withdraw as much as you want in this game without any withdrawal fee)</Typography>
                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#1565c0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: 'bold',  }}>24/7 Customer Service</Typography>
                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#1565c0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: 'bold',  }}>Very Good Promotion Mission (Earn More than 4 Lakh for Complete Promotion Task)</Typography>
                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#1565c0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: 'bold',  }}>Promotion Bonus Upto 5 Levels</Typography>
                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#1565c0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: 'bold',  }}>Every two months, new events come in which you can participate and Earn Up to 6 Lakh.</Typography>
                                        </Box>

                                    </Grid>

                                </Grid>

                            </Grid>
                            <Grid item data-aos='fade-left' lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }}>
                                <Box sx={{ width: { lg: '50%', md: '70%', sm: '50%', xs: '80%' }, height: {lg:'470px',md:"470px",sm:"430px",xs:"400px"} }}>
                                    <img src={game3} width={'100%'} height={'100%'} alt='game5' style={{ borderRadius: '10px' }} />
                                </Box>

                            </Grid>


                        </Grid>




                    </Grid>

                    {/* three  */}
                    <Grid container sx={{ padding:{ lg:'10px 20px',md:"10px 20px",sm:"10px 10px",xs:"0px"},bgcolor:"black", mt: '10px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Grid item xs={12} sx={{ textAlign: 'center', }} >
                            <Typography sx={{ color: '#5c6bc0', fontSize: '23px', fontWeight: '800' }}>Our Games</Typography>
                        </Grid>
                        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',bgcolor:"black" }}>
                        <Grid item  xs={12} sm={11} md={10} lg={10} sx={{ m: '10px'}}>
                           <Box sx={{display:{lg:"block",md:"none",sm:"none",xs:"none"}}}>
                             <Slide>
                             {
                                imagesArr.map((item)=>{
                                    return(
                                        
                                     <Box sx={{  height: '470px' }}>
                                       <img src={item.img} width={'100%'} height={'100%'} alt='register' style={{ borderRadius: '10px' }} />
                                     </Box>                                    
                                    )
                                })
                            }
                             </Slide>
                             </Box>

                             <Box sx={{display:{lg:"none",md:"block",sm:"block",xs:"none"}}}>
                             <Slide>
                             {
                                mdImgArr.map((item)=>{
                                    return(
                                        
                                     <Box sx={{  height: '470px' }}>
                                       <img src={item.img} width={'100%'} height={'100%'} alt='register' style={{ borderRadius: '10px' }} />
                                     </Box>                                    
                                    )
                                })
                            }
                             </Slide>
                             </Box>

                             <Box sx={{display:{lg:"none",md:"none",sm:"none",xs:"block"}}}>
                             <Slide>
                             {
                                smImgArr.map((item)=>{
                                    return(
                                        
                                     <Box sx={{  height: '400px',display:"flex",justifyContent:"center"}}>
                                       <img src={item.img} width={'80%'} height={'100%'} alt='register' style={{ borderRadius: '10px' }} />
                                     </Box>                                    
                                    )
                                })
                            }
                             </Slide>
                             </Box>
                           
                             </Grid>

                        

                        </Grid>



                    </Grid>




                    <Grid item xs={12} sx={{ mt: "20px" }}>
                        <Grid container className='resultScroll' sx={{ overflow: "hidden", height: "100%", bgcolor: "#f1f3f6", p: "0px 10px" }}>
                            <Grid item xs={12} >
                                <Box >
                                    <Typography align='center' sx={{ color: "#7c4dff", fontSize:{ lg:"35px",md:"33px",sm:"25px",xs:"25px"}, letterSpacing: "2px", fontWeight:{lg:"500",md:"500px",xs:"600",xs:"800"} }}>
                                        How To Play The Game
                                    </Typography>
                                    <Typography align='center' sx={{ color: "#546e7a", fontSize:{lg:"20px",md:"20px",sm:"17px",xs:"15px"}, letterSpacing: "2px", mt: "7px", fontFamily: "Roboto sans-serif" }}>
                                        Please follow the below steps to play the game easily
                                    </Typography>
                                </Box>
                            </Grid>


                            <Grid item xs={12} sx={{ mt: "10px",display:"flex",justifyContent:"center" }}>
                                <Grid container  xs={12} sm={12} md={10} lg={10} sx={{p:"15px",bgcolor:"white",borderRadius:"30px",boxShadow:"-1px 2px 11px -4px rgba(0,0,0,0.75)"}} wrap='wrap-reverse'>
                                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: "20px", display: "flex", justifyContent:{ xs:"center",sm:"",md:"",lg:""}, alignItems: 'center' }} data-aos="fade-right">
                                        <Box sx={{ width: { lg: '70%', md: '80%', sm: '60%', xs: '100%' }, height: {lg:'470px',md:"470px",sm:"430px",xs:"400px"} }}>

                                            <img src={game7} alt='signup' height={"100%"} width={"100%"} style={{ borderRadius: '10px' }} />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={6} lg={6} data-aos="fade-up" sx={{ display: "flex", alignItems: "center", justifyContent:'flex-start' }}>
                                        <Box>
                                            <Typography align='center'  sx={{ color: "#263238", fontSize:{lg:"30px",md:"30px",sm:"25px",xs:"20px"}, fontWeight: "800" }}>Step 1: Download and Signup </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center",mt:"15px" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Go to Play Store and Download the LuckyQuiz App</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center"}}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Fill the details for make an account</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Typography>


                                        </Box>
                                    </Grid>

                                </Grid>
                            </Grid>




                            <Grid item xs={12} sx={{ mt: "10px",display:"flex",justifyContent:"center" }}>
                                <Grid container xs={12} sm={12} md={10} lg={10} sx={{p:"15px",bgcolor:"white",borderRadius:"30px",boxShadow:"-1px 2px 11px -4px rgba(0,0,0,0.75)"}}>
                                    <Grid item xs={12} sm={12} md={6} lg={6} data-aos="fade-up" sx={{ display: "flex", p:"15px",alignItems: "center", justifyContent: "center" }}>
                                        <Box data-aos="fade-up">
                                            <Typography align='center' sx={{ color: "#263238", fontSize:{lg:"30px",md:"30px",sm:"25px",xs:"20px"}, fontWeight: "800" }}>Step 2: If you already have an account</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center",mt:"15px" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Login to the App</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Please enter the E-mail and password correctly</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: "20px", display: "flex", justifyContent: "center", alignItems: 'center' }} data-aos="fade-right">
                                        <Box sx={{  width: { lg: '70%', md: '80%', sm: '60%',  xs: '100%'  }, height: {lg:'470px',md:"470px",sm:"430px",xs:"400px"} }}>

                                            <img src={game6} alt='game6' height={"100%"} width={"100%"} style={{ borderRadius: '10px' }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>


                            <Grid item xs={12} sx={{ mt: "10px",display:"flex",justifyContent:"center" }}>
                                <Grid container xs={12} sm={12} md={10} lg={10} sx={{bgcolor:"white",p:"15px",borderRadius:"30px",boxShadow:"-1px 2px 11px -4px rgba(0,0,0,0.75)"}} wrap='wrap-reverse'>
                                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: "20px", display: "flex", justifyContent: "center", alignItems: 'center' }} data-aos="fade-right">
                                        <Box sx={{ width: { lg: '70%', md: '80%', sm: '60%',  xs: '100%'  }, height: {lg:'470px',md:"470px",sm:"430px",xs:"400px"} }}>

                                            <img src={game5} alt='game5' height={"100%"} width={"100%"} style={{ borderRadius: '10px' }} />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={6} lg={6} data-aos="fade-up" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Box>
                                            <Typography align='center' sx={{ color: "#263238", fontSize:{lg:"30px",md:"30px",sm:"25px",xs:"20px"}, fontWeight: "800" }}>Step 3: Choose the game you want to play</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center",mt:"15px" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />Choose the game you want to play from the home page</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Select the time and enjoy</Typography>

                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Grid>



                            <Grid item xs={12}  sx={{mt: "10px",display:"flex",justifyContent:"center" }}>
                                <Grid container xs={12} sm={12} md={10} lg={10} sx={{bgcolor:"white",p:"15px",borderRadius:"30px",boxShadow:"-1px 2px 11px -4px rgba(0,0,0,0.75)"}}>
                                    <Grid item xs={12} sm={12} md={6} lg={6} data-aos="fade-up" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Box data-aos="fade-up">
                                            <Typography align='center' sx={{ color: "#263238", fontSize:{lg:"30px",md:"30px",sm:"25px",xs:"20px"}, fontWeight: "800" }}>Step 4: Choose the game quiz</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center",mt:"15px" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />After chossing the game, choose the color,size,number for  quiz</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Select the time and enjoy</Typography>

                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: "20px", display: "flex", justifyContent: "center", alignItems: 'center' }} data-aos="fade-right">
                                        <Box sx={{ width: { lg: '70%', md: '80%', sm: '60%',  xs: '100%'  }, height: {lg:'470px',md:"470px",sm:"430px",xs:"400px"} }}>

                                            <img src={game4} alt='game4' height={"100%"} width={"100%"} style={{ borderRadius: '10px' }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>



                            <Grid item xs={12} sx={{ mt: "10px",display:"flex",justifyContent:"center" }}>
                                <Grid container xs={12} sm={12} md={10} lg={10} sx={{bgcolor:"white",p:"15px",borderRadius:"30px",boxShadow:"-1px 2px 11px -4px rgba(0,0,0,0.75)"}} wrap='wrap-reverse'>
                                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: "20px", display: "flex", justifyContent: "center", alignItems: 'center' }} data-aos="fade-right">
                                        <Box sx={{ width: { lg: '70%', md: '80%', sm: '60%', xs: '100%'  }, height: {lg:'470px',md:"470px",sm:"430px",xs:"400px"}}}>

                                            <img alt='game' src={game1} height={"100%"} width={"100%"} style={{ borderRadius: '10px' }} />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={6} lg={6} data-aos="fade-up" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Box>
                                            <Typography align='center' sx={{ color: "#263238", fontSize:{lg:"30px",md:"30px",sm:"25px",xs:"20px"}, fontWeight: "800" }}>Step 5: Check you result</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center",mt:"15px" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />After playing game check your result on result chart</Typography>

                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Grid>



                            <Grid item xs={12} sx={{ mt: "20px" }}>
                                <Box data-aos="fade-up">

                                    <Typography align='center' sx={{ color: "#7c4dff", fontSize: "20px", fontWeight: "800" }}>Testimonials</Typography>
                                    <Typography align='center' sx={{ color: "#546e7a" }}>some of the reviews from our happy customers.</Typography>
                                </Box>

                                <Box>
                                    <Grid container className='resultScroll' sx={{ overflowX: "scroll", justifyContent: "center" }}>
                                        <Grid item xs={12} sx={{ mt: '20px' }} data-aos="fade-up">
                                            <Typography textAlign={'center'} variant='h1' sx={{ fontWeight: 900, fontSize: { lg: '54px', xs: '40px' }, letterSpacing: '0px', lineHeight: 1.43 }}>Happy Clients</Typography>
                                            <Typography textAlign={'center'} m={'6px'} sx={{ fontSize: { lg: '20px', xs: '20px' } }} fontWeight={600}>What our clients says about us</Typography>
                                        </Grid>
                                        <Box className='resultScroll' sx={{ overflowX: "scroll", display: "flex" }} data-aos="fade-up">


                                            <Box sx={{ m: "7px", transition: "transform 0.3s ease", '&:hover': { transform:{ lg:"scale(1.1)",md:"scale(1.1)",sm:"scale(1.1)",xs:"scale(1)"} } }}>
                                                <Paper sx={{ height: "400px", width: "250px", p: "10px", m: "7px" }} elevation={3}>
                                                    <Typography align='center' sx={{ p: "10px" }}>
                                                        <img src={quote} alt="quote" height="50px" width="50px" />
                                                    </Typography>
                                                    <Box sx={{ height: "43%" }}>
                                                        <Typography align='center' sx={{ fontSize: "18px", fontWeight: "500" }}>“Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents”</Typography>
                                                    </Box>
                                                    <Box >
                                                        <Box sx={{ borderRadius: "50px", mt: "15px" }}>
                                                            <Box sx={{ width: "fit-content", display: "flex", alignItems: "center" }}>
                                                                <Box sx={{ borderRadius: "50px", height: "45px", width: "45px", overflow: "hidden" }}>
                                                                    <img src={av1} alt="bjp" height={"100%"} width={"100%"} />
                                                                </Box>
                                                                <Typography sx={{ fontSize: "15px", fontWeight: "700", ml: "10px", width: "fit-content", wordWrap: "wrap" }}>Sumit singh</Typography>
                                                            </Box>
                                                            <Box sx={{ p: "10px" }}>
                                                                <Rating name="size-large" defaultValue={5} sx={{ fontSize: "40px" }} size='large' disabled />
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Paper>
                                            </Box>


                                            <Box sx={{ m: "7px", transition: "transform 0.3s ease", '&:hover': { transform:{ lg:"scale(1.1)",md:"scale(1.1)",sm:"scale(1.1)",xs:"scale(1)"} } }}>
                                                <Paper sx={{ height: "400px", width: "250px", p: "10px", m: "7px" }} elevation={3}>
                                                    <Typography align='center' sx={{ p: "10px" }}>
                                                        <img src={quote} alt="quote" height="50px" width="50px" />
                                                    </Typography>
                                                    <Box sx={{ height: "43%" }}>
                                                        <Typography align='center' sx={{ fontSize: "18px", fontWeight: "500" }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut urna ac orci porta maximus in nec nibh. Integer pellentesque ."</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Box sx={{ borderRadius: "50px", mt: "15px" }}>
                                                            <Box sx={{ width: "fit-content", display: "flex", alignItems: "center" }}>
                                                                <Box sx={{ borderRadius: "50px", height: "45px", width: "45px", overflow: "hidden" }}>
                                                                    <img src={av2} alt="bjp" height={"100%"} width={"100%"} />
                                                                </Box>
                                                                <Typography sx={{ fontSize: "15px", fontWeight: "700", ml: "10px", width: "fit-content", wordWrap: "wrap" }}>Anand pandey</Typography>
                                                            </Box>
                                                            <Box sx={{ p: "10px" }}>
                                                                <Rating name="size-large" defaultValue={5} sx={{ fontSize: "40px" }} size='large' disabled />
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Paper>
                                            </Box>


                                            <Box sx={{ m: "7px", transition: "transform 0.3s ease", '&:hover': { transform:{ lg:"scale(1.1)",md:"scale(1.1)",sm:"scale(1.1)",xs:"scale(1)"} } }}>
                                                <Paper sx={{ height: "400px", width: "250px", p: "10px", m: "7px" }} elevation={3}>
                                                    <Typography align='center' sx={{ p: "10px" }}>
                                                        <img src={quote} alt="quote" height="50px" width="50px" />
                                                    </Typography>
                                                    <Box sx={{ height: "43%" }}>
                                                        <Typography align='center' sx={{ fontSize: "18px", fontWeight: "500" }}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua”</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Box sx={{ mt: "15px" }}>
                                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                                <Box sx={{ borderRadius: "50px", overflow: "hidden", height: "45px", width: "45px" }}>
                                                                    <img src={av3} alt="parsal" height="100%" width="100%" />
                                                                </Box>
                                                                <Typography sx={{ fontSize: "15px", fontWeight: "700", ml: "10px", width: "fit-content", wordWrap: "wrap" }}>Mr Ramesh sharma</Typography>
                                                            </Box>
                                                            <Box sx={{ p: "10px" }}>
                                                                <Rating name="size-large" defaultValue={5} sx={{ fontSize: "40px" }} size='large' disabled />
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Paper>
                                            </Box>
                                        </Box>


                                    </Grid>
                                </Box>

                            </Grid>


                            <Grid item xs={12} sx={{ mt: "20px" }}>
                                <Grid container sx={{ pb: "40px", display: "flex", justifyContent: "center" }} data-aos="fade-up">
                                    <Box sx={{ width: { lg: "70%", md: "75%", sm: "100%", xs: "100%" } }}>
                                        <Box>
                                            <Typography align='center' sx={{ fontSize:{lg:"40px",md:"35px",sm:"30px",xs:"25px"}, fontWeight: "600", color: "#7c4dff" }} >
                                                Frequently Asked Questions
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Accordion elevation={1} sx={{ mt:{lg:"10px",md:"10px",sm:"7px",xs:"5px" }}}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    sx={{ p: "0px 8px" }}
                                                >
                                                    <Typography sx={{ color: "black", fontSize:{lg:"15px",md:"15px",sm:"15px",xs:"12px"}, fontWeight: "800" }}>
                                                        Where can I download game?
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    
                                                        <ul>
                                                            <li style={{fontSize:"12px",marginTop:"-30px"}}>You can download it from play store / App store or whatever store your mobile support </li>
                                                            <li style={{fontSize:"12px"}}>ou can download it directly from google</li>
                                                            <li style={{fontSize:"12px"}}>You can take apk from your or person who have the game</li>
                                                        </ul>
                                                    
                                                </AccordionDetails>
                                            </Accordion>



                                            <Accordion elevation={1} sx={{ mt:{lg:"10px",md:"10px",sm:"7px",xs:"5px" } }}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel2a-content"
                                                    id="panel2a-header"
                                                    sx={{ p: "0px 8px" }}
                                                >
                                                    <Typography sx={{ color: "black", fontSize:{lg:"15px",md:"15px",sm:"15px",xs:"12px"}, fontWeight: "800" }}>
                                                        How to play the game?
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                  
                                                    <ul>
                                                            <li style={{fontSize:"12px",marginTop:"-30px"}}>You can download it from play store / App store or whatever store your mobile support </li>
                                                            <li style={{fontSize:"12px"}}>ou can download it directly from google</li>
                                                            <li style={{fontSize:"12px"}}>You can take apk from your or person who have the game</li>
                                                        </ul>
                                                  
                                                </AccordionDetails>
                                            </Accordion>


                                            <Accordion elevation={1} sx={{ mt:{lg:"10px",md:"10px",sm:"7px",xs:"5px" }}}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel3a-content"
                                                    id="panel3a-header"
                                                    sx={{ p: "0px 8px" }}
                                                >
                                                    <Typography sx={{ color: "black",  fontSize:{lg:"15px",md:"15px",sm:"15px",xs:"12px"}, fontWeight: "800" }}>
                                                        Can I save games with Game Play Color?
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                  
                                                    <ul>
                                                            <li style={{fontSize:"12px",marginTop:"-30px"}}>You can download it from play store / App store or whatever store your mobile support </li>
                                                            <li style={{fontSize:"12px"}}>ou can download it directly from google</li>
                                                            <li style={{fontSize:"12px"}}>You can take apk from your or person who have the game</li>
                                                        </ul>
                                                    
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion elevation={1} sx={{mt:{lg:"10px",md:"10px",sm:"7px",xs:"5px" }}}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel3a-content"
                                                    id="panel3a-header"
                                                    sx={{ p: "0px 8px" }}
                                                >
                                                    <Typography sx={{ color: "black", fontSize:{lg:"15px",md:"15px",sm:"15px",xs:"12px"}, fontWeight: "800" }}>
                                                        Why aren’t my games showing up?
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    
                                                    <ul>
                                                            <li style={{fontSize:"12px",marginTop:"-30px"}}>You can download it from play store / App store or whatever store your mobile support </li>
                                                            <li style={{fontSize:"12px"}}>ou can download it directly from google</li>
                                                            <li style={{fontSize:"12px"}}>You can take apk from your or person who have the game</li>
                                                        </ul>
                                                   
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion elevation={1} sx={{ mt:{lg:"10px",md:"10px",sm:"7px",xs:"5px" } }}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel3a-content"
                                                    id="panel3a-header"
                                                    sx={{ p: "0px 8px" }}
                                                >
                                                    <Typography sx={{ color: "black", fontSize:{lg:"15px",md:"15px",sm:"15px",xs:"12px"}, fontWeight: "800" }}>
                                                        Why does my game restart every time I switch apps?
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                   
                                                    <ul>
                                                            <li style={{fontSize:"12px",marginTop:"-30px"}}>You can download it from play store / App store or whatever store your mobile support </li>
                                                            <li style={{fontSize:"12px"}}>ou can download it directly from google</li>
                                                            <li style={{fontSize:"12px"}}>You can take apk from your or person who have the game</li>
                                                        </ul>
                                                    
                                                </AccordionDetails>
                                            </Accordion>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>




                            <Grid item xs={12} sx={{bgcolor:'black'}}>

                                <Grid container>
                                    <Grid item xs={12} data-aos="fade-up" sx={{ bgcolor: "white", p: "40px 15px 30px 15px", mb: "25px" }}>
                                        <Typography align='center' sx={{ fontSize: "35px", color: "#7c4dff" }}>
                                            Contact
                                        </Typography>
                                        <Typography align='center' sx={{ mt: "10px" }}>
                                            For booking or any queries, feel free to contact us
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} lg={6} sx={{bgcolor:'black'}}>
                                        <Grid container sx={{ bgcolor: "black", p: "20px"}}>

                                            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ border: "3px solid white", bgcolor: "black", p: "40px 15px 30px 15px" ,borderRadius:'7px' }} data-aos="fade-up" >
                                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                    <LocationOnIcon sx={{ fontSize: "50px", color: "#1976d2" }} />
                                                </Box>
                                                <Typography align='center' sx={{ fontSize: "25px", color: "#1976d2" }}>
                                                    ADDRESS
                                                </Typography>
                                                <Typography align='center' sx={{color:'white'}}>
                                                   BLOCK 231C, KACHARUPURIA, BUGDOI BRIDGE, JORHAT, 785001, ASSAM
                                                </Typography>
                                            </Grid>

                                            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ border: "3px solid white", bgcolor: "black", p: "40px 15px 30px 15px" ,borderRadius:'7px'}} data-aos="fade-up" >
                                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                    <CallIcon sx={{ fontSize: "50px", color: "#1976d2" }} />
                                                </Box>
                                                <Typography align='center' sx={{ fontSize: "25px", color: "#1976d2" }}>
                                                    Call Us
                                                </Typography>
                                                <Typography align='center' sx={{color:'white'}}>
                                                    +91 8099851924
                                                </Typography>
                                            </Grid>

                                            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ border: "3px solid white", bgcolor: "black", p: "40px 15px 30px 15px" , borderRadius:'7px'}} data-aos="fade-up" >
                                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                    <MailIcon sx={{ fontSize: "50px", color: "#1976d2" }} />
                                                </Box>
                                                <Typography align='center' sx={{ fontSize: "25px", color: "#1976d2" }}>
                                                    Email Us
                                                </Typography>
                                                <Typography align='center' sx={{color:'white'}}>
                                                    daichsenyo@gmail.com
                                                </Typography>
                                            </Grid>

                                            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ border: "3px solid white", bgcolor: "black", p: "40px 15px 30px 15px", borderRadius:'7px' }} data-aos="fade-up" >
                                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                    <AccessTimeIcon sx={{ fontSize: "50px", color: "#1976d2" }} />
                                                </Box>
                                                <Typography align='center' sx={{ fontSize: "25px", color: "#1976d2" }}>
                                                    Working Hours
                                                </Typography>
                                                <Typography align='center' sx={{color:'white'}}>
                                                    Mon-Fri:9AM to 5PM
                                                </Typography>
                                                <Typography align='center' sx={{color:'white'}}>
                                                    Sun:9AM to 1PM
                                                </Typography>
                                            </Grid>




                                        </Grid>
                                    </Grid>

                                    <Grid item lg={6} xs={12} sx={{ bgcolor: "black", p: "25px 10px 30px 10px" }}>

                                        <Box component={'div'} data-aos="fade-up">
                                            <OutlinedInput placeholder='Your Name' sx={{ height: "50px" , border:'1px solid #1976d2', color:'white', outline:'none'}} fullWidth />
                                            <OutlinedInput placeholder='Your Email' sx={{ height: "50px", mt: "10px",  border:'1px solid #1976d2', color:'white'}} fullWidth />
                                            <OutlinedInput placeholder='Subject' sx={{ height: "50px", mt: "10px", border:'1px solid #1976d2', color:'white' }} fullWidth />
                                            <textarea  placeholder='Message' style={{ width: "98.9%", marginTop: "10px", border:'1px solid #1976d2', color:'white', backgroundColor:'transparent',height:"100px" }}  />
                                            <Box variant="outlined" sx={{ display: "flex", justifyContent: "center", mt: "20px" }} >
                                                <Button variant='outlined' sx={{color:'"#1976d2" ', borderRadius: "25px", p: "10px 20px", border: "2px solid #1976d2", color: "white" }}>Send Message</Button>
                                            </Box>
                                        </Box>

                                    </Grid>

                                </Grid>



                            </Grid>

                            
                        </Grid>
                    </Grid>
                </Grid>
                <Box sx={{ mt: "70px", p: "15px 30px",bgcolor:"black"  }}>
                                <Grid container sx={{ p: "5px 10px 20px 10px" }}>
                                    <Grid item lg={4} md={4} sm={6} xs={12} sx={{ display: "flex", justifyContent: { lg: "center", md: "center", sm: "left", xs: "left" } }}>
                                        <Box sx={{ mt: "20px" }}>
                                            <Typography sx={{ fontSize: "25px",color:"white" }}>
                                                LuckyQuiz
                                            </Typography>
                                            <Typography sx={{ color:"white" }}>
                                            BLOCK 231C, KACHARUPURIA, BUGDOI BRIDGE,JORHAT,785001,ASSAM
                                            </Typography>

                                            <Typography sx={{  mt: "15px",color:"white" }}>
                                                <span>Phone:</span>+91 -8099851924
                                            </Typography>
                                            <Typography sx={{ color: "#757575",color:"white" }}>
                                                <span >Email:</span>DAICHSENYO@GMAIL.COM
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={3} md={3} sm={6} xs={12} sx={{ display: "flex", justifyContent: { lg: "center", md: "center", sm: "left", xs: "left" } }}>
                                        <Box sx={{ mt: "20px" }}>
                                            <Typography sx={{ fontSize: "25px", color: "#212121",color:"white" }}>
                                                Useful Links
                                            </Typography>
                                            <Typography sx={{ color: "#757575", display: "flex", alignItems: "center", mt: "10px",cursor:"pointer",color:"white" }} onClick={()=>{handleNavigator('/')}}>
                                                <KeyboardArrowRightIcon sx={{ mr: "5px" }} />Home
                                            </Typography>
                                            <Typography sx={{ color: "#757575", display: "flex", alignItems: "center", mt: "10px",cursor:"pointer",color:"white" }} onClick={()=>{handleNavigator('/about')}}>
                                                <KeyboardArrowRightIcon sx={{ mr: "5px" }} />About us
                                            </Typography>
                                            <Typography sx={{ color: "#757575", display: "flex", alignItems: "center", mt: "10px",cursor:"pointer",color:"white" }} onClick={()=>{handleNavigator('/')}}>
                                                <KeyboardArrowRightIcon sx={{ mr: "5px" }} />Team
                                            </Typography>
                                            <Typography sx={{ color: "#757575", display: "flex", alignItems: "center", mt: "10px",cursor:"pointer",color:"white" }} onClick={()=>{handleNavigator('/')}}>
                                                <KeyboardArrowRightIcon sx={{ mr: "5px" }} />Terms of Use
                                            </Typography>
                                            <Typography sx={{ color: "#757575", display: "flex", alignItems: "center", mt: "10px",cursor:"pointer",color:"white" }} onClick={()=>{handleNavigator('/privacy')}}>
                                                <KeyboardArrowRightIcon sx={{ mr: "5px" }} />Privacy Policy
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={5} md={5} sm={6} xs={12} sx={{ display: "flex", justifyContent: { lg: "center", md: "center", sm: "left", xs: "left" } }}>
                                        <Box sx={{ mt: "20px" }}>
                                            <Typography align='center' sx={{ fontSize: "25px", color: "#212121",color:"white" }}>
                                                Our Social Networks
                                            </Typography>
                                            <Typography align='center' sx={{ mt: "15px",color:"white" }}>
                                                Connect with us via our Social Network Accounts
                                            </Typography>
                                            <Box sx={{ display: "flex", justifyContent: "Center" }}>
                                                <Box>
                                                    <TwitterIcon sx={{ cursor:"pointer",fontSize: "40px",color:"white", "&:hover": { color: "#2979ff" }, m: "10px" }} />
                                                    <FacebookIcon sx={{ cursor:"pointer",fontSize: "40px",color:"white", "&:hover": { color: "#1e88e5" }, m: "10px" }} />
                                                    <InstagramIcon sx={{ cursor:"pointer",fontSize: "40px",color:"white", "&:hover": { color: "#ff1744" }, m: "10px" }} />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

            </Container>
        </>
    )
}

export default LandingPage