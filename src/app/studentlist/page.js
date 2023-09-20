import Link from "next/link";

export default function studentlist() {
    const students = ["Anil", "Sam", "Peter", "Burce"];
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {
                    students.map((user) => {
                        return (
                            <li key={user}>
                                {<Link href={`/studentlist/${user}`}>{user}</Link>}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}