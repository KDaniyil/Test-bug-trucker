import { Button, TextField, Typography } from '@mui/material'
import { useId, useState } from 'react'
import { Bug } from 'utils/bugModel'
import './NewBug.scss'
import BugPriority from 'components/BugPriority/BugPriority'
import BugState from 'components/BugState/BugState'

type Props = {}

const NewBug = (props: Props) => {
    const uniqueId: string = useId()
    const [newBug, setNewBug] = useState<Bug>({
        id: uniqueId,
        title: '',
        description: '',
        creator: '',
        priority: 0,
        state: '',
        dateCreation: '',
        dateLastChange: '',
    })
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewBug((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <>
            <Typography
                variant="h2"
                component="h2"
                textAlign="center"
                marginTop={2}
            >
                Nuovo Bug
            </Typography>
            <Typography
                variant="h5"
                component="h5"
                marginTop={3}
                className="text"
            >
                Completa tutti i campi:
            </Typography>
            <Typography className="bug-id">
                Id assegnato per questo Bug è{' '}
                <span className="bold">{newBug.id}</span>
            </Typography>
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
                        type="date"
                        value={newBug.dateCreation}
                        onChange={handleInput}
                    ></TextField>
                </div>
                <div>
                    <BugPriority />
                </div>
                <div>
                    <BugState />
                </div>

                <Button variant="outlined" type="submit" className="newBug-btn">
                    Aggiungi
                </Button>
            </form>
        </>
    )
}

export default NewBug
