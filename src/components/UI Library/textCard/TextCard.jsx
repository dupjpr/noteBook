import Typography from '@mui/material/Typography';

const TextCard = ({ info }) => {
  return (
    <div>
      <Typography
        variant='h6'
        component='div'
      >
        {info().text}
      </Typography>
      <Typography
        variant='h6'
        component='div'
      >
        {info().author}
      </Typography>
    </div>
  );
}

export default TextCard;