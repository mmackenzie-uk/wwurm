
"use client"

export default function InputNumber({ value,  color, increment, decrement }: 
    { 
        value: number,
        color?: string,
        increment: () => void,
        decrement: () => void,
    }) {

    const handleChange = () => {}; // to clear react error

    const btnColor = color ? color : "#282828";
    return (
        <div className={`btn-qty-flex`}>
           <div className="down-arrow cm-font-media-play flip" style={{color: btnColor}} onClick={decrement}></div>
                <input 
                    type="number" 
                    className="input-btn-qty" 
                    value={value} 
                    onChange={handleChange} 
                    style={{color: btnColor}}
                /> 
            <div className="up-arrow cm-font-media-play" style={{color: btnColor}} onClick={increment}></div>
        </div>
    );
}



  