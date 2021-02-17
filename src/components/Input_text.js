import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        display:"flex"
      },
    },
    input:{
        justifyContent:"center",
    },
  }));

  function Input_text() {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField className={classes.input} id="standard-basic" label="아이디"/>
            <TextField className={classes.input} id="standard-basic" label="비밀번호"/>
        </form>
    )
  }
  
  export default Input_text;