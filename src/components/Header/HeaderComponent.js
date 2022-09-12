import Header from "./Header";
import { connect } from 'react-redux';
import 
{ checkIsAuthThunk,logoutThunk}
 from "../../redux/socialReducer";

const mapStateToProps = (state) => {
  return {
    social: state.social,
  }
}
const mapDispatchToProps = {
  checkIsAuthThunk,
  logoutThunk,
}


const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(Header)
export default HeaderContainer