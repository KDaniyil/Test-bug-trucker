import { Typography } from '@mui/material'
import './PageTitle.scss'

type Props = {
    children: React.ReactNode
}

const PageTitle = ({ children }: Props) => {
    return (
        <Typography
            variant="h3"
            component="h3"
            textAlign="center"
            marginTop={2}
        >
            {children}
        </Typography>
    )
}

export default PageTitle
