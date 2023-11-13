import { useState } from 'react';
export default function Counting() {
    const [values, setValues] = useState(0);

    function handleClickMinus() {
        if (values > 0) {
            setValues(values - 1);
        } else if (values === 0) {
            setValues("Done!");
        }
    }
    function handleClickPlus() {
        if (values < 10) {
            setValues(values + 1);
        } else if (values === 10) {
            setValues("Done!");
        }
    }
    function handleClickReset() {
        setValues(0);
    }
    return (
        <>
            <button onClick={handleClickMinus}> - </button>
            <h2>{values}</h2>
            <button onClick={handleClickPlus}> + </button>
            <br />
            <button onClick={handleClickReset}> Reset! </button>
        </>
    );
}