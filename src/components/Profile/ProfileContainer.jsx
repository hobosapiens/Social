import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {geUsertProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        this.props.geUsertProfile(userId);

    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"} />
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {geUsertProfile})(WithURLDataContainerComponent);