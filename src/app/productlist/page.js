'use client'
import { useState, useEffect } from "react"

export default function Product() {
    const [product, setProduct] = useState([])
    const getProducts = async () => {
        let data = await fetch('https://dummyjson.com/products')
        data = await data.json()
        setProduct(data.products)
    }

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div>
            <h1>Product List</h1>
            <br />
            {
                product.map((product) => (
                    <h4 key={product.id}>{product.id} - {product.title}</h4>
                ))
            }
        </div>
    )
}