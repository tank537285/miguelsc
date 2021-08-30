import useFriendStatus from "./useFriendStatus";


function FriendStatus({id}) {
    const isOnline = useFriendStatus(id);
    if (isOnline === null) {
        return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
}
export default FriendStatus