import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function GitHub() {
    
    const [data, setData] = useState([])

    useEffect(()=>{
       fetch('https://api.github.com/users/ankitmaurya-12')
       .then(response=> response.json())
       .then(data =>{
        console.log(data)
        setData(data)
       })
    },[])


  return (
    <>
    <div class=" flex items-center justify-center m-10 mb-20">
   
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 p-4">
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 shadow-lg" src={data.avatar_url} alt={data.name}/>
        <h5 className="text-xl font-medium text-gray-900">{data.name}</h5>
        <span className="text-sm mb-2 text-gray-500 dark:text-gray-400">({data.login})</span>
        <span className="mb-1 font-medium text-gray-900">"{data.company}"</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
            {data.bio}
        </div>
        <div className="flex mt-4 space-x-3 md:mt-6">
            <a href={data.html_url} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Follow me</a>
            <a href={data.repos_url} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 rounded-lg lg:px-5 lg:py-2.5 mr-2 focus:outline-none">My Repos</a>
            {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a> */}
        </div>
    </div>
</div>

</div>

    </>
    // <div className='text-center p-4'>
    //     <strong>
    //   Github followers: {data.followers}
    //     </strong>
    //     <img src={data.avatar_url} alt="" srcset="" />
    // </div>
  )
}
