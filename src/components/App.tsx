import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';
import 'tailwindcss/tailwind.css';
import Landing from 'components/Landing/landing';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
