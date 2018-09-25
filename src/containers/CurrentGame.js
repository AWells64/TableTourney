import { connect } from "react-redux";
import CurrentGame from '../components/CurrentGame';
import { saveMatch } from '../data/actions';

const mapStateToProps = (state) => {
    return {
        players: state.players,
        matches: state.matches
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveMatch: (matchData) => dispatch(saveMatch(matchData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentGame);