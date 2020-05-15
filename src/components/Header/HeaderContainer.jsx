import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logOutUser} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props} logOutUser={this.props.logOutUser} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {logOutUser})(HeaderContainer);