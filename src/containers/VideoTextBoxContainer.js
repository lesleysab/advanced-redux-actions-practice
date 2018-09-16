import { connect } from "react-redux";
import { setVideoURL } from "../actions";
import VideoTextBox from "../components/VideoTextBox";

//map a prop called text to the state specialText
function mapDispatchToProps(dispatch) {
  return {
    set: function(URL) {
      let action = setVideoURL(URL);
      dispatch(action);
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(VideoTextBox);
