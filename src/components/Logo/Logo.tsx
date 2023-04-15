import { Typography } from '@mui/material'
import BugReportIcon from '@mui/icons-material/BugReport'
type Props = {}

const Logo = (props: Props) => {
    return (
        <>
            <BugReportIcon sx={{ alignSelf: 'center' }} />
            <Typography
                className="logo"
                variant="h6"
                sx={{
                    mr: 4,
                    color: 'whitesmoke',
                    display: { xs: 'none', sm: 'block' },
                }}
            >
                Bug tracker
            </Typography>
        </>
    )
}

export default Logo
