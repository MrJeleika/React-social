import { connect } from 'react-redux';
import Users from './Users';
import {setUsersToState, isFetching, setTotalUsersCount,setCurrentPageNum,getUsersThunk} from '../../redux/socialReducer'

const mapStateToProps = (state) => {
  return {
    social: state.social,
  }
}
const mapDispatchToProps = {
  setUsersToState,
  isFetching,
  setTotalUsersCount,
  setCurrentPageNum,
  getUsersThunk,
}


const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
export default PostsContainer