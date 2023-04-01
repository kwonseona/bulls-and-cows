const AnswerNumber = (props) => {
  return (
    <header style={{ marginBottom: '16px'}}>
      <span>{props.isSuccess ? props.number : '----'}</span>
    </header>
  )
}

export default AnswerNumber