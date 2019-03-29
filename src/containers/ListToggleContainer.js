import ListToggle from "../components/ListToggle";
import { saveMyMovie, removeMyMovie } from "../actions";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {
    saveMyMovie(movie) {
      dispatch(saveMyMovie(movie));
    },
    removeMyMovie() {
      dispatch(removeMyMovie);
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ListToggle);
