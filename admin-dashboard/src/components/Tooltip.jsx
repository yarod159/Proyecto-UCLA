import React from 'react'

function Tooltip({ row }) {
  return (
    <div style={{ position: "absolute", bottom: "-50px", left: "0", zIndex: 10 }}>
      {row.nombre}
    </div>
  )
}

export default Tooltip