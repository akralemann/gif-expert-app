import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball'])

    const onAddCategory = ( onNewCategory ) => {

        if( categories.includes(onNewCategory)) return;

        setCategories([onNewCategory, ...categories])

    }

  return (
    <>
        <h1>GifExpertApp</h1>
       
        <AddCategory 
            onNewCategory={ onAddCategory }
        />


        
        { 
            categories.map( category => (
                    <GifGrid key={ category } category={ category } />
                ) 
            )
        }
        
    </>
  )
}
