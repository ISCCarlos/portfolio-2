import React from 'react'

const Pill = ({ name, icon, color }) => {
  return (
    <div className='pill-container' style={{
      backgroundColor: color,
      borderColor: color,
      color: "white",
      padding: "10px",
      borderRadius: "10px",
    }}>
      <img src={icon} alt={name} width='auto' height='20px' />
      <span>{name}</span>
    </div >
  )
}

export default Pill;