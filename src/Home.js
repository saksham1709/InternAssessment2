import ChatList from './ChatList';
import useFetch from './useFetch';
const Home = () => {
    const { data: chats, isPending, error } = useFetch('http://localhost:8000/chats');
    return (
        <>
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading .....</div>}
            {chats &&
                <>
                    <div className="upper">
                        <span title='Display-Only'>Edit</span>
                        <p>Chats</p>
                        <span title='Display-Only'><i class="far fa-edit"></i></span>
                    </div>
                    <div className="middle">
                        <ChatList chats={chats} />
                    </div>
                    <div className="lower">
                        <div title='Display-Only'><span><i class="fas fa-circle-notch"></i></span>Status</div>
                        <div title='Display-Only'><span><i class="fas fa-phone-alt"></i></span>Calls</div>
                        <div title='Display-Only'><span><i class="fas fa-camera"></i></span>Camera</div>
                        <div title='Display-Only'><span><i class="fas fa-comments"></i></span>Chats</div>
                        <div title='Display-Only'><span><i class="fas fa-cogs"></i></span>Settings</div>
                    </div>
                </>}
        </div>
        </>
    );

}
export default Home;