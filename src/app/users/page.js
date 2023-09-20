async function userList() {
    let response = await fetch('https://dummyjson.com/users')
    response = await response.json()
    return response.users
}

export default async function Loader() {
    let users = await userList()
    return (
        <div>
            User Name List
            {
                users.map((item) => (
                    <div key={item.id}>
                        <h1>{item.id} - {item.firstName} {item.lastName}</h1>
                    </div>
                ))
            }
        </div>
    )
}