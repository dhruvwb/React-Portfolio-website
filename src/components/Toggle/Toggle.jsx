import "./toggle.css";
import Sun from '../../Images/sun.png'
import Moon from '../../Images/moon.png'
import { ThemeContext } from "../../Context";
import { useContext } from "react";


export const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }
  return <div className="t">
    <img src={Sun} alt="" className="t-icon"/>
    <img src={Moon} alt="" className="t-icon"/>
    <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
  </div>;
};
