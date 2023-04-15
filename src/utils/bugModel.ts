export type Bug = {
    id: number
    title: string
    description: string
    priority: string
    state: string
    dateCreation: string
    dateLastChange?: string
}

export const bugsArray: Bug[] = [
    {
        id: 1,
        title: 'Buttone non funziona',
        description: 'mancha hover',
        priority: 'High',
        state: 'pending',
        dateCreation: '11/03/2020',
    },
    {
        id: 2,
        title: 'Buttone non funziona',
        description: 'mancha hover',
        priority: 'High',
        state: 'pending',
        dateCreation: '11/03/2020',
    },
    {
        id: 3,
        title: 'Buttone non funziona',
        description: 'mancha hover',
        priority: 'High',
        state: 'pending',
        dateCreation: '11/03/2020',
    },
]
