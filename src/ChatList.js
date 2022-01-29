import {Link} from 'react-router-dom';
const ChatList = ({chats}) => {
    return ( 
        <div className="Chat-list">
            {
                chats.map((chat)=>
                <>
                <div className="chat-preview" key={chat.id}>
                    <div className="user-logo"><i class="far fa-user"></i></div>
                    <Link to={`/chats/${chat.id}`}><div className="chat-display">
                        <h4>{chat.topic}</h4>
                        <p>{chat.messages[chat.messages.length-1].from=="Ram" ? "You": "Ghanshyam"} :  {chat.messages[chat.messages.length-1].message}</p>
                        </div></Link>
                    <div className="time"><p>{chat.messages[chat.messages.length-1].time}</p></div>
                </div>
                </>
                )
            }
        </div>
     );
}
 
export default ChatList;