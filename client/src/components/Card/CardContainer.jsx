import { connect } from 'react-redux';
import * as actions from '../../actions';
import Card from './Card'; 

const mapStateToProps = (state) => ({
  hand: state.hand,
});

const mapDispatchToProps = (dispatch) => ({
  dealCards: () => dispatch(actions.dealCards),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);