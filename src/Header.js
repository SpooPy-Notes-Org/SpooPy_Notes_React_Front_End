import React, {Fragment} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Header(){

  let styles = {
    title: {
      marginBottom: '50px',
      marginTop: '50px'
    },
    para: {
      marginBottom: '50px'
    },
  }

  return(
    <Fragment>
      <h1 style={styles.title} className='glitch' value='SpooPy Notes'>
        SpooPy Notes
      </h1>
      <p>
        <Link to="/">Home </Link>
        <Link to="/about">About</Link>  
      </p>
      <p style={styles.para}>
        Welcome to SpooPy Notes! Enter your ransom note into the textbox.
      </p>
    </Fragment>
   )
}

export default Header;
