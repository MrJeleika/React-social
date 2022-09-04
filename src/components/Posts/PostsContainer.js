import Posts from "./Posts";
import { connect } from 'react-redux';
import 
{ deletePost, getEditInfo, updateEditBodyTitle, updateEditBodyText, saveEditedPost,updateNewPostBodyText,updateNewPostBodyTitle,addNewPost}
 from "../../redux/socialReducer";

const mapStateToProps = (state) => {
  return {
    social: state.social,
  }
}
const mapDispatchToProps = {
  deletePost,
  getEditInfo,
  updateEditBodyTitle,
  updateEditBodyText,
  saveEditedPost,
  updateNewPostBodyText,
  updateNewPostBodyTitle,
  addNewPost,
}


const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts)
export default PostsContainer