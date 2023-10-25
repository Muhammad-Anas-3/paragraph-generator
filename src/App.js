import './App.css';
import Navbar from './Components/Navbar';
import { React, useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0)
  const [paragraph, setParagraph] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    if (count > data.length) {
      alert('The amount is not available please short the amount')
      return
    }
    if (count <= 0) {
      alert('please enter a valid amount')
      return
    }
    setParagraph(data.slice(0, count))
  }

  return (
    <>
      <Navbar />
      <section className="container">
        <form onSubmit={handleSubmit} className='form-data'>
          <label htmlFor="onSubmit" className='label'><h3>Generate Paragraph:</h3></label>
          <input type="number" value={count} name='amount' onChange={(e) => setCount(e.target.value)} />
          <button className='btn'>Generate</button>
        </form>
      </section>
      <section className="paragraph-container">
        {paragraph.map((para, index) => {
          return <p key={index} className='paragraph'>{para}</p>
        })}
      </section>
    </>
  );
}

export default App;
