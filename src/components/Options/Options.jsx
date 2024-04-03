import css from './Options.module.css'
export default function Options({ onFeedback, onReset, total }) {
  return (
    <div className={css.container}>
      <button className={css.btnGood} onClick={() => onFeedback('good')}>Good</button>
      <button className={css.btnNeurtal} onClick={() => onFeedback('neutral')}>Neutral</button>
      <button className={css.btnBad} onClick={() => onFeedback('bad')}>Bad</button>
      {total > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  )
}
