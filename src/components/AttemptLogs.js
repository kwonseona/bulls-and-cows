const AttemptLogs = (props) => {
  return (
    <>
      <h2>기록</h2>
      <ol>
        {
          props.logs.map((item, index) => {
            return (
              <li key={`${item}_${index}`}>
                {item.toString()}
              </li>
            )
          })
        }
      </ol>
    </>
  )
}

export default AttemptLogs