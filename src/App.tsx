import { CssBaseline, StyledEngineProvider } from '@mui/material'
import AllBugs from 'pages/AllBugs/AllBugs'
import SingleBug from 'pages/SingleBug/SingleBug'
import { Route, Routes } from 'react-router-dom'

type Props = {}

const App = (props: Props) => {
    return (
        <div>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Routes>
                    <Route path="/" element={<AllBugs />} />
                    <Route path="/bugs/:id" element={<SingleBug />} />
                </Routes>
            </StyledEngineProvider>
        </div>
    )
}

export default App
