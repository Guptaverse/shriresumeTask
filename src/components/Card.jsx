import React from 'react'
// {image,title,text,tags}
const Card = ({title,text,tags,image}) => {
    // console.log(e.e.id);
    // const [id,title,text,tags,image] = e.e;
    // const image = '/images/icon1.png';
    // const title = 'UI developer'
    // const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis id dolore temporibus iure corporis harum repudiandae reiciendis tempore facere obcaecati accusantium animi minima, veritatis ea tempora eius officiis quisquam sed!'
    // const tags = ["Full time","part time","half-time"];





  return (
    <div className='w-64 p-4 shadow-lg m-8 grid bg-white rounded-lg'>
        <div className='flex  p-1 drop-shadow-md'>
            <div className="">
            <img className = " flex-1 w-8 text-left" src={image} alt={title} />
            </div>
            <div className="flex-1 dot text-right">...</div>
            </div>
        <div className="content_div">
            <h3 className = "text-left font-bold p-1">{title}</h3>
            <p className='text-sm text-left p-1 mb-4'>{text}</p>
            {tags.map((tagText)=>{
                return (
                    <span className="tag text-sm text-blue-600 bg-sky-500/30 p-1 m-1 rounded "> {tagText} </span>
                )
            })}
            <div className="buttons_div flex mt-4">
                <div className="apply_btn text-white flex-1  bg-blue-600 rounded text-center p-1 m-2">Apply Now</div>
                <div className="msg_btn flex-1 rounded bg-gray-200 p-1 m-2 text-center">Message</div>
            </div>
        </div>
    </div>
  )
}

export default Card;