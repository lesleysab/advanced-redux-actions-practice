import { connect } from "react-redux";
import CounterButton from "../components/CounterButton";
import { increaseCounter, decreaseCounter } from "../actions";

//map a prop called text to the state specialText
function mapDispatchToProps(dispatch) {
  return {
    increase: function() {
      let action = increaseCounter();
      dispatch(action);
    },
    decrease: function() {
      let action = decreaseCounter();
      dispatch(action);
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CounterButton);
