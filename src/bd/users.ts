export type User = {
    id: number,
    username: string,
    email: string,
    password: string
}

export const users: User[] = [
    {
        id: 1,
        username: "egor",
        email: "egor@example.com",
        password: "password123"
    }
]
