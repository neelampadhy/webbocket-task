import React from 'react'

const CreateModal = ({isVisible, onClose, children}) => {
    if(!isVisible) return;

    const handleClose = (e) => {
        if(e.target.id === "box") onClose()
    }

    const handleCloseButtonClick = () => {
        onClose();
    };
    

  return (
    <div>
      <div id="box" className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' onClick={handleClose}>
        <div className='lg:w-[600px] w-[340px] flex flex-col'>
            <button id="closebutton" className='font-bold text-2xl text-right text-primary' onClick={handleCloseButtonClick}>X</button>
            <div className='bg-white p-2 lg:h-[380px] h-[550px] rounded-2xl' onClick={(e) => {
                e.stopPropagation();
            }}>
                {children}
            </div>
        </div>
      </div>
    </div>
  )
}

export default CreateModal