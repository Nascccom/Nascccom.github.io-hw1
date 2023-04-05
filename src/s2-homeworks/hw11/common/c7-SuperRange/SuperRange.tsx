import React from 'react'
import {Slider, SliderProps} from '@mui/material'


const SuperRange: React.FC<SliderProps> = (props) => {

    return (
      <Slider
        sx={{ // стили для слайдера // пишет студент
            width: '25%',
            color: '#00CC22',
            borderRadius: '10px',
            ".MuiSlider-rail": {
                color: '#8B8B8B'
            },
            ".MuiSlider-thumb": {
                width: '18px',
                height: '18px',
                backgroundColor: '#fff',
                "&::before": {
                    border: '1px solid #00CC22',
                },
                "&::after": {
                    width: '7px',
                    height: '7px',
                    backgroundColor: '#00CC22'
                },
            },
        }}
        {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
      />
    )
}

export default SuperRange
