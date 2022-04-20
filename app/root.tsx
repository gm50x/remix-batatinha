import * as React from 'react'
import {Scripts} from 'remix'

function App() {
  const [count, setCount] = React.useState(0)
  return (
    <html>
      <head>
        <title>Batatinha Teste</title>
      </head>
      <body>
        <p>Remix Batatinha</p>
        <button onClick={() => setCount(c => c + 1)}>{count}</button>
        <Scripts /> 
      </body>
    </html>
  )
}

export default App