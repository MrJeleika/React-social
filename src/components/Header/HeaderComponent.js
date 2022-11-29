import { connect } from 'react-redux'

// Component
import { Header } from './Header'

// Misc
import { checkIsAuthThunk, logoutThunk } from '../../redux/socialReducer'

const mapStateToProps = (state) => {
  return {
    social: state.social,
  }
}
const mapDispatchToProps = {
  checkIsAuthThunk,
  logoutThunk,
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)
export default HeaderContainer
