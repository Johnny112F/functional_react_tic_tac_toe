const style = {
background: "pink",
border: "2px solid green",
fontSize: "30px",
fontWeight: "800",
cursor: "pointer",
outline: "none",
}

function Square({ value, onClick }){
  return (
    <button style={style} className="square" onClick={onClick}>
      {value}
    </button>
  )
}

export default Square;