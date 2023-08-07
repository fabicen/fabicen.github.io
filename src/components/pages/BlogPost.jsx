import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const param = useParams();
  return <div>Blog Post {param.id} </div>;
}
