import React from "react";
import { Paper, Grid, Typography, Button, makeStyles } from '@material-ui/core/';
import { useSelector, useDispatch } from "react-redux";
import cartAction from './store/actions/cart';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      height: '100%',
    },
  }));

const Card = ({ product, children }) => {
  const cart = useSelector( state => state.cart.value )
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Grid item={true} xs={3}>
      <Paper className={classes.paper}>
        <Grid container direction='column'>
          <Grid item>
            <img width="140px" src={product.image} alt={product.name} />
            <Typography variant='h6'>
              {children}
            </Typography>
            <Typography variant='subtitle1'>
              R$ {product.price.toFixed(2)}
            </Typography>
          </Grid>
          <Button
            variant="contained"
            onClick={() => dispatch(cartAction.Add(cart, product))}
          >
            Adicionar
          </Button>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Card;