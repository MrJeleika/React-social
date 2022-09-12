import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

let mapStateToProps = (state) => ({
  social: state.social
})

const WithAuthRedirect = (Component) => {

  const RedirectComponent = (props) =>{
    if(!props.social.isAuth) return <Navigate to='/login'/>
    return <Component {...props}/>
 }
 return connect(mapStateToProps)(RedirectComponent)
}

export default WithAuthRedirect;
