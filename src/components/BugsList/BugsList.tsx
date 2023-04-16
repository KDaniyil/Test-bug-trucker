import { Grid } from '@mui/material'
import BugsListItem from './BugsListItem'
import { useAppSelector } from 'redux/hooks'

type Props = {}

const BugsList = (props: Props) => {
    const bugsArray = useAppSelector((state) => state.bugs)
    return (
        <Grid container spacing={4} justifyContent="center" marginTop={2}>
            {bugsArray.map((bug) => {
                return (
                    <Grid item xs={12} sm={6} md={4} key={bug.id}>
                        <BugsListItem bug={bug} />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default BugsList
