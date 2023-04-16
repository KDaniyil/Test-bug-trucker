import { Bug } from 'utils/bugModel'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import React from 'react'
import { useAppDispatch } from 'redux/hooks'
import { deleteBug } from 'redux/bugsReducer'

type Props = {
    bug: Bug
}

const DeleteButton = ({ bug }: Props) => {
    const [open, setOpen] = React.useState(false)
    const dispatch = useAppDispatch()
    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Cancella
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Sei sicuro di cancellare questo elemento ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Ho cambiato idea</Button>
                    <Button onClick={() => dispatch(deleteBug(bug))} autoFocus>
                        Confermo
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default DeleteButton
