import { connect } from "react-redux";
import Setup from '../components/Setup';
import { saveGroups } from '../data/actions';

const mapStateToProps = (state) => {
    return {
        players: state.players
    }
}

const mapDisptachToProps = (dispatch) => {
    return {
        saveGroups: (groups) => dispatch(saveGroups(groups))
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(Setup);