import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CreateModal from "../components/modals/CreateModal";
import { useState } from "react";
import toast from 'react-hot-toast';
import { useProduct } from "../contexts/ProductContext";

const ProductDetails = () => {
  const {products, deleteProduct, editProduct} = useProduct()

  const navigate = useNavigate();

  const { id } = useParams();
  const product = products.find((item) => {
    return item.id === Number(id);
  });


  const {title, price, image} = product;


  const [editedTitle, setEditedTitle] = useState(title);
  const [editedPrice, setEditedPrice] = useState(price);


  const[showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const handleEditSubmit = (e) => {
    e.preventDefault();
  
    const updatedProduct = {
      title: editedTitle,
      price: editedPrice,
    };
  
    editProduct(Number(id), updatedProduct);
    handleCloseModal()
    toast.success("Product Edited Successfully");
  };
  


  const handleDelete = () => {
    deleteProduct(Number(id));

    toast.success(`Prodcuct Deleted with Id No: ${id}`);
    navigate('/')
  }
  
  return (

    <div>
      <Header create={false}/>
      <section className="pt-[450px] md:pt-32 pb-[400px] md:pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        {/* image and text wrapper */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-xs" src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
            <div className="text-2xl text-red-500 font-medium mb-6">$ {price}</div>     

            <div className="buttons">
              <button onClick={handleOpenModal} className='bg-primary mx-2 py-4 px-8 text-white rounded-full'>Edit</button>
              <button onClick={handleDelete} className='bg-primary mx-2 py-4 px-8 text-white rounded-full'>Delete</button>

              <CreateModal isVisible={showModal} onClose={handleCloseModal}>
              <div>
                    <p className='text-primary font-bold text-2xl p-2 rounded-full mt-2'>Check the Product Details</p>
                    <div className='ml-7 text-left'>
                        <form onSubmit={handleEditSubmit}>
                            <div className='mt-2'>
                                <label className='text-primary text-left m-7 font-semibold' >Product Title</label>
                                <input  type='text' value={editedTitle} onChange={(e) => {
                                  setEditedTitle(e.target.value)
                                }} placeholder='Product Title' className='ml-4 border-2 p-2 rounded-md text-gray-700'/><br/>
                            </div>

                            <div className='mt-2'>
                                <label className='text-primary text-left m-7 font-semibold' >Product Price</label>
                                <input  type='text' value={editedPrice} onChange={(e) => {
                                  setEditedPrice(e.target.value)
                                }} placeholder='Product Price' className='ml-4 border-2 p-2 rounded-md text-gray-700'/><br/>
                            </div>

                            <div className='w-full flex flex-col justify-center items-center mt-7'>
                                <button type="submit" className='bg-primary text-white p-3 m-2 rounded-full'>Edit Product</button>
                            </div>
                        </form>
                    </div>
                </div>
              </CreateModal>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default ProductDetails;
