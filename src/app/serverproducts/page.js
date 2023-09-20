import Product from "../serverproducts/products"

async function productList() {
    let data = await fetch('https://dummyjson.com/products')
    data = await data.json()
    return data.products
}

export default async function ServerProduct() {
    let products = await productList()
    return (
        <div>
            <h1>Product List</h1>
            <br />
            {
                products?.map((product) => (
                    <>
                        <h4 key={product.id}>{product.title}</h4>
                        <Product price={product.price} />
                        <br />
                    </>
                ))
            }
        </div>
    )
}