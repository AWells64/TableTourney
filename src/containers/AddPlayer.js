import { connect } from "react-redux";
import AddPlayer from '../components/AddPlayer';
import { addPlayer } from '../data/actions';

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (playerData) => dispatch(addPlayer(playerData))
    }
}

export default connect(null, mapDispatchToProps)(AddPlayer);