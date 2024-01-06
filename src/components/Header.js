import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import CreateModal from "./modals/CreateModal";
import { useProduct } from "../contexts/ProductContext";
import toast from "react-hot-toast";

const Header = ({create}) => {

  const {addProduct} = useProduct();


  // header state
  const [isActive, setIsActive] = useState(false);

  const[showModal, setShowModal] = useState(false);
  // const [newProduct, setNewProduct] = useState({});

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSumbit = (e) => {
    e.preventDefault();

  addProduct({
    image: image,
    category: category,
    title: title,
    price: price,
});

  toast.success("New Product Added");

  setShowModal(!showModal);

    
  }

  function handleCategory(e) {
    setCategory(e.target.value);
  }

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handlePrice(e) {
    setPrice(e.target.value);
  }

  function handleImage(e) {
    setImage(e.target.value)
    
  }

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 lg:px-8 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div className="w-[40px]">
            <img src={Logo} alt="" />
          </div>
        </Link>

        {/* create */}
        {
          create? <div
          onClick={() => setShowModal(!showModal)}
          className="cursor-pointer flex relative"
        >
          <div className="bg-primary w-28 text-center p-3 rounded-full text-white">
            <button>Create</button>
            <CreateModal isVisible={showModal} >

            <div>
                <p className='text-primary font-bold text-2xl p-2 rounded-full mt-2'>Fill in the Product Details</p>
                <div className='ml-7 text-left'>
                    <form  onSubmit={handleSumbit} >
                        <div className='mt-2'>
                            <label className='text-primary text-left m-7 font-semibold' >Product Category</label>
                            <input type='text' value={category} placeholder='Product Category' className='ml-4 border-2 p-2 rounded-md text-gray-700' onChange={handleCategory}/><br/>
                        </div>

                        <div className='mt-2'>
                            <label className='text-primary text-left m-7 font-semibold' >Product Title</label>
                            <input type='text' value={title} placeholder='Product Title' className='ml-4 border-2 p-2 rounded-md text-gray-700' onChange={handleTitle}/><br/>
                        </div>

                        <div className='mt-2'>
                            <label className='text-primary text-left m-7 font-semibold' >Product Price</label>
                            <input type='text' value={price} placeholder='Product Price' className='ml-4 border-2 p-2 rounded-md text-gray-700' onChange={handlePrice}/><br/>
                        </div>

                        <div className='mt-2'>
                            <label className='text-primary text-left m-7 font-semibold' >Product Picture Link</label>
                            <input type='text' value={image} placeholder='Product Picture Link' className='ml-4 border-2 p-2 rounded-md text-gray-700' onChange={handleImage}/><br/>
                        </div>

                        <div className='w-full flex flex-col justify-center items-center lg:justify-around lg:flex-row mt-7'>
                            <button type="submit" className='bg-primary text-white p-3 m-2 rounded-full'>Add Product</button>
                        </div>
                    </form>
                </div>
                </div>

            </CreateModal>
          </div>
        </div> : <div></div>
        }
      </div>
    </header>
  );
};

export default Header;
