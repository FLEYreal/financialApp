import React, {useEffect, useRef} from 'react'

import st from './Btn.module.css'

function Btn({children, outStyles, title, outClass, ...props}) {
    const refBtn = useRef(null)
    useEffect(() => {
        if(outStyles && outStyles.backgroundColor.split(/[()]/)[1]) {
            const bg = outStyles.backgroundColor.split(/[()]/)[1].split(',')
            let hoverBg = []
            let activeBg = []
            bg.forEach(t => {
                if(Number(t) <= 1) {hoverBg.push(Number(t)); activeBg.push(Number(t))}
                else {
                    if(Number(t) < 100) {hoverBg.push(0); activeBg.push(0)}
                    else {hoverBg.push(Number(t) - 25); activeBg.push(Number(t) - 50);}
                }
    
            })
            hoverBg = `rgba(${hoverBg[0]}, ${hoverBg[1]}, ${hoverBg[2]}, ${hoverBg[3]})`
            activeBg = `rgba(${activeBg[0]}, ${activeBg[1]}, ${activeBg[2]}, ${activeBg[3]})`
            const btnElement = refBtn.current
            if(btnElement.children[0]) {
                btnElement.children[0].addEventListener('mousedown', (e) => {
                    e.stopPropagation()
                })
                btnElement.children[0].addEventListener('mouseup', (e) => {
                    e.stopPropagation()
                })
                btnElement.children[0].addEventListener('mouseover', (e) => {
                    if(!props.pointerEvents) e.target.style.pointerEvents = 'none'
                    e.stopPropagation()
                })
                btnElement.children[0].addEventListener('mouseout', (e) => {
                    e.stopPropagation()
                })
            }
            btnElement.addEventListener('mousedown', (e) => {
                e.target.style.backgroundColor = activeBg
            })
            btnElement.addEventListener('mouseup', (e) => {
                e.target.style.backgroundColor = hoverBg
            })
            btnElement.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = hoverBg
            })
            btnElement.addEventListener('mouseout', (e) => {
                e.target.style.backgroundColor = outStyles.backgroundColor
            })
        }
    }, [])
    return (
        
        <button onClick={props.onClick} style={outStyles} title={title ? title : children} ref={refBtn} className={`${outClass ? outClass : st.btn}`}>
            {children}
        </button>
    )
}
export default Btn;

// Little MANUAL:
//
// just use <Btn>Click!<Btn/> to make a button
//
// there are also props you might need to set modal window up:
//      outStyles - make your own styles for button.
//          if you want to update a background with saving functions
//          then just use syntax: backgroundColor: "rgba(255, 255, 255, 1)".
//      title - when you hover button you might see a little title
//          you can set if you have icon because its innerHTML by default
//      outClass - own className
//
// EXAMPLE OF CODE:
//
// <Btn outStyles={{
//      border: 'none',
//      color: 'white',
//      backgroundColor: 'rgba(232, 26, 26, 1)'
//  }} onClick={() => setModal(true)}>Click here</Btn>
//
//
//
//
//
//