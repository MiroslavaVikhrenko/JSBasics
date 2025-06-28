const products = [{name: "laptop", isInStock: true}, {name: "mouse", isInStock: false}]
console.log(products)

const movies = ["Shrek", "Mermaid", ["value1"]]

const numbers = [10, 20]

const array = [20, "str", {name: "Alice", age: 10}]

// typeof // tells you type of var

const instockProducts = products.filter((product) => product.isInStock)
const ProductsOutOfStock = products.filter((product, index) =>  { 
    console.log(index) 
    return !product.isInStock 
})

console.log(instockProducts)
console.log(ProductsOutOfStock)