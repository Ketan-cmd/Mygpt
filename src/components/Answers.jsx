import React from 'react'

const Answers = ({ans,key}) => {
  return (
    <>
    {ans.map((answer, index) => (
      <div key={index} className="answer" >
        <p>{answer}</p>
      </div>
    ))}
    </>
  )
}

export default Answers