import React, { useState, useEffect } from 'react';

const ButtonFunction = () => {
    const [count, setCount] = useState(0)
    // const [count2, setCount2] = useState(0)

    useEffect(() => {
        setTimeout(() => setCount((prev) => prev + 1), 500)
        document.title = `${count} marta bosildi`
    }, [count])

    // const handleClick = () => {
    //     setCount((prev) => prev + 1)
    // }

    return (
        <div>
            <h3>{count} marta bosildi</h3>
            {/* <h3>{count2} marta bosildi</h3> */}
            <div className={`button`}>
                +
            </div>
        </div>
    )
}

export default ButtonFunction