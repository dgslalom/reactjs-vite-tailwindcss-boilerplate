// import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
// import { Box } from '@mui/material';
// import { ReactElement } from 'react';
// import { ReactElement, useContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ROUTES } from 'router/router';
// import { LoadingComponent } from 'shared/components/loading/loading.component';
// import { SideNavigation } from 'shared/components/navigation/sideNavigation.component';
// import { TopNavigation } from 'shared/components/navigation/topNavigation.component';
// import { AppContext } from 'shared/models/app.context.model';
// import { theme } from 'styles/theme';
// import ButtonAppBar from '../../components/AppBar/app-bar.component';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from '../../components/AppBar/app-bar.component';
// import { Box, Container, CssBaseline } from '@mui/material';
// import { CssBaseline } from '@mui/material';

// interface RootProps {
//   childComponent: ReactElement;
// }

export function Root() {
  // export function Root(props: RootProps): EmotionJSX.Element {
  const isAuthenticated = true; // useContext(AppContext).isAuthenticated;
  // const navigate = useNavigate();
  // const [open, setOpen] = useState(true);
  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate(ROUTES.login.path);
  //   }
  // }, [isAuthenticated, navigate]);

  if (isAuthenticated) {
    return (
      <>
        <ResponsiveAppBar />
        <Outlet />
      </>

      // <Box sx={{ display: 'flex' }}>
      //   <CssBaseline />
      //   <Box>
      //     <div>funky chicken</div>
      //   </Box>
      //   <Box
      //     component="main"
      //     sx={{
      //       height: '100vh',
      //       flexGrow: '1',
      //       overflow: 'auto'
      //     }}
      //   >
      //     <Container maxWidth="xl">
      //       <div>stuff goes here</div>
      //     </Container>
      //   </Box>
      //   <ButtonAppBar />
      // </Box>
    );
  }

  // return <LoadingComponent height="100%" />;
}
