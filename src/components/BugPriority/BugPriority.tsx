import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material'
import React from 'react'
import { Bug, COLORS } from 'utils/bugModel'

type Props = {
    bug: Bug
    changeNewPriority(newPriority?: number): void
}

const BugPriority = ({ bug, changeNewPriority }: Props) => {
    const [priorityBug, setPriorityBug] = React.useState<number>(bug.priority)
    const handleChange = (event: SelectChangeEvent) => {
        const eventPriority = event.target.value as string
        setPriorityBug(Number(eventPriority))
        changeNewPriority(Number(eventPriority))
    }
    return (
        <Box sx={{ minWidth: 120, marginTop: '15px' }}>
            <FormControl fullWidth>
                <InputLabel id="select-label">Priorità</InputLabel>
                <Select
                    required
                    labelId="select-label"
                    id="demo-simple-select"
                    value={priorityBug.toString()}
                    label="Priorità"
                    onChange={handleChange}
                    sx={{ backgroundColor: `${COLORS[priorityBug]}` }}
                >
                    <MenuItem value={0}>None</MenuItem>
                    <MenuItem value={1}>High</MenuItem>
                    <MenuItem value={2}>Medium</MenuItem>
                    <MenuItem value={3}>Low</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default BugPriority
