import { useEffect, useState } from 'react'
import Description from '../Description/Description'
import Feedback from '../Feedback/Feedback'
import Options from '../Options/Options'
import Notification from '../Notification/Notification'

function App() {
  const [values, setValues] = useState(() => {
    const savedFeedback = localStorage.getItem("saved-feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    }
  });

  const updateFeedback = feedbackType => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1
    })
  }

  const totalFeedback = values.good + values.neutral + values.bad;

  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  const handleReset = () => {
    setValues({ good: 0, neutral: 0, bad: 0 })
  }

  useEffect(() => {
    localStorage.setItem('saved-feedback', JSON.stringify(values))
  }, [values])
  return (
    <>
      <Description />
      <Options onFeedback={updateFeedback} onReset={handleReset} total={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback values={values} total={totalFeedback} positive={positiveFeedback} />
      ) : (
        <Notification />
      )
      }
    </>
  )
}
export default App
