import React from 'react';
import Accordion from './Component/Accordion';

const App = () => {

  const items = [
    {
      title: 't1',
      content: 'c1'
    },
    {
      title: 't2',
      content: 'c2'
    },
    {
      title: 't3',
      content: 'c3'
    }
  ];

  return (
    <div className="App">
      <Accordion items={items}/>
    </div>
  );
}

export default App;
