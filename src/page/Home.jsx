import React from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'

export default function Home() {
    // const navigate  =useNavigate();
    // const location = useLocation();
    const baseUrl = window.location.origin;
    console.log(baseUrl,'navigate')
  return (
    <div className="iframe-container">
        <h2 className='text-center font-semibold'>You have an Iframe in Another Iframe</h2>
    <iframe 
      src={`${baseUrl}/dashboard`}
      title="Example Site" 
    //   width="600" 
    //   height="400" 
      style={{ border: "none" }} 
      allowFullScreen
      className='w-full h-[90vh]'
    ></iframe>
  </div>
  )
}
