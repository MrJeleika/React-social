import { connect } from 'react-redux';
import Users from './Users';
import {setUsersToState, isFetching, setTotalUsersCount,setCurrentPageNum} from '../../redux/socialReducer'

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
}


const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
export default PostsContainer