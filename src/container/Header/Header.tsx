import { AppBar, Container, Toolbar } from '@mui/material'
import Menu from 'components/Menu/Menu'

type Props = {}
const Header = (props: Props) => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Menu />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
