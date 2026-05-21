
import {memo} from 'react';

interface ContentProps {
    //count: number;
    increase: () => void;
}

const Content = ({ increase }: ContentProps) => {
    console.log('Re-render');
    return (
        <>
            <h3>Số count nhận được:</h3>
            <button className=" border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ..." onClick={increase}>Click Me</button>
        </>
    )
}

export default memo(Content);