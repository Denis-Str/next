export default function CounterView({count, handleChangeCounter}) {
  return (
    <div>
      <span>Количество: </span>
      <span className="btn-group btn-group-sm pl-2">
        <button className={`btn btn-secondary ${count <= 1 ? 'disabled' : ''}`} onClick={() => handleChangeCounter('reduce')}>-</button>
        <span className="btn btn-outline-primary">{count}</span>
        <button className={`btn btn-secondary ${count >= 20 ? 'disabled' : ''}`} onClick={() => handleChangeCounter('increase')}>+</button>
      </span>
    </div>
  )
}
