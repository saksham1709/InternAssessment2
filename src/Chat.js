import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
import ScrollToBottom from 'react-scroll-to-bottom';
import { useState } from "react";

const Chat = () => {
    const { id } = useParams();
    const { data: chat, error, isPending } = useFetch('http://localhost:8000/chats/' + id);
    return (
        <div className="home">
            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {chat && (
                <>
                    <div className="chat-upper">
                        <div className="chat-top-left">
                            <Link to='/'><span><i class="fas fa-chevron-left"></i></span></Link>
                            <div className="chat-name">
                                <div className="chat-logo"><i class="far fa-user"></i></div>
                                <p>{chat.topic}</p>
                            </div>
                        </div>
                        <div title="Display-Only" className="chat-top-right"><span><i class="fas fa-phone-volume"></i></span></div>
                    </div>
                    {
                        <ScrollToBottom className="messages">
                            {chat.messages.map((message, i) =>

                                <>
                                    <div className={message.from === 'Ram' ? 'justifyEnd' : 'justifyStart'}>
                                        <div className={message.from === 'Ram' ? 'backgroundBlue' : 'backgroundLight'}>
                                            <div className={message.from === "Ram" ? 'user' : 'non-user'}>{message.from === "Ram" ? 'You' : 'Ghanshyam'}</div>
                                            <p className="messageText">{message.message}</p>
                                            <div className="time">{message.time}</div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </ScrollToBottom>
                    }
                    <div className="lower">
                        <span title="Display-Only" ><i class="fas fa-plus"></i></span>
                        <input type="text" placeholder="No backend" />
                        <span title="Display-Only"  className="sticky"><i class="far fa-sticky-note"></i></span>
                        <span title="Display-Only" ><i class="fas fa-camera"></i></span>
                        <span title="Display-Only" ><i class="fas fa-microphone"></i></span>
                    </div>
                </>
            )}
        </div>
    );
}

export default Chat;
