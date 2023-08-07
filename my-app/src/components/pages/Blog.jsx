import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/blog/1">Part One</Link>
        </li>
        <li>
          <Link to="/blog/2">Part Two</Link>
        </li>
      </ul>
    </div>
  );
}
