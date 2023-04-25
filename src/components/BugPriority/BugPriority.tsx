import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material'
import React from 'react'
import { changePriority } from 'redux/bugsReducer'
import { useAppDispatch } from 'redux/hooks'
import { Bug, COLORS } from 'utils/bugModel'

type Props = {
    bug: Bug
}

const BugPriority = ({ bug }: Props) => {
    const dispatch = useAppDispatch()
    const [priorityBug, setPriorityBug] = React.useState<number>(bug.priority)
    const handleChange = (event: SelectChangeEvent) => {
        const eventPriority = event.target.value as string
        console.log({ eventPriority })
        setPriorityBug(Number(eventPriority))
        console.log(`${bug.id}:${priorityBug}`)
        dispatch(
            changePriority({
                id: bug.id,
                priority: priorityBug,
                title: bug.title,
                description: bug.description,
                creator: bug.creator,
                state: bug.state,
                dateCreation: bug.dateCreation,
            })
        )
    }
    return (
        <Box sx={{ minWidth: 120, marginTop: '15px' }}>
            <p>{priorityBug}</p>
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
