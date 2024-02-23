import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import axios from "axios";

function Home() {
    const styles = useStyles();
    const[cardData, setCardData] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
                setCardData(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetch();
    }, []);

    return(
     <div>
         <Paper elevation={3} >
             <Grid container spacing={2} style={{textAlign:'center'}}>
                 {cardData.map((userData) => (
                         <Grid item key={userData.id} XS={12} md={6} lg={4} style={{marginTop:'20px'}}>
                             <Card className={styles.root}>
                                 <CardContent>
                                     <Avatar className={styles.imgAvatar}>{userData.name.charAt(0)}</Avatar>
                                     <Typography className={styles.typoTitle} color="textSecondary" gutterBottom>
                                         {userData.name}
                                     </Typography>
                                     <Typography className={styles.typoUsername} color="textSecondary" gutterBottom>
                                         {userData.username}
                                     </Typography>
                                     <Typography className={styles.typoEmail} color="textSecondary" gutterBottom>
                                         {userData.email}
                                     </Typography>
                                 </CardContent>

                                 <Button component={Link} to={`/user/${userData.id}`} variant="contained" color="red">
                                     MORE DETAILS
                                 </Button>
                             </Card>
                         </Grid>
                     )
                 )}
             </Grid>
         </Paper>
     </div>
    )
}

export default Home;

const useStyles = makeStyles((theme) =>({
    root: {
        width: 300,
        height: 300,
        marginLeft: 100,
        justifyContent: 'center',
    },
    imgAvatar: {
      marginLeft: '40%',
      marginBottom: '10px',
      backgroundColor: 'orange',
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    typoTitle: {
        fontSize:18,
        fontWeight: 'bold'
    },
    typoUsername: {
        fontSize: 14,
    },
    typoEmail: {
        fontSize: 14,
        color: 'lightcoral'
    },
    }));

