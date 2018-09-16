import { connect } from "react-redux";
import Counter from "../components/Counter";

//map a prop called text to the state specialText
const mapStateToProps = state => ({
  count: state.currentCount
});

export default connect(mapStateToProps)(Counter);
