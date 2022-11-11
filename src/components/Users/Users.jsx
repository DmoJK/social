import Paginator from '../common/Paginator/Pagination';
import User from './User';

const Users = ({ totalUserCount, pageSize, currentPage, onPageChanged, users, followingInProgress, unfollowThunkCreator, followThunkCreator }) => {
    return <div>
        <Paginator totalItemsCount={totalUserCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
        <div>
            {users.map(u => <User followingInProgress={followingInProgress}
                    unfollowThunkCreator={unfollowThunkCreator}
                    followThunkCreator={followThunkCreator}
                    user={u} key={u.id} />)}
        </div>
    </div>
};

export default Users;