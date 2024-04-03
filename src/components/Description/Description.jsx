import css from './Description.module.css'
export default function Description() {
  return (
    <div>
      <h2 className={css.title}>Sip Happens Cafe</h2>
      <p className={css.text}>Please leave your feedback about our service by selecting one of the options below</p>
    </div>
  )
}