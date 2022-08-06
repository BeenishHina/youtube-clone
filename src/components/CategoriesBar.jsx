import React, { useState } from 'react';
import './CategoriesBar.css'
const keywords = [
    'All',
    'React js',
    'JavaScript',
    'C++',
    'Computers',
    'Music',
    'Pakistani dramas',
    'Art',
    'React Native',
    'Node js',
    'Game shows'
]
function CategoriesBar() {
    const[activeElement, setActiveElement] = useState('All');
    const handleClick = (value)=>{
        setActiveElement(value);
    }
  return (
    <div className='CategoriesBar'>
      {keywords.map((value,i)=>(
        <span
        onClick={()=>setActiveElement(value)}
        key={i}
        className={activeElement === value ? 'active' : ''}>{value}</span>
      ))}
    </div>
  )
}

export default CategoriesBar
