import { useState ,useRef, useEffect } from "react";

const UseRefComponent = () => {
    const [count, setCount] = useState(60);
    const timerID = useRef<number | null>(null);
    const prev = useRef<number>(0);


    useEffect(() => {
        prev.current = count;
    },[count])

    const handleStart = () => {
        if(timerID.current !== null){

        }else{
            timerID.current = setInterval(() => {
                setCount(prev => prev - 1);
            }, 1000)
        }

        console.log(timerID.current);
    }
    const handleStop = () => {
        if (timerID.current !== null) {
            clearInterval(timerID.current);
            timerID.current = null;
        }
    }

    console.log(count, prev.current);


    return (
        <>
            <div className="block-test" style={{height:'100vh'}}>
                <h1 style={{fontSize: '100px', textAlign: 'center'}}>learn useRef React</h1>
                <h2>{count}</h2>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
            </div>
        </>
    )
}

export default UseRefComponent;
