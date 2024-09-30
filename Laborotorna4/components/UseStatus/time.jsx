import React, { useEffect, useState } from "react";

const UseTime = () =>{
    const [data, setData] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setData(new Date()), 1000)
        return () => clearInterval(timer);
    }, [])
    
    return data.toLocaleTimeString();
        
}

export const Time = () =>{
   const time = UseTime()

    return (
        <div style={{textAlign: "center", fontSize:30}}>
            <p>time: {time}</p>
        </div>
    );
}