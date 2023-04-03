import st from './Navbar.module.css'

function Navbar({children, outStyles, outClass, ...props}) {
    if(outClass) var {navbar, container} = outClass
    if(outStyles) var {navbar: navbarSt, container: containerSt} = outStyles
    return (
        <div style={navbarSt ? navbarSt : {}} className={navbar ? navbar : st.navbar}>
            <div style={containerSt ? containerSt : {}} className={container ? container : st.container}>
            {children}
            </div>
        </div>
    )
}
export default Navbar

// Little MANUAL:
//
// you need also Navblock component for perfect work!
// NavblockS are divs you use to make separate blocks in navbar.
// For example 1st Navblock is for icon of your website and 2nd for menu
//
// there are also props you might need to set navbar up:
//      outStyles - changes styles for elements it's an object and values are
//          "navbar" and "container". Change styles of any piece of component
//      outClass - same as "outStyles" but changes classes, also, it replaces
//          default styles so be careful
//
// EXAMPLE OF CODE:
//
// <Navbar>
//    <Navblock><a href='/'>Menu</a><a href='/'>About</a><a href='/'>Support</a></Navblock>
//    <Navblock outStyles={{justifyContent: 'right'}}><h1>COMPANY!</h1></Navblock>
// </Navbar>