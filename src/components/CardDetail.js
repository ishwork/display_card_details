import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {useParams, useHistory} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";


function CardDetail(){
    const styles = useStyles();
    const { id } = useParams();
    const { push } = useHistory();
    const [cardDetails, setCardDetails] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                setCardDetails(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetch();
    }, []);

    if(!cardDetails) return null;

    return(
                <div className={styles.userCard}>
                        <div>
                            <Typography className={styles.userTypo}>- Name: {cardDetails.name}</Typography>
                            <Typography className={styles.userTypo}>- Username: {cardDetails.username}</Typography>
                            <Typography className={styles.userTypo}>- Email: {cardDetails.email}</Typography>
                            <Typography className={styles.userTypo}>- Phone: {cardDetails.phone}</Typography>
                            <Typography className={styles.userTypo}>- Website: {cardDetails.website}</Typography>
                        </div>

                        <div>
                            <Typography className={styles.userTypo}>- Address:</Typography>
                            <ul>
                                <li><Typography className={styles.userTypo}>Street: {cardDetails.address.street}</Typography></li>
                                <li><Typography className={styles.userTypo}>Suite: {cardDetails.address.suite}</Typography></li>
                                <li><Typography className={styles.userTypo}>City: {cardDetails.address.city}</Typography></li>
                                <li><Typography className={styles.userTypo}>Zipcode: {cardDetails.address.zipcode}</Typography></li>
                            </ul>
                        </div>

                        <div>
                            <Typography className={styles.userTypo}>- Geo:</Typography>
                            <ul>
                                <li><Typography className={styles.userTypo}>Latitude: {cardDetails.address.geo.lat}</Typography></li>
                                <li><Typography className={styles.userTypo}>Longitude: {cardDetails.address.geo.lng}</Typography></li>
                            </ul>
                        </div>

                        <div>
                            <Typography className={styles.userTypo}>- Company:</Typography>
                            <ul>
                                <li><Typography className={styles.userTypo}>Name: {cardDetails.company.name}</Typography></li>
                                <li><Typography className={styles.userTypo}>Catchphrase: {cardDetails.company.catchPhrase}</Typography></li>
                                <li><Typography className={styles.userTypo}>BS: {cardDetails.company.bs}</Typography></li>
                            </ul>
                        </div>

                        <br />
                        <Button onClick={() => push('/')} variant="contained" color="primary">GO BACK</Button>
                </div>
    )
}

export default CardDetail;

const useStyles = makeStyles({
    userCard: {
        width: '50%',
        height: "auto",
        marginLeft: '40%',
        marginTop: '50px',
    },
    userTypo: {
        fontSize: '18px',
        fontWeight: 'bold'
    }
});
