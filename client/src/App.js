import React, { useState, useEffect } from 'react';
import { Container , AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux'; //to dispatch a action

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import movieimage from './images/movieimage.jpg';

const App= ()=>{
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch(); //this is a hook in redux

    useEffect(()=>{
        dispatch(getPosts());
    },[currentId,dispatch]);

    return(
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color ="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Movies</Typography>
                <img className={classes.image} src={movieimage} alt="movies" height="50" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;