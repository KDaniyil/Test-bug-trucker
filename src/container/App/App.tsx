import { Container, CssBaseline, StyledEngineProvider } from '@mui/material'
import Header from 'container/Header/Header'
import AllBugs from 'pages/AllBugs/AllBugs'
import NewBug from 'pages/NewBug/NewBug'
import SingleBug from 'pages/SingleBug/SingleBug'
import { Route, Routes } from 'react-router-dom'

type Props = {}

const App = (props: Props) => {
    return (
        <div>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
                <Container>
                    <Routes>
                        <Route path="/" element={<AllBugs />} />
                        <Route path="/bugs/:id" element={<SingleBug />} />
                        <Route path="/newbug" element={<NewBug />} />
                    </Routes>
                </Container>
            </StyledEngineProvider>
        </div>
    )
}

export default App
