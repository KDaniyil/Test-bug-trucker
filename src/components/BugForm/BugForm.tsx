import { TextField, Button } from '@mui/material'
import BugPriority from 'components/BugPriority/BugPriority'
import BugState from 'components/BugState/BugState'
import { useState } from 'react'
import { useAppDispatch } from 'redux/hooks'
import { Bug, resetBug } from 'utils/bugModel'
import './BugForm.scss'
import { createBug } from 'redux/bugsReducer'

type Props = {
    bug: Bug
}

const BugForm = ({ bug }: Props) => {
    const [newBug, setNewBug] = useState<Bug>(bug)
    const dispatch = useAppDispatch()

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewBug((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
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
                <BugPriority priority={newBug.priority.toString()} />
            </div>
            <div>
                <BugState state={newBug.state} />
            </div>
            <Button
                variant="outlined"
                type="submit"
                className="newBug-btn"
                onClick={() => dispatch(createBug(newBug))}
            >
                Creare
            </Button>
        </form>
    )
}

export default BugForm
