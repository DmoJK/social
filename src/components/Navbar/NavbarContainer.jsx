import { connect } from 'react-redux';
import Navbar from './Navbar';

let mapStateToProps = (state) => {
    return {
        state: state.sidebar,
        myProfile: state.auth.id
    }
};
const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;