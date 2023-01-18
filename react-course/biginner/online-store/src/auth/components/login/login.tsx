import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../store/auth-slice';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import AuthState from '../../models/authState';
import AuthApiService from '../../services/auth.api.services';
import { useNavigate } from 'react-router-dom';
import { notifier } from '../../../core/notification/notification.service';
import { useTranslation } from 'react-i18next';
import AuthService from '../../services/auth.service';

function Login(props: any) {
  const [t] = useTranslation(['login']);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: AuthState) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const loginBtnText = isLoggedIn ? 'logout' : 'login';
  const handleSubmit = () => {
    isLoggedIn ? dispatch(authActions.logout()) : login();
  };

  // console.log('LOGIN_COMPONENT',props);

  //  notifier('error', 'actions.message');

  const login = () => {
    const _data={

    }
    AuthApiService.login(_data).then((response: any) => {
      const accessToken = response?.data?.token;
      const userName = response?.data?.userName;
      dispatch(
        authActions.login({
          accessToken,
          userName
        })
      );
      navigate(process.env['REDIRECT_URL_AFTER_LOGIN']);
    });
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'transparent' }}>
          <img src={'../../../assets/images/logo/isc/isc-192.png'} />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('login.welcome.msg')}
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label={t('login.username')}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label={t('login.password')}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={t('login.remember.me')}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              handleSubmit();
            }}
          >
            {t('login.sign.in')}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {t('login.forgot.password')}
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {t('login.sign.up')}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Login;
