import './layout.css';

import { Link } from 'gatsby';
import React from 'react';

export default ({ children }) => (
  <div>
    <header>
      <h2>Gatsby rocks!</h2>
      <Link to="/">Home</Link>
      <Link to="/content">Content</Link>
      <Link to="/about">About</Link>
    </header>
    <main>{children}</main>
  </div>
)
