# Accordian

1. Create a Accordion Component and import this component inside the App compoent
2. Accordion Component
   - first we need one list of item (which are need to arrange in accordion section)
   - Create a sample sectionDetails list of objects contains title and content
   - Inside Accordion Component
       - Iterate over the sectionDetails & passing the section(iterate item) and index as props - Access the props in Accordion Component by destructure it.
       - Use the destructured items in accordion component
       - ** now create the state variable for showing accordion items based on index state ** -
       - pass the showIndex as prop and use showindex and display the section content - if showindex is not null then show content.
       # create the handler function for togggle bewteen the show & hide the content based on index
        - if index === showIndex -> we are trying to hide the section content clicking on same section , if index === showIndex means return the "null" other vise index !== showIndex return index value to the showIndex.
        - setShowIndex(index === showIndex ? null: index)
        # and make the prop we are passing showIndex based on the index value 
            - showIndex and index both are same then pass true or false
            - {showIndex === index ? true : false}
