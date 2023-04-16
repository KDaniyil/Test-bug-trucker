import { Typography } from '@mui/material'
import BugsList from 'components/BugsList/BugsList'

type Props = {}

const AllBugs = (props: Props) => {
    return (
        <>
            <Typography component="h3" variant="h3" mt={2} textAlign="center">
                La lista dei bug
            </Typography>
            <BugsList />
        </>
    )
}

export default AllBugs
