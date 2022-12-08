// "use client";

import Link from "next/link";
import React from "react";
const fetchPosts = async () => {
  const response = await fetch(`https://fakestoreapi.com/products`);
  const posts = await response.json();
  return posts;
};

const Posts = async () => {
  const posts = await fetchPosts();
  // if(posts.length > 0) {
  //   throw new Error("No posts found");
  // }

  console.log(posts);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="row">
          {posts?.slice(0, 10).map((post: any) => {
            const { id, title, category, price } = post;
            return (
              <div className="col-lg-4 col-md-6  d-flex mb-4" key={id}>
                <div className="card border-0 shadow w-100">
                  <h5>
                    <span className="badge btn-lg mt-3 ms-3 bg-warning">
                      {category}
                    </span>
                  </h5>
                  <div className="d-flex justify-content-between px-3 align-items-center">
                    <h5>
                      <span className="badge btn-lg bg-danger">{id}</span>
                    </h5>
                    <h5>
                      <span className="badge btn-lg bg-success">{price}</span>
                    </h5>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title card-title text-capitalize">
                      {title}
                    </h5>
                    <Link href={`/posts/${id}`} className="btn btn-primary">
                      View
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
