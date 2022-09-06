import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import UserProfile from './UserProfile';
import {  isFetching,setUserProfile,getUserProfileThunk} from '../../../redux/socialReducer'


function withRouter(Component){
  function ComponentWithRouterProp(props){
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return(
      <Component {...props} router={{location, navigate,params}}/>
    )
  }
  return ComponentWithRouterProp;
}

const mapStateToProps = (state) => {
  return {
    social: state.social,
  }
}

const mapDispatchToProps = {
  setUserProfile,
  isFetching,
  getUserProfileThunk,
}


const UserProfileContainer = connect(mapStateToProps,mapDispatchToProps)(withRouter(UserProfile))
export default UserProfileContainer