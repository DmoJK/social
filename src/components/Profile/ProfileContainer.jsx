import { connect } from "react-redux";
import React from 'react';
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus, updatePhoto, updateProfile, addPost } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { useEffect } from "react";
import { useState } from "react";
import { getUserId } from "../../selectors/header-selector";
import { getProfileSelector, getStatusSelector } from "../../selectors/profile-selector";

const ProfileContainer = (props) => {
    let [isOwner, setIsOwner] = useState(false)

    const loadProfile = () => {
        let userId = props.router.params.userId
        props.getProfile(userId)
        props.getStatus(userId)

        if (props.router.params.userId == props.id) {
            setIsOwner(true)
        }
        else {
            setIsOwner(false)
        }
    }

    useEffect(() => {
        loadProfile()
    }, [props.router.params.userId])

    return <Profile {...props}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={isOwner}
        updatePhoto={props.updatePhoto}
        updateProfile={props.updateProfile}
        addPost={props.addPost}
        postsData={props.postsData} />
}

let mapStateToProps = (state) => {
    return {
        profile: getProfileSelector(state),
        status: getStatusSelector(state),
        id: getUserId(state),
        postsData: state.profilePage.postsData
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus, updatePhoto, updateProfile, addPost }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)