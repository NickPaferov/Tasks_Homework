import {Box, Slider} from '@mui/material'
import React from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number | number[]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const handleChange = (event: Event, value: number | number[]) => {
        if (Array.isArray(value) && value[1] - value[0] >= 5) {
            onChangeRange && onChangeRange(value as number[])
        }
    }

    return (
        <Box sx={{width: 300}} marginLeft={3} marginTop={-3}>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="off"
            />
        </Box>
    )
}

export default SuperDoubleRange
