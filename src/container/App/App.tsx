import { Container, CssBaseline, StyledEngineProvider } from '@mui/material'
import Header from 'container/Header/Header'
import BugsPage from 'pages/BugsPage/BugsPage'
import NewBug from 'pages/NewBug/NewBug'
import { Route, Routes } from 'react-router-dom'
import EditBug from 'pages/EditBug/EditBug'

type Props = {}

const App = (props: Props) => {
    return (
        <div>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
                <Container>
                    <Routes>
                        <Route path="/" element={<BugsPage />} />
                        <Route path="/bugs/:id" element={<EditBug />} />
                        <Route path="/newbug" element={<NewBug />} />
                    </Routes>
                </Container>
            </StyledEngineProvider>
        </div>
    )
}

export default App
