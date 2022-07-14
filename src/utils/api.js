const baseUrl="https://fakestoreapi.com";
export const api={
    getProduct:`${baseUrl}/products`,
    getProductId:(id)=>`${baseUrl}/products/${id}`,
    getSortProduct:(type)=>`${baseUrl}/products?sort=${type}`,
    getCategory:`${baseUrl}/products/categories`,
    getCategoryByName:(categoryName)=>`${baseUrl}/products/categories/${categoryName}`
    
}