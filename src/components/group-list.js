import React from 'react';

export default ({ elements }) => (
  <div className="group-list">
    <h3>Group full list</h3>
    <div style={{ overflowY: "scroll", maxHeight: "200px" }}>
      <ol>
        {elements && elements.map(element => <li key={element}>{element}</li>)}
      </ol>
    </div>
  </div>
)
