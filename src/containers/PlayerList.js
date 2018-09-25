import { connect } from "react-redux";
import PlayerList from '../components/PlayerList';
import { deletePlayer } from '../data/actions';

const mapStateToProps = (state) => {
    return {
        players: state.players
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePlayer: (playerIndex) => dispatch(deletePlayer(playerIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);