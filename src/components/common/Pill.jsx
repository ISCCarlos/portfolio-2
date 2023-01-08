import React from 'react'

const Pill = ({ name, icon, color }) => {
  return (
    <button type="button" class="btn btn-primary" style={{
      backgroundColor: color,
      borderColor: color,
      color: 'black',
      marginBottom: '0px',
      marginTop: '0px'
    }}>
      <img src={icon} alt={name} />
      <p className="h6">{name}</p>
    </button >
  )
}

export default Pill;