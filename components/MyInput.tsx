import { useEffect, useRef } from 'react';

export default function MyInput({ shouldFocus, value, onChange }) {
    const ref = useRef(null);

    useEffect(() => {
        if (shouldFocus) {
            ref.current.focus();
            console.log("hello there");
        }
    }, [shouldFocus]);

    return (
        <input
            ref={ref}
            value={value}
            onChange={onChange}
        />
    );
}
