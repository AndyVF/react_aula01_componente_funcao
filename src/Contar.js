import React, { useState } from "react"

export default function Contador() {
    const [num, setNum] = useState(0);

      return(
          <div className= 'contar'>
              <h1>Contador</h1>
              <h2>Você clicou {num} vezes</h2>
              <button onClick={() => setNum(num + 1)}>Incremente</button>
              <br/><br/>
              <button onClick={() => setNum(num - 1 )}>Decremente</button>
          </div>
      )
}