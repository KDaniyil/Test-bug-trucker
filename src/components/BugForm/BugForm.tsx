import {
    TextField,
    Button,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
} from '@mui/material'
import BugPriority from 'components/BugPriority/BugPriority'
import { useState } from 'react'
import { useAppDispatch } from 'redux/hooks'
import { Bug, resetBug } from 'utils/bugModel'
import './BugForm.scss'
import { createModifyBug } from 'redux/bugsReducer'
import { Link } from 'react-router-dom'

type Props = {
    bug: Bug
    titleButton: string
}

const BugForm = ({ bug, titleButton }: Props) => {
    const [newBug, setNewBug] = useState<Bug>(bug)
    const dispatch = useAppDispatch()
    const changeNewPriority = (newPriority: number) => {
        setNewBug((prevState) => ({
            ...prevState,
            priority: newPriority,
        }))
    }
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewBug((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const handleChangeState = (event: SelectChangeEvent) => {
        setNewBug((prevState) => ({
            ...prevState,
            state: event.target.value as string,
        }))
    }
    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setNewBug(resetBug)
    }
    return (
        <form onSubmit={onSend} className="form">
            <div className="newBug-title">
                <TextField
                    required
                    label="Ogetto"
                    name="title"
                    value={newBug.title}
                    onChange={handleInput}
                ></TextField>
            </div>
            <div className="newBug-description">
                <TextField
                    required
                    label="Descrizione"
                    name="description"
                    value={newBug.description}
                    onChange={handleInput}
                />
            </div>
            <div className="newBug-creator">
                <TextField
                    defaultValue={'unknown'}
                    label="Autore"
                    name="creator"
                    value={newBug.creator}
                    onChange={handleInput}
                ></TextField>
            </div>
            <div className="newBug-date">
                <TextField
                    required
                    name="dateCreation"
                    value={newBug.dateCreation}
                    type="date"
                    onChange={handleInput}
                ></TextField>
            </div>
            <div>
                <BugPriority
                    bug={newBug}
                    changeNewPriority={changeNewPriority}
                />
            </div>
            <div>
                <Box sx={{ minWidth: 120, marginTop: '15px' }}>
                    <FormControl fullWidth>
                        <InputLabel id="select-label">Stato</InputLabel>
                        <Select
                            required
                            labelId="select-label"
                            id="demo-simple-select"
                            value={newBug.state}
                            label="Priorità"
                            name="state"
                            onChange={handleChangeState}
                        >
                            <MenuItem defaultChecked value={'Open'}>
                                Open
                            </MenuItem>
                            <MenuItem value={'Pending'}>Pending</MenuItem>
                            <MenuItem value={'Closed'}>Closed</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <Button variant="outlined" type="submit" className="newBug-btn">
                <Link
                    onClick={() => dispatch(createModifyBug(newBug))}
                    to={'/'}
                >
                    {titleButton}
                </Link>
            </Button>
        </form>
    )
}

export default BugForm
