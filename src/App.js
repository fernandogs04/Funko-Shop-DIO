import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import MainRoutes from './routes';
import Header from './components/Header';
import { Container } from '@material-ui/core/';
//import { Container, Paper, Grid, Typography, Button, TextField, List, ListItem, ListItemText, makeStyles } from '@material-ui/core/';


const App = () => {

  const localCart = JSON.parse(localStorage.getItem("dioshopping: cart"));
  if (localCart !== null) {
    store.dispatch({type: 'CHANGE_CART', localCart: localCart})
  }

  return(
    <Provider store={store}>
      <Container maxWidth="xl">
        <Router>
          <Header />
          <MainRoutes />
        </Router>
      </Container>
    </Provider>
  )
}

export default App;
