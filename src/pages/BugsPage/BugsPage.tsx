import BugsList from 'components/BugsList/BugsList'
import PageTitle from 'components/PageTitle/PageTitle'
import { useAppSelector } from 'redux/hooks'

type Props = {}

const BugsPage = (props: Props) => {
    const bugsArray = useAppSelector((state) => state.bugs)
    return (
        <>
            <PageTitle>La lista dei bug</PageTitle>
            <BugsList bugsArray={bugsArray} />
        </>
    )
}

export default BugsPage
