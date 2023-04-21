export default function CounterView({counter, handleChangeCounter}) {
  return (
    <div>
      <span>Количество: </span>
      <span className="btn-group btn-group-sm pl-2">
        <button className={`btn btn-secondary ${counter <= 1 ? 'disabled' : ''}`} onClick={() => handleChangeCounter('reduce')}>-</button>
        <span className="btn btn-outline-primary">{counter}</span>
        <button className={`btn btn-secondary ${counter >= 20 ? 'disabled' : ''}`} onClick={() => handleChangeCounter('increase')}>+</button>
      </span>
    </div>
  )
}
