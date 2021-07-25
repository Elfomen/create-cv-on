import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './Slider.css'
const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 40,
    label: '40%',
  },
  {
    value: 80,
    label: '80%',
  },
  {
    value: 100,
    label: '100%',
  },
];

function valuetext(value) {
  return `${value}%`;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={`${classes.root} slider`}>
      <Typography id="discrete-slider-always" gutterBottom>
        Select level
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={20}
        marks={marks}
        valueLabelDisplay="on"
      />
    </div>
  );
}
