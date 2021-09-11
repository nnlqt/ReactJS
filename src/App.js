import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from './components/Router';
import { persistor, store } from './store';
import { createTheme, ThemeProvider } from '@material-ui/core';
import  grey  from '@material-ui/core/colors/grey';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#fefefe'
    },
    secondary: grey
  },
  typography: {
    fontFamily: 'Besley',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
