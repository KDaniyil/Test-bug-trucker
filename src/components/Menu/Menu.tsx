import { Box } from '@mui/material'
import MenuItem from './MenuItem'
import Logo from 'components/Logo/Logo'

type Props = {}

const Menu = (props: Props) => {
    return (
        <Box display="flex">
            <Logo />
            <MenuItem to="/">Bugs</MenuItem>
            <MenuItem to="/newbug">New Bug</MenuItem>
        </Box>
    )
}

export default Menu
