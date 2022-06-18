import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollow,
    toggleIsFetching,
    UsersPageType
} from '../../redux/usersReducer';
import axios from 'axios';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        const {users, currentPage, pageSize, setUsers, setTotalUsersCount, toggleIsFetching} = this.props;
        if (users.length === 0) {
            toggleIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    toggleIsFetching(false)
                    setUsers(response.data.items)
                    setTotalUsersCount(response.data.totalCount)
                })
        }
    }

    onPageChange = (pageNumber: number) => {
        const {pageSize, setCurrentPage, setUsers, toggleIsFetching} = this.props
        setCurrentPage(pageNumber)
        toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                toggleIsFetching(false)
                setUsers(response.data.items)
            })
    }

    render() {
        const {users, pageSize, totalUsersCount, currentPage, isFetching, toggleFollow} = this.props;
        return (
            <>
                {isFetching ?
                    <Preloader/> :
                    <Users
                        users={users}
                        totalUsersCount={totalUsersCount}
                        currentPage={currentPage}
                        pageSize={pageSize}
                        toggleFollow={toggleFollow}
                        onPageChange={this.onPageChange.bind(this)}
                    />
                }

            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): UsersPageType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = {
    toggleFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type UsersPropsType = ConnectedProps<typeof connector>;

export default connector(UsersContainer)