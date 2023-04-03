import React, {Children} from 'react'

import st from './Navbar.module.css'

function Navblock({children, outStyles, outClass, ...props}) {
    return (
        <div style={outStyles ? outStyles : {}} className={st.block}>
            {Children.map(children, child => {
                if(typeof child === 'object' && !child.props.className) {
                    return React.cloneElement(child, {
                        className: st.item
                    })
                } else {
                    return child
                }
            })}
        </div>
    )
}
export default Navblock