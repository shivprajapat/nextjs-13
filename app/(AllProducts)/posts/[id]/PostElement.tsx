import Image from 'next/image'
import React, { FC } from 'react'

interface IPostElementProps  {
    post:string
}

const PostElement:FC<IPostElementProps> = ({post}:any) => {
  return (
    <div className="card border-0 shadow">
    <div className="card-body">
      <Image src={post.image} alt={post.title} width={500} height={500} blurDataURL="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <h5 className="card-title text-capitalize">{post.title}</h5>
      <p className="card-text">{post.description}</p>
    </div>
  </div>
  )
}

export default PostElement