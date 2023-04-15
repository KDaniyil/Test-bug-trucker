import { Button, Card, CardActions, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import { Bug } from 'utils/bugModel'

type Props = {
    bug: Bug
}

const BugsListItem = ({ bug }: Props) => {
    return (
        <Card variant="outlined">
            <CardContent></CardContent>
            <CardActions>
                <Button>
                    <Link to={`/bugs/${bug.id}`}>Modifica</Link>
                </Button>
                <Button>Cancella</Button>
            </CardActions>
        </Card>
    )
}

export default BugsListItem
