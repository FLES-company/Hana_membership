import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        color: '#ffffff',
        fontSize:30,
        borderRadius:'50%',
        color: '#ffffff',
      },

    },
    naver:{
        backgroundColor: '#59c030',
    },
    kakao:{
        backgroundColor: '#fce14c',
    },
    facebook:{
        backgroundColor: '#4267b2',
    },
  }));

function Social_login_btn() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button className={classes.naver}>N</Button>
            <Button className={classes.kakao}>K</Button>
            <Button className={classes.facebook}>F</Button>
        </div>
    )
  }
  
  export default Social_login_btn;

  