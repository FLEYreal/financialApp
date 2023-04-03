import React from 'react';
import st from './InputLabel.module.css';

function InputLabel({ id, labelName, name, type, value, onChange, placeholder, outStyles, outClass }) {
    if(outStyles) var {label: labelSt, input: inputSt, container: containerSt} = outStyles
    if(outClass) var {label, input, container} = outClass
    return (
        <div style={containerSt} className={container ? container : st.container}>
        <label style={labelSt} htmlFor={id} className={label ? label : st.label}>
            {labelName}
        </label>
        <input
            style={inputSt}
            id={id ? id : ''}
            name={name ? name : ''}
            type={type ? type : ''}
            value={value ? value : ''}
            onChange={onChange ? onChange : ''}
            placeholder={placeholder ? placeholder : ''}
            className={input ? input : st.input}
        />
        </div>
    );
}

InputLabel.defaultProps = {
  placeholder: '',
};

export default InputLabel;

// Little MANUAL:
//
// as for every input in ReactJS you need to just to make useState element and use to update value
//
// there are also props you might need to set input&label up:
//      outStyles - changes styles for elements it's an object and values are
//          "input", "label" and "container". Change styles of any piece of component
//      outClass - same as "outStyles" but changes classes, also, it replaces
//          default styles so be careful
//      labelName - what's in the <label> tag
//
//      any other prop is default html attribute like "value" or "placeholder"
//
// EXAMPLE OF CODE:
//
// const [msg, setMsg] = useState('')
// <InputLabel labelName='The label: ' onChange={e => setMsg(e.target.value)} value={msg} type="text" placeholder="done!"/>
//