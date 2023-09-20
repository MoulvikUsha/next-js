'use client'
export default function Products(props) {

    return (
        <div>
            <button onClick={() => alert(props.price)}>Check Price</button>
        </div>
    )
}