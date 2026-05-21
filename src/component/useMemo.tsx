import { useEffect, memo, useState, useCallback } from "react";
import Content from "./content";

interface Props {
    //count: number;
    increase: () => void;
}


const UseMemoComponent = (prop: Props) => {
    const [count, setCount] = useState(0);

    // Sử dụng useCallback để memoize hàm increase.
    // Hàm này sẽ chỉ được tạo lại khi các dependency của nó thay đổi.
    // Vì chúng ta dùng functional update cho setCount, không cần 'count' trong dependency array.
    const increase = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []); // Dependency array rỗng nghĩa là hàm sẽ chỉ được tạo một lần duy nhất.


    return (
        <>
            <div className="block-test" style={{height:'100vh'}}>
                <h1 style={{fontSize: '100px', textAlign: 'center'}}>learn react.memo() React</h1>
                <Content increase={increase} />
                {count}
            </div>
        </>
    )
}

export default UseMemoComponent;
