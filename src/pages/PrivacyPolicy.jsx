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
import black from '../assets/hero.avif';
import av2 from '../assets/av2.avif';
import av3 from '../assets/av3.avif';
import game1 from '../assets/game1.png';
import game2 from '../assets/game2.png';
import game3 from '../assets/game3.png';
import game4 from '../assets/game4.png';
import game5 from '../assets/game5.png';
import game6 from '../assets/game6.png';
import game7 from '../assets/game7.png';
import quote from '../assets/quote.png';
import { useNavigate } from 'react-router-dom';








const PrivacyPolicy = () => {

    const navigate=useNavigate()
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
            <Container maxWidth={'xl'} disableGutters >
            
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
                    {/* one  */}
                <Grid container sx={{ justifyContent: "center", alignItems: "center", bgcolor: "#f1f3f6", overflow: "hidden",pt:{lg:"60px",md:"60px",sm:"60px",xs:"55px"} }}>
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







                    <Grid item xs={12} sx={{ mt: "20px" }}>
                        <Grid container className='resultScroll' sx={{ overflow: "scroll", height: "100%", bgcolor: "#f1f3f6", p: "0px 20px" }}>
                            <Grid item xs={12} sx={{ mb: "20px" }}>
                                <Box >
                                    <Paper sx={{ p: "15px" }}>

                                        <Typography align='center' sx={{ color: "#7c4dff", fontSize: "35px", letterSpacing: "2px", fontWeight: "900" }}>
                                          Privacy Policy
                                        </Typography>
                                        <Typography sx={{ fontSize: "13px", mt: "7px" }}>
                                        Derivative works of, distribute, publicly perform, publicly display, transfer, transmit, and/or publish Users' Content for any of the following purposes:
displaying Users' Content on LuckyQuiz<br/>
distributing Users' Content, either electronically or via other media, to other Users seeking to download or otherwise acquire it, and/or<br/>
storing Users' Content in a remote database accessible by end users, for a charge. In This Quiz game u Have to play only with use of iq which is only the token u can play,  u gives us a security  fees  on that behalf we give u Iq after playing quiz with iq  u can withdraw u r security money we on lu charge platform fees with this .No money should be transist in the way of playing game in any mode  u have to play with just IQ and win Iq, and loose Iq.U have to play and choose answer only after when quiz came dnt play before that time is only  for for observation<br/>
This license shall apply to the distribution and the storage of Users' Content in any form, medium, or technology.<br/>
All names, logos, marks, labels, trademarks, copyrights or intellectual and proprietary rights on LuckyQuiz(s) belonging to any person (including User), entity or third party are recognized as proprietary to the respective owners and any claims, controversy or issues against these names, logos, marks, labels, trademarks, copyrights or intellectual and proprietary rights must be directly addressed to the respective parties under notice to Luckyquiz<br/>

                                        </Typography>
                                       
                                    </Paper>
                                </Box>
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

                            


                            {/* <Grid item xs={12} sx={{ mt: "30px" }}>

                                <Box sx={{ mt: "15px", p: "10px 10px 30px 10px" }}>
                                    <Typography align='center' sx={{ color: "#757575" }}>© Copyright Adelsocial Pvt Ltd. All Rights Reserved</Typography>
                                    <Typography align='center' sx={{ color: "#757575" }}>
                                        Designed and Developed by Adelsocial
                                    </Typography>
                                </Box>

                            </Grid> */}
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

export default PrivacyPolicy