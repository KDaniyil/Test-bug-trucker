import { Grid } from '@mui/material'
import BugsListItem from './BugsListItem'
import { Bug } from 'utils/bugModel'

type Props = {
    bugsArray: Bug[]
}

const BugsList = ({ bugsArray }: Props) => {
    return (
        <Grid
            container
            spacing={4}
            justifyContent="center"
            marginTop={2}
            marginBottom={4}
        >
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
