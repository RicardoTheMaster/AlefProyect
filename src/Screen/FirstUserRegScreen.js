import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';import "animate.css"
import { NavLink } from 'react-router-dom';
import { Copyright,useStyles } from './LoginScreen';

export const FirstUserRegScreen = () => {
  const classes = useStyles();

  return (
    
    <Grid container component="main" className={classes.root+" animate__animated animate__backInRight " } >
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={20} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <ArrowForwardIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
          <Grid container >
            <Grid item xs>
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Dirección de correo electronico @"
                name="email"
                autoComplete="email"
                autoFocus
                />
                </Grid>
            <Grid item xs>
                <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Dirección de correo electronico @"
                type="password"
                id="password"
                autoComplete="current-password"
                />
            </Grid>
           </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Iniciar Sesion
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Recupera tu contraseña
                </Link>
              </Grid>
              <Grid item>
                <NavLink exact to="/FirstReg" variant="body2">
                {"¡Registrate ahora!"}
                </NavLink>
              </Grid>
            </Grid>
            <Box mt={15}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
