import { useEffect, useState, useCallback, FC } from 'react';

export const Counter: FC = () => {
    const [secondsElapsed, setSecondsElapsed] = useState(0);

    const incrementCount = useCallback(() => {
        setSecondsElapsed((prevCount) => prevCount + 1);
    }, [setSecondsElapsed]);

    useEffect(() => {
        let timer = null;

        const createTimer = () => setTimeout(() => {
            incrementCount();

            if (timer) clearTimeout(timer);

            timer = createTimer();
        }, 3000);

        timer = createTimer();

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, []);

    return (
        <span>
            Seconds elapsed: {secondsElapsed}
        </span>
    );
};
