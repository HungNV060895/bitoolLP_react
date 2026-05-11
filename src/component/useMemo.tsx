import { useEffect, memo, useState } from "react";
import Content from "./content";

const UseMemoComponent = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }


    return (
        <>
            <div className="block-test" style={{height:'100vh'}}>
                <h1 style={{fontSize: '100px', textAlign: 'center'}}>learn react.memo() React</h1>
                <Content />
                {count}
                <button onClick={increase}>Click Me</button>
            </div>
        </>
    )
}

export default UseMemoComponent;
