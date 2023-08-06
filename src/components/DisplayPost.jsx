import React from 'react'
import deflogo from "../logo.svg"

const DisplayPost = (props) => {
  const {logo, image, prompt, user} = props.post;

  return (
    <div className="relative rounded-xl group shadow-card hover:shadow-cardhover card">
      <img
      className='object-cover w-full h-auto rounded-xl'
      src={image}
      alt={prompt}
      />

      <div className={"group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#fff] m-2 p-4 rounded-md"}>
          <div className="d-flex">
            <img className='mr-2 logo' src={logo? logo: deflogo} alt={prompt} />
            <div>
              <span style={{color: "#888",fontSize: "12px", textTransform: "lowercase"}}>{user}</span>
              <p className={"line-clamp-1"} style={{"fontSize": "14px"}}>{prompt}</p>
            </div>
          </div>
      </div>

    </div>
  )
}

export default DisplayPost
