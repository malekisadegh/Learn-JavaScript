import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/auth-slice';
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

function Login() {

    const dispatch = useDispatch();

    const state = useSelector(state => state);
    const authState = useSelector((state:AuthState) => state.auth);
    const isLoggedIn = useSelector((state:AuthState) => state.auth.isLoggedIn);

    const loginBtnText = isLoggedIn ? 'logout' : 'login';
    const handleSubmit = () => {
        isLoggedIn ?
            dispatch(authActions.logout())
            :
            dispatch(authActions.login({ email, password }))
    }

    const email = 'ex@test.com'
    const password = '1223456'
    return (
        <>
            {!isLoggedIn &&
                (
                    <Box
                    sx={{
                      marginTop: 8,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign In
                      </Button>
                      <Grid container>
                        <Grid item xs>
                          <Link href="#" variant="body2">
                            Forgot password?
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                )
            }

            {isLoggedIn &&
                (
                    <>
                        <h1>WellCome</h1>
                        <p>Email:{authState.email}</p>

                    </>
                )
            }
            <Button onClick={handleSubmit}>{loginBtnText}</Button>
        </>
    );
}

export default Login;