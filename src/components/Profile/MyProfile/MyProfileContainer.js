import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {  isFetching,setUserProfile,updateStatusBodyText,changeTextColor, getMyProfileThunk} from '../../../redux/socialReducer'
import MyProfile from './MyProfile';


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
  updateStatusBodyText,
  changeTextColor,
  getMyProfileThunk,
}


const MyProfileContainer = connect(mapStateToProps,mapDispatchToProps)(withRouter(MyProfile))
export default MyProfileContainer