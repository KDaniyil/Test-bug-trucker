import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material'
import React from 'react'
import { COLORS } from 'utils/bugModel'

type Props = {
    priority: string
}

const BugPriority = ({ priority }: Props) => {
    const [priorityBug, setPriorityBug] = React.useState(priority)
    const handleChange = (event: SelectChangeEvent) => {
        setPriorityBug(event.target.value as string)
    }
    return (
        <Box sx={{ minWidth: 120, marginTop: '15px' }}>
            <FormControl fullWidth>
                <InputLabel id="select-label">Priorità</InputLabel>
                <Select
                    required
                    labelId="select-label"
                    id="demo-simple-select"
                    value={priorityBug}
                    label="Priorità"
                    onChange={handleChange}
                    sx={{ backgroundColor: `${COLORS[Number(priorityBug)]}` }}
                >
                    <MenuItem defaultChecked value={1}>
                        High
                    </MenuItem>
                    <MenuItem value={2}>Medium</MenuItem>
                    <MenuItem value={3}>Low</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default BugPriority
