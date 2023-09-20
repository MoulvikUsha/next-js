import getUsers from "../../../../service/getUsers"

export default async function Page(props) {
    const getUserList = getUsers()
    const users = await getUserList
    const currentUser = props.params.userId
    const userDetail = users[currentUser-1]
    return (
        <>
        <h2>user detail page</h2>
        <h4>ID: {userDetail.id}</h4>
        <h4>Name: {userDetail.name}</h4>
        <h4>Email: {userDetail.email}</h4>

        </>
    )
}

// export async function generateStaticParams() {
//     const getUserList = getUsers()
//     const users = await getUserList
//     users?.map((user) => ({
//         userId:user.id.toString()
//     }))
// }