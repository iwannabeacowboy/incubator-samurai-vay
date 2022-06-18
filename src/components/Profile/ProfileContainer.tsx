import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {AppStateType} from '../../redux/store';
import {connect, ConnectedProps} from 'react-redux';
import {ProfileType, setUserProfile} from '../../redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        const {match, setUserProfile} = this.props;
        const userId = match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props.profile}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): {profile: ProfileType} => {
    return {
        profile: state.profilePage.profile
    }
}

const mapDispatchToProps = {
    setUserProfile
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type OwnPropsType = ConnectedProps<typeof connector>;
type PathParamsType = {
    userId : string
}

type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connector(WithUrlDataContainerComponent);