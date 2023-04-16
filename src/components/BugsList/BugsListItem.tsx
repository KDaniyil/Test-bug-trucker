import { Box, Button, Card, CardActions, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import { Bug } from 'utils/bugModel'
import './BugsListItem.scss'
import BugPriority from 'components/BugPriority/BugPriority'
import BugState from 'components/BugState/BugState'
import { useAppDispatch } from 'redux/hooks'
import { deleteBug } from 'redux/bugsReducer'

type Props = {
    bug: Bug
}

const BugsListItem = ({ bug }: Props) => {
    const dispatch = useAppDispatch()
    return (
        <Card variant="elevation" className="bug-card">
            <CardContent>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <p>
                        id: <span className="bold">{bug.id}</span>
                    </p>
                    <p>
                        data: <span className="bold">{bug.dateCreation}</span>
                    </p>
                </Box>
                <p>
                    Ogetto <span className="bold">{bug.title}</span>
                </p>
                <p>Descrizione: {bug.description}</p>
                <p>
                    Authore: <span className="bold">{bug.creator}</span>
                </p>
                <BugPriority priority={bug.priority.toString()} />
                <BugState state={bug.state} />
                <p className={bug.dateLastChange === '' ? 'hide' : 'show'}>
                    L'ultima modifica:{' '}
                    <span className="bold">{bug.dateLastChange}</span>
                </p>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Button>
                    <Link to={`/bugs/${bug.id}`}>Modifica</Link>
                </Button>
                <Button onClick={() => dispatch(deleteBug(bug))}>
                    Cancella
                </Button>
            </CardActions>
        </Card>
    )
}

export default BugsListItem
