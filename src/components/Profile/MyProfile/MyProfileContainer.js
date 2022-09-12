import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { compose } from 'redux';
import {  isFetching,setUserProfile,updateStatusBodyText,changeTextColor, getMyProfileThunk,updateProfileStatusThunk,getProfileStatusThunk} from '../../../redux/socialReducer'
import WithAuthRedirect from '../../hoc/withAuthRedirect';
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
  updateProfileStatusThunk,
  getProfileStatusThunk,
}

const MyProfileContainer = compose(
  connect(mapStateToProps,mapDispatchToProps),
  withRouter,
  WithAuthRedirect,
)(MyProfile)

export default MyProfileContainer