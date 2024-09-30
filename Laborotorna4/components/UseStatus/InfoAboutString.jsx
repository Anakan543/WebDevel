import React, { useEffect, useState } from "react";

const UseInfoAboutString= (numbers) => {
    const [sum, setSum] = useState(0);
    useEffect(() => {
        let total = 0;

        for(let item of numbers){
            const num = parseInt(item, 10);
            if(!isNaN(num)){
                total += num;
            }
        }
        setSum(total);
    }, [numbers])
    return sum
}

export const InfoAboutString = (state) => {
    const sum = UseInfoAboutString(state.numbers);
    useEffect(() => {
        console.log("sum - " + sum);
    }, [sum]);
    
    return null;
}