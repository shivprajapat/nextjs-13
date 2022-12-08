// "use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import PostElement from "./PostElement";
const fetchPost = async ({ id }: { id: string }) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`,{
    // next:{
    //   revalidate:10
    // }
    // cache: 'no-store' 
  });
  const posts = await response.json();
  return posts;
};

const Posts = async ({ params, searchParams }: any) => {
  const post = await fetchPost({ id: params.id });
  console.log(post)
  return (
    <div className="container mt-5">
      <div className="row">
          <div className="col-lg-9 mx-auto">
            <PostElement post={post}/>
          </div>
      </div>
    </div>
  );
};

export default Posts;
