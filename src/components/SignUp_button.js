import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        // margin: theme.spacing(1),
        // margin:'30px 0 30px',
        backgroundColor: '#ffffff',
        fontSize:20,
        lineHeight: 1.5,
        width: '100%',
      },

    },
  }));

function Signup_btn() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button variant="outlined" size="large">
                회원가입
            </Button>
        </div>
    )
  }
  
  export default Signup_btn;

  