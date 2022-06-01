import React from 'react'
import Card from './Card'
import data from './data'
// {image,title,text,tags}
const Grid = () => {
//   console.log("grid created");
    return (
      
    <div className='grid grid-cols-3 md:grid-col-2 xl:grid-col-4 gap-4 overflow-auto h-[100%] scrollbar scrollbar-thumb-gray-100 scrollbar-track-gray-900'>
        {data.map((e)=>{
            return (

                <Card key ={e.id} title={e.title} text = {e.text} tags = {e.tags} image = {e.image} ></Card>
            )
        })}
    </div>
  )
}

export default Grid