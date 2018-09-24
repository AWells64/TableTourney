import { connect } from "react-redux";
import CurrentGame from '../components/CurrentGame';

const mapStateToProps = (state) => {
    return {
        players: state.players
    }
}

export default connect(mapStateToProps)(CurrentGame);