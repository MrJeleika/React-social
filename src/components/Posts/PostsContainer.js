import Posts from "./Posts";
import { connect } from 'react-redux';
import 
{ deletePost, getEditInfo, saveEditedPost,addNewPost,changeTextColor}
 from "../../redux/socialReducer";
import { compose } from "redux";
import WithAuthRedirect from "../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
  return {
    social: state.social,
  }
}
const mapDispatchToProps = {
  deletePost,
  getEditInfo,
  saveEditedPost,
  addNewPost,
  changeTextColor,
}

const PostsContainer = compose(
  connect(mapStateToProps,mapDispatchToProps),
  WithAuthRedirect,
)(Posts)

export default PostsContainer