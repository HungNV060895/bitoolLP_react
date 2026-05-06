import React, { useEffect, useState} from "react";

const UseEfComponent = () => {
    const [toTop, setToTop] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [countDown, setCountDown] = useState(10);
    const [file, setFile] = useState<string>('');


    useEffect(() => {
        const handleScroll = () => {
            setToTop(window.scrollY > 100);
        }

        window.addEventListener('scroll', handleScroll);
        console.log('mount');


        //Cleanup function
        return () => {
            console.log('Cleanup');
            window.removeEventListener('scroll', handleScroll);
        }
    },[toTop])


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[windowWidth, windowHeight])


    useEffect(() => {
        const timerID = setInterval(() => {
            setCountDown(countDown - 1);
            if (countDown === 0) {
                setCountDown(0);
                clearInterval(timerID);
            }
        }, 1000);

        return () => clearInterval(timerID);
    },[countDown])


    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileNameEl = e.target.files?.[0];
        if (!fileNameEl) return;
        setFile(URL.createObjectURL(fileNameEl));
    }

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(file);
        }
    },[file])

    return (
        <>
            <div className="block-test" style={{height:'100vh'}}>
                <h1 style={{fontSize: '100px', textAlign: 'center'}}>learn useEffect React</h1>
                <div className="backTop" style={{display: toTop ? 'block' : 'none'}}></div>
                <div>
                    <p>Window Width: {windowWidth}</p>
                    <p>Window Height: {windowHeight}</p>
                </div>
                <div>
                    <p style={{fontSize: '100px'}}>CountDown: {countDown}</p>
                </div>
                <div>
                    <input type="file" onChange={handleUpload} />
                    <div className="src">
                        {
                            file && (
                                <img src={file} alt="" />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseEfComponent;
