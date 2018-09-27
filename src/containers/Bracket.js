import { connect } from "react-redux";
import Bracket from '../components/Bracket';

const mapStateToProps = (state) => {
    return {
        players: state.players,
        matches: state.matches
    }
}



export default connect(mapStateToProps)(Bracket);