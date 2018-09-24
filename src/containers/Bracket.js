import { connect } from "react-redux";
import Bracket from '../components/Bracket';

const mapStateToProps = (state) => {
    return {
        groups: state.groups
    }
}



export default connect(mapStateToProps)(Bracket);