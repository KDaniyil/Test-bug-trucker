export type Bug = {
    id: string
    title: string
    description: string
    creator: string
    priority: number
    state: string
    dateCreation: string
    dateLastChange?: string
}

type ColorsType = {
    [id: number]: string
}
export const COLORS: ColorsType = {
    1: 'red',
    2: 'orange',
    3: 'green',
}

export const getBugsObject = (array: Bug[]) =>
    array.reduce(
        (object, bug) => ({
            ...object,
            [bug.id]: bug,
        }),
        {}
    )
