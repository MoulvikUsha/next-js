import Link from "next/link"
import getUsers from "../../../service/getUsers"

export default async function Users() {
    const getUserList = getUsers()
    const users = await getUserList
    return (
        <div>
            User List
            {
                users.map((item) => (
                    <div key={item.id}>
                        <Link href={`/userlist/${item.id}`}>{item.id} - {item.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}