import React from "react";
import Header from "../Inauth/Header/Header";
import Breadcrumb from '../Inauth/Breadcrumb/Breadcrumb';
import Footer from "../Inauth/Footer/Footer";
import { Box, Tab, TextField, Typography, Button, FormControlLabel, Checkbox } from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Eye, ArrowRight } from '../Zonixzsvgs/Zonixzsvgs';
import Google from '../images/Google.png';
import Apple from '../images/Apple.png';
import './Signform.scss'
import { Link } from "react-router-dom";

function Home() {
  const [value, setValue] = React.useState('1');
  const [otpRequest, setOtpRequest] = React.useState('none !important');
  const [loginphonebox, setLoginphonebox] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOtp = () => {
    setOtpRequest('');
    setLoginphonebox('none !important');
  };

  return (
    <>
      <Header />
      <Breadcrumb />

      <Box component={'div'} className='sign_form'>

        <TabContext value={value}>
          <TabList onChange={handleChange}>
            <Tab label="Sign In" value="1" />
            <Tab label="Sign up" value="2" />
          </TabList>
          <TabPanel value="1">
            <Box component={'div'} className='sign_form_item' sx={{ display: loginphonebox }}>
              <Typography component={'label'} className='label'>Enter Email & Phone number</Typography>
              <TextField type='text' fullWidth className='sign_form_input' />
            </Box>

            <Box component={'div'} className='sign_form_item' sx={{ display: otpRequest }}>
              <Box component={'div'} className='sign_form_otpBox'>
                <TextField type='number' className='sign_form_input' placeholder='0' />
                <TextField type='number' className='sign_form_input' placeholder='0' />
                <TextField type='number' className='sign_form_input' placeholder='0' />
                <TextField type='number' className='sign_form_input' placeholder='0' />
                <TextField type='number' className='sign_form_input' placeholder='0' />
                <TextField type='number' className='sign_form_input' placeholder='0' />
              </Box>
            </Box>

            {/* <Link component={'a'} to={'/'} className='fp_link'>Forget Password</Link> */}
            <Box component={'div'} className='sign_form_item'>
              <Button className='sign_form_button' onClick={handleOtp} fullWidth>Request OTP</Button>
            </Box>

            <Box component={"div"} className='divider'>
              <Typography component={'p'}>Or</Typography>
            </Box>


            <Box component={'div'} className='connectOther_account'>
              <Button className='connectOther_btn' fullWidth>
                <img src={Google} alt={Google} />
                Login with Google</Button>
              <Button className='connectOther_btn' fullWidth>
                <img src={Apple} alt={Apple} />
                Login with Apple</Button>
            </Box>
          </TabPanel>
          <TabPanel value="2">

            <Box component={'div'} className='sign_form_item'>
              <Typography component={'label'} className='label'>Full Name</Typography>
              <TextField type='text' fullWidth className='sign_form_input' />
            </Box>

            <Box component={'div'} className='sign_form_item'>
              <Typography component={'label'} className='label'>Email Address</Typography>
              <TextField type='email' fullWidth className='sign_form_input' />
            </Box>


            <Box component={'div'} className='sign_form_item'>
              <Typography component={'label'} className='label'>Password</Typography>
              <Box component={'div'} className='sign_form_inputBox'>
                <TextField type='password' fullWidth className='sign_form_input' placeholder='8+ Characters' />
                <Button className='hideShow_pass'><Eye /></Button>
              </Box>
            </Box>

            <Box component={'div'} className='sign_form_item'>
              <Typography component={'label'} className='label'>Confirm Password</Typography>
              <Box component={'div'} className='sign_form_inputBox'>
                <TextField type='password' fullWidth className='sign_form_input' />
                <Button className='hideShow_pass'><Eye /></Button>
              </Box>
            </Box>

            <Box component={'div'} className='sign_form_item check_box'>
              <FormControlLabel control={<Checkbox defaultChecked />} label={
                <Typography>Are you agree to Zonixz <Typography component={'span'}>Terms of Condition</Typography> and <Typography component={'span'}>Privacy Policy</Typography>.</Typography>
              } />
            </Box>

            <Box component={'div'} className='sign_form_item'>
              <Button className='sign_form_button' fullWidth>Sign up <ArrowRight /></Button>
            </Box>

            <Box component={"div"} className='divider'>
              <Typography component={'p'}>Or</Typography>
            </Box>

            <Box component={'div'} className='connectOther_account'>
              <Button className='connectOther_btn' fullWidth>
                <img src={Google} alt={Google} />
                Sign up with Google</Button>
              <Button className='connectOther_btn' fullWidth>
                <img src={Apple} alt={Apple} />
                Sign up with Apple</Button>
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
      <Footer />
    </>
  );
}


export default Home;
