import { Box, Typography } from '@mui/material'
import BugsList from 'components/BugsList/BugsList'
import PageTitle from 'components/PageTitle/PageTitle'
import { useState } from 'react'
import { useAppSelector } from 'redux/hooks'

type Props = {}

const BugsPage = (props: Props) => {
    const bugsArray = useAppSelector((state) => state.bugs)
    const [selectedFilter, setSelectedFilter] = useState('0')
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFilter(e.target.value)
    }

    return (
        <>
            <PageTitle>La lista dei bug</PageTitle>
            <Box display={'flex'} justifyContent={'center'}>
                <Typography variant="h5" textAlign={'center'}>
                    Filtra per la priorità
                </Typography>
                <select value={selectedFilter} onChange={handleChange}>
                    <option value="0">All</option>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                </select>
            </Box>

            <BugsList
                bugsArray={
                    selectedFilter === '0'
                        ? bugsArray
                        : bugsArray.filter(
                              (bug) => bug.priority === Number(selectedFilter)
                          )
                }
            />
        </>
    )
}

export default BugsPage
