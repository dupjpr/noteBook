import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const TextCard = ({ info }) => {
  return (
    <Box>
      <Typography
        variant='h6'
        component='div'
        sx={
          {
            textAlign: 'justify'
          }
        }
      >
        {info().text}
      </Typography>
      <Typography
        component='p'
        sx={
          {
            textAlign: 'right',
            marginTop: '1.5%'
          }
        }
      >
        {info().author}
      </Typography>
    </Box>
  );
}

export default TextCard;