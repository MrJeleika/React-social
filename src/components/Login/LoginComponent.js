import { connect } from 'react-redux';
import { compose } from 'redux';
import { isAuth, login}
 from "../../redux/socialReducer";
import WithLoginRedirect from '../hoc/withLoginRedirect';
import Login from "./Login";

const mapStateToProps = (state) => {
  return {
    social: state.social,
  }
}
const mapDispatchToProps = {
  isAuth,
  login,
}
const LoginContainer = compose(
  connect(mapStateToProps,mapDispatchToProps),
  WithLoginRedirect,
)(Login)

export default LoginContainer