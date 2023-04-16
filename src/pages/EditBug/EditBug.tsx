import { Typography } from '@mui/material'
import BugForm from 'components/BugForm/BugForm'
import PageTitle from 'components/PageTitle/PageTitle'
import { useParams } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'
import { Bug, getBugsObject } from 'utils/bugModel'

type Props = {
    bugObject?: {
        [id: string]: Bug
    }
}
const EditBug = ({ bugObject }: Props) => {
    const bugsArray = useAppSelector((state) => state.bugs)
    bugObject = getBugsObject(bugsArray)
    const { id } = useParams()
    const bug: Bug = bugObject[id!]
    return (
        <>
            <PageTitle>Modifica Bug</PageTitle>
            <Typography className="bug-id">
                Id assegnato per questo Bug è{' '}
                <span className="bold">{bug.id}</span>
            </Typography>
            <BugForm bug={bug} />
        </>
    )
}

export default EditBug
