import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material'
import React from 'react'

type Props = {
    state?: string
}

const BugState = ({ state }: Props) => {
    const [bugState, setBugState] = React.useState(state)

    const handleChange = (event: SelectChangeEvent) => {
        setBugState(event.target.value as string)
    }
    return (
        <Box sx={{ minWidth: 120, marginTop: '15px' }}>
            <FormControl fullWidth>
                <InputLabel id="select-label">Stato</InputLabel>
                <Select
                    required
                    labelId="select-label"
                    id="demo-simple-select"
                    value={bugState}
                    label="Priorità"
                    onChange={handleChange}
                >
                    <MenuItem defaultChecked value={'Open'}>
                        Open
                    </MenuItem>
                    <MenuItem value={'Pending'}>Pending</MenuItem>
                    <MenuItem value={'Closed'}>Closed</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default BugState
