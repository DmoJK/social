import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";
import { getIsAuth, getIsFetching, getLogin } from "../../selectors/header-selector";
import Header from "./Header";

let mapStateToProps = (state) => {
    return {
        login: getLogin(state),
        isFetching: getIsFetching(state),
        isAuth: getIsAuth(state)
    }
}

const HeaderContainer = connect(mapStateToProps, { logout })(Header);

export default HeaderContainer;