import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || 'button'}
    
            //type isliye liya gya hai kuki userinput.js me isko use liya gya hai toh iska type toh hoga hikuch isliye or type.props isliye kucki ussi button pr click karne pr pta chaelaga ki ye kis type ka hai jaruri nahi hai ki type hi likho kuch bhi likh sakte ho
            // props isliye kuki ye user pta nahi kab kab click karega dynamic kaam hoga na isliye or || button isliye kuki aagr type pya na chale toh bydefault button ho jayega and program run ho hayega
            onClick={props.onClick}
            // props.onclick onclick ki jagah kuch bhu rakh sakte hai ye 
            // totally apne pe depend karta hai ye use me isliye le rhe hai kuki ye jan use aayega jab user button pe click karega
            >
            {props.children}
                {/* ye props.children joo Button ke under joo kuch bhi likah hai usko render karega
                props.children is a special prop, automatically passed to every component, that can be used to render the content includeed
                 between opening and closing tag when invoking a component */}
            </button>

    
     );
}
export default Button;