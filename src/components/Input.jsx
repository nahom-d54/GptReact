import { useState } from "react";

const TextareaAutoResize = (props) => {
    const [height,setHeight] = useState('auto')

    const handleChange = (event) => {
        setHeight('auto')
        setHeight(event.target.scrollHeight + 'px')
    };
    return ( 
        <textarea {...props} style={{height}} onChange={handleChange} />
     );
}
 
export default TextareaAutoResize;