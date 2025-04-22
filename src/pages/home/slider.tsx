import { Slider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import useRangeStore from '@/store/useRangeStore';

const sliderBarHeight = 12;
const sliderBarWidth = 220;

const GradientSlider = styled(Slider)({
  height: sliderBarHeight,
  width: sliderBarWidth,
  '& .MuiSlider-track': {
    border: 'none',
    borderRadius: 0,
    background: 'linear-gradient(90deg, #028d02 0%, #FFFF00 50%, #FF0000 100%)',
    height: sliderBarHeight,
  },
  '& .MuiSlider-rail': {
    border: 'none',
    borderRadius: 0,
    background: 'linear-gradient(90deg, #028d02 0%, #FFFF00 50%, #FF0000 100%)',
    opacity: 0.5,
    height: sliderBarHeight,
  },
  '& .MuiSlider-thumb': {
    height: 22,
    width: 22,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    borderRadius: '50%',
    '&[data-index="0"]':{
        marginLeft:'0%'
    },
    '&[data-index="1"]':{
        marginRight:'0%'
    },
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#1976d2',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

interface RangeSliderProps {
  min: number;
  max: number;
  onChange?: (value: [number, number]) => void;
  label?: string;
}

export const RangeSlider = ({
  min,
  max,
  onChange,
  label = 'PM2.5 (μg/m³)',
}: RangeSliderProps) => {
  const { rangeValues, locations, setRangeValues } = useRangeStore();
  const [value, setValue] = useState<[number, number]>(rangeValues);

  useEffect(() => {
    setValue(rangeValues);
  }, [rangeValues]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue) && newValue.length === 2 && 
        typeof newValue[0] === 'number' && typeof newValue[1] === 'number') {
      const rangeValue: [number, number] = [newValue[0], newValue[1]];
      setValue(rangeValue);
      setRangeValues(rangeValue);
      onChange?.(rangeValue);
    }
  };

  const getColorByValue = (value: number): string => {
    if (value <= 25) return 'text-green-500';
    if (value <= 100) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="w-full px-3">
      <div className="flex justify-between mb-1">
        <span className="text-xs text-gray-500">
          {label}
        </span>
        <span className="text-xs text-gray-500">
          {value[0].toFixed(1)} - {value[1].toFixed(1)}
        </span>
      </div>
      <GradientSlider
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        valueLabelDisplay="auto"
      />
      <div className="flex justify-between mt-1">
        {Object.entries(locations).map(([location, value]) => (
          <div key={location} className="text-center">
            <span className={`text-sm font-bold ${getColorByValue(value)}`}>
              {value.toFixed(1)}
            </span>
            <span className="block text-xs text-gray-500">
              {location}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
