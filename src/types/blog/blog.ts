export interface IBlog {
    id: string,
    title: string,
    content: string,
    picture: string,
    status: string,
    authorId: string,
    createdAt: string,
    updatedAt: string,
    author: {
        Admin: {
            name?: string,
            email?: string,
        }
    }
}