import React from 'react';
import { AiOutlineClose } from "react-icons/ai"
import "./chat.scss";
const Chat = () => {
    return (
        <div id="container-chat">
            <div id="top">
                <div id="user-info">
                    <img src="https://randomuser.me/api/portraits/lego/6.jpg" alt="" />
                    <div id="user-status">
                        <strong>ChatIA</strong>
                        <div id="status">
                            Online
                        </div>
                    </div>
                </div>
                <div id="close-chat">
                    <AiOutlineClose />
                </div>
            </div>
            <div id="messages">
                <div className="messages">
                    <div className="message">
                        <div className="top">ChatIA - 11:30</div>
                        <div className="body">Tive uma ideia incrível para um projeto! 😍</div>
                    </div>
                    <div className="message you">
                        <div className="top">Você - 11:31</div>
                        <div className="body">Sério? Me conta mais.</div>
                    </div>

                    <div className="message">
                        <div className="top">ChatIA - 11:32</div>
                        <div className="body">E se a gente fizesse um chat moderno e responsivo em apenas uma semana?</div>
                    </div>
                    <div className="message you">
                        <div className="top">Você - 11:32</div>
                        <div className="body">#boraCodar! 🚀</div>
                    </div>

                </div>

            </div>
            <div id="bottom">

            </div>
        </div>
    )
}

export default Chat;