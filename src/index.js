import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import BooksContext from './context/ContextBooks';

// color:
// #faa613 Chrome yellow
// #f7b32b Homey yellow
// #EDFF71 Mindaro
// #D7F75B Maximun Green Yellow
// #BFAB25 Old Gold

// #3A86FF Azure
// #48B8D0 Maximun blue
// #8AE1FC Non Photo blue
// #5C80BC Glaucous

// #191716 Eerie black

// secondary
// #8CD867 Mantis
// #8ACB88 Pistachio
// #32533D Brunswick Green
// #A7C957 Android Green
// #748E54 Moss Green
// #B0DB43 June Bud
// #306B34 Darthmouth Green

// #E5ECF4 Alice Blue
// #DCCDE8 Languid Lavender
// #E1DEE9 Languid Web
// #EDFFEC Honeydew
// #E3DBDB Gainsboro

// #F0544F Tart Orange
// #960200 Dark Red

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8ACB88',
      main: '#f7b32b',
      dark: '#faa613',
    },
    secondary: {
      light: '#3A86FF',
      main: '#faa613',
      dark: '#EDFF71',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <BooksContext>
          <App />
        </BooksContext>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
reportWebVitals();
