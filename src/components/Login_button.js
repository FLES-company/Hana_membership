import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        backgroundColor: '#4a3e53',
        color: '#ffffff',
        fontSize:20,
        lineHeight: 1.5,
        padding: '6px 110px 6px 110px ',
      },

    },
  }));

function Login_btn() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button variant="contained">로그인</Button>
        </div>
    )
  }
  
  export default Login_btn;

  