import { useState } from "react"

export const useCounter = () => {
    const [count, setCount] = useState(1)

    const increaseBy = (value: number) => {
        setCount(Math.max(count + value, 0));
    }

    return {
        // Properties 
        count,
        // Acciones que quiero usar de este hook para que otros componentes lo puedan usar 
        increaseBy,
    }
}