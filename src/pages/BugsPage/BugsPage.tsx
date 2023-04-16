import { Box, Typography } from '@mui/material'
import BugsList from 'components/BugsList/BugsList'
import PageTitle from 'components/PageTitle/PageTitle'
import { useState } from 'react'
import { useAppSelector } from 'redux/hooks'

type Props = {}

const BugsPage = (props: Props) => {
    const bugsArray = useAppSelector((state) => state.bugs)
    const [selectedFiltr, setSelectedFiltr] = useState('')
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFiltr(e.target.value)
    }

    return (
        <>
            <PageTitle>La lista dei bug</PageTitle>
            <Box display={'flex'} justifyContent={'center'}>
                <Typography variant="h5" textAlign={'center'}>
                    Filtra per la priorità
                </Typography>
                <select value={selectedFiltr} onChange={handleChange}>
                    <option value="">All</option>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                </select>
            </Box>

            <BugsList
                bugsArray={
                    selectedFiltr === ''
                        ? bugsArray
                        : bugsArray.filter(
                              (bug) => bug.priority === Number(selectedFiltr)
                          )
                }
            />
        </>
    )
}

export default BugsPage
