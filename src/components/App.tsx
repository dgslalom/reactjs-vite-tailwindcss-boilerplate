import { RouterProvider } from 'react-router-dom';
import { router } from '../router/router';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
