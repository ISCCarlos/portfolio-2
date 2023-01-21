import React from 'react'

const MiniPill = ({ name, icon, color }) => {
  return (
    <div style={{
      backgroundColor: color,
      borderColor: color,
      width: 'auto',
      display: 'inline-block',
      color: "white",
      padding: "10px",
      borderRadius: "10px",
      fontSize: '10px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      margin: '2px'
    }}>
      <img src={icon} alt={name} width='auto' height='20px' />
      <span sx={{ margin: '100px' }}>{name}</span>
    </div >
  )
}

export default MiniPill