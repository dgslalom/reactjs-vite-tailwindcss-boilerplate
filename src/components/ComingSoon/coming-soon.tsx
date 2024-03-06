import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Sailing from '@mui/icons-material/Sailing';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
// import ThreeDRotation from '@mui/icons-material/ThreeDRotation';

export const ComingSoon = (props: { name?: string }) => {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 4, backgroundColor: '#1D262F', color: '#EFEFF0' }}
    >
      <Box sx={{ p: 3, backgroundColor: 'rgba(239, 239, 240, 0.07)' }}>
        <Typography variant="h2" paragraph>
          {props.name} coming soon!
        </Typography>
        <Sailing />
        <Typography paragraph sx={{ pt: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
      </Box>
    </Box>
  );
};
