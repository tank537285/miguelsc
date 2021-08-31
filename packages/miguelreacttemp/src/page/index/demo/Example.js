import React, {useCallback, useMemo, useState } from 'react';

const Example=(props) => {
    const [count, setCount] = useState(0);

    const isEvenNumber = useMemo(() => {
        console.log(2)
        return count % 2 === 0;
    }, [count]);

    const onClick = useCallback(() => {
        console.log(1)
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <div>{count} is {isEvenNumber?'even':'odd'} number</div>
            <button onClick={onClick}>aa</button>
        </div>
    );
};
export default Example