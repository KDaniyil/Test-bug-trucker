import { Box, Button, Card, CardActions, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import { Bug } from 'utils/bugModel'
import './BugsListItem.scss'
import BugPriority from 'components/BugPriority/BugPriority'
import DeleteButton from 'components/DeleteButton/DeleteButton'

type Props = {
    bug: Bug
}

const BugsListItem = ({ bug }: Props) => {
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
                <BugPriority bug={bug} />
                <p>
                    {' '}
                    Stato: <span className="bold">{bug.state}</span>
                </p>
                <p className={bug.dateLastChange === '' ? 'hide' : 'show'}>
                    L'ultima modifica:{' '}
                    <span className="bold">{bug.dateLastChange}</span>
                </p>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Button variant="outlined">
                    <Link to={`/bugs/${bug.id}`}>Modifica</Link>
                </Button>
                <DeleteButton bug={bug} />
            </CardActions>
        </Card>
    )
}

export default BugsListItem
