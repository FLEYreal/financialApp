// THIS COMPONENT IS MADE TO GROUP ALL COMPONENTS AND SIMPLIFY IMPORTING OF COMPONENTS.
// EXAMPLE: import * from './components/import' - This code will import everything from this file
// and there's no need to make infinite imports


//Imports Modal Windows
import ModalWindowComp from '../readysolutions/modal_window/ModalWindow'
//Imports Custom Buttons
import BtnComp from '../readysolutions/button/Btn'
//Imports Custom Inputs And Label
import InputLabelComp from '../readysolutions/input/InputLabel'
//Imports ready Navbar
import NavbarComp from '../readysolutions/navbar/Navbar'
import NavblockComp from '../readysolutions/navbar/Navblock'

//Exports Modal Windows
export const ModalWindow = ModalWindowComp
//Exports Custom Buttons
export const Btn = BtnComp
//Exports Custom Inputs And Label
export const InputLabel = InputLabelComp
//Exports ready Navbar
export const Navbar = NavbarComp
export const Navblock = NavblockComp