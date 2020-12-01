import { Link } from 'gatsby';
import React from 'react';

export default function Home() {
  return (
    <div>
      <p>Hello world!</p>
      <p>
        <Link to="/all">Go to All</Link>
      </p>
    </div>
  );
}
