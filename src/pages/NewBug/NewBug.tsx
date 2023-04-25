import { Typography } from '@mui/material'
import { useId } from 'react'
import BugForm from 'components/BugForm/BugForm'
import { Bug } from 'utils/bugModel'
import PageTitle from 'components/PageTitle/PageTitle'

type Props = {}

const NewBug = (props: Props) => {
    const uniqueId: string = useId()
    const emptyBug: Bug = {
        id: uniqueId,
        title: '',
        description: '',
        creator: '',
        priority: 0,
        state: '',
        dateCreation: '',
        dateLastChange: '',
    }
    return (
        <>
            <PageTitle>Nuovo Bug</PageTitle>
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
                <span className="bold">{uniqueId}</span>
            </Typography>
            <BugForm bug={emptyBug} titleButton="Creare" />
        </>
    )
}

export default NewBug
