import React, { createContext, useState, useEffect, useContext } from "react";

export const ProductContext = createContext();

export const useProduct = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    const productsWithUpdatedIds = updateProductIds(updatedProducts);
    setProducts(productsWithUpdatedIds);
  };
  
  const updateProductIds = (updatedProducts) => {
    return updatedProducts.map((product, index) => ({
      ...product,
      id: index + 1,
    }));
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    const productsWithUpdatedIds = updateProductIds(updatedProducts);
    setProducts(productsWithUpdatedIds);
  };

  const editProduct = (productId, updatedProductData) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, ...updatedProductData };
      }
      return product;
    });
  
    const productsWithUpdatedIds = updateProductIds(updatedProducts);
    setProducts(productsWithUpdatedIds);
  };
  

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct, editProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
