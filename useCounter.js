import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (plus = 1) => {
        setCounter (counter + plus)
    }

    const reset = () => {
        setCounter (initialValue)
    }

    const decrement = (minus = 1) => {
        if (counter === 0) return;
        setCounter (counter - minus)
    }

  return {
        counter,
        action: {
            increment,
            reset,
            decrement,
        }
  }
}
