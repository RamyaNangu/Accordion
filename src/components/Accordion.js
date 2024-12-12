import { useState } from "react"
import AccordionItem from "./AccordionItem"


const Accordion = ({sections}) => {
    
    const [showItem,setShowItem] = useState(null)

    const handlesections = (index) =>{
        setShowItem(index === showItem ? null : index)
        
    }

    return(
        <div>
            <div className="flex justify-center">
            <h1 className="text-xl">Accordion</h1>
            </div>
            {sections.map((section,index)=>(
                <AccordionItem key={index} 
                 showItem={showItem === index ? true:false} section={section} handlesections={()=>handlesections(index)} 
            />))}
        </div>
    )
}

export default Accordion