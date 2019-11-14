import React from 'react';

export default ({ number, elements }) => (
  <div className="group-box">
    <h4>Group {number}</h4>
    <div>
      <ul>
        {elements && elements.map(element => <li key={element}>{element}</li>)}
      </ul>
    </div>
  </div>
)
