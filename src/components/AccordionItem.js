import React from 'react'

const AccordionItem = ({section,showItem,handlesections}) => {


  return (
       <div className="flex flex-col justify-center items-center m-6 bg-gray-300 shadow-md rounded-xl">
                    <div className="flex justify-between w-full p-2 h-9" onClick={handlesections}>
                      <h1>{section.title}</h1>
                      <p>⬇️</p>
                    </div>
                    <div>
                    {showItem && <p className='bg-pink-100 m-2 p-2 w-full'>{section.content}</p>}
                    </div>
                      
        </div>
   
  )
}

export default AccordionItem
