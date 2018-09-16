import { connect } from 'react-redux';
import {setCurrentUserSort} from "../actions";
import SortUsers from "../components/SortUsers";

//map a prop called text to the state specialText

function mapDispatchToProps(dispatch){
  return {
   set:function(sort){
     let action = setCurrentUserSort(sort);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(SortUsers);