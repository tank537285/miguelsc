import { useState, useEffect ,useRef} from 'react';
function useFriendStatus(id) {
    const [isOnline, setIsOnline] = useState(null);
    const bb=useRef(null);
    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }
        bb.current=setTimeout(()=>{
            handleStatusChange(id>.5?{isOnline:true}:{isOnline:false});
        },2000);
        return () => {
            clearTimeout(bb.current);
        };
    },[id]);

    return isOnline;
}
export default useFriendStatus