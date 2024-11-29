'use client'
import { count } from "console"
import { useState } from "react"

export default function Counter() {
    const [count,setCount] = useState(0);
  return (
    <div className="size">
    <button onClick={()=>setCount(count+1)}>
        +
    </button>

    <button onClick={()=>setCount(count-1)}>
        -
    </button>
    {count}
    </div>
  )
}