import React from 'react'

const page = async () => {
  await new Promise( resolve => setTimeout(resolve ,  5000));
  return (
    <div>
      this is siddharth loading page example
    </div>
  )
}

export default page