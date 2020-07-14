import React from 'react'
import { Link } from 'react-router-dom'
import Signedinlinks from './Signedinlinks'
import Signedoutlinks from './Signedoutlinks'
import { connect } from 'react-redux'


const Navbar=(props)=> {
    const { auth, profile} = props;
    
    const links=auth.uid ? <Signedinlinks  profile={profile}/> : <Signedoutlinks /> 
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">MarioPlan</Link>
                { links }
            </div>
        </nav>
    
    )
}


const mapStateToProps= (state) => {
    return {
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);