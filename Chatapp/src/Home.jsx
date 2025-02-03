import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';


const socket = io("http://localhost:3001");



function Home() {
  const [input, setInput] = useState("");
  const [value, setValue] = useState([]);
  const [userId, setUserId] = useState("");
  const autoScroll = useRef(null);


  useEffect(() => {

    
    socket.on('connect', () => {
      console.log(`connected: ${socket.id}`);
      setUserId(socket.id);
    });
    // Listen for incoming messages from the server
    socket.on('sent', (data) => {
      console.log(data);
      setValue((prevMessages) => [...prevMessages, data]);
    });
    
    // Clean up the listener when the component unmounts
    return () => {
      socket.off('sent');
    };
  }, []);

  useEffect(() => {
    autoScroll.current?.lastElementChild?.scrollIntoView();
  }, [value]);

  function submit() {
    if (input) {
      const messageData = { text: input, userId };
      socket.emit('sent', messageData); // Send message to server
      setInput(''); // Clear input field
    }
  }
  return (

    <div className="maincontainer">
      <div class="container-fluid h-50">
        <div class="row justify-content-center h-100">
          <h1>Open two browser tab with same chatapp.</h1>
          <div class="col-md-4 col-xl-3 chat"><div class="card mb-sm-3 mb-md-0 contacts_card">
            <div class="card-header">
              <div class="input-group">
                <input type="text" placeholder="Search..." name="" class="form-control search" />
                <div class="input-group-prepend">
                  <span class="input-group-text search_btn"><i class="fas fa-search"></i></span>
                </div>
              </div>
            </div>
            <div class="card-body contacts_body">
              <ul class="contacts">
                <li class="active">
                  <div class="d-flex bd-highlight">
                    <div class="img_cont">
                      <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img" />
                      <span class="online_icon"></span>
                    </div>
                    <div class="user_info">
                      <span>Naizam K najeeb</span>
                      <p>online</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="card-footer"></div>
          </div></div>

          {/*chat container start*/}

          <div class="col-md-8 col-xl-6 chat">
            <div class="card">
              <div class="card-header msg_head">
                <div class="d-flex bd-highlight">
                  <div class="img_cont">
                    <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img" />
                    <span class="online_icon"></span>
                  </div>
                  <div class="user_info">
                    <span>Chat with Naizam</span>
                    <p>1767 Messages</p>
                  </div>
                  <div class="video_cam">
                    <span><i class="fas fa-video"></i></span>
                    <span><i class="fas fa-phone"></i></span>
                  </div>
                </div>
                <span id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
                <div class="action_menu">
                  <ul>
                    <li><i class="fas fa-user-circle"></i> View profile</li>
                    <li><i class="fas fa-users"></i> Add to close friends</li>
                    <li><i class="fas fa-plus"></i> Add to group</li>
                    <li><i class="fas fa-ban"></i> Block</li>
                  </ul>
                </div>
              </div>
              <div class="card-body msg_card_body">
                <div class="d-flex justify-content-start mb-4">
                  <div class="img_cont_msg">
                    <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img_msg" />
                  </div>
                  <div class="msg_cotainer">
                    Hi, how are you samim?
                    <span class="msg_time">8:40 AM, Today</span>
                  </div>
                </div>
                <div class="d-flex justify-content-end mb-4">
                  <div class="msg_cotainer_send">
                    Hi jassa i am good tnx how about you?
                    <span class="msg_time_send">8:55 AM, Today</span>
                  </div>
                  <div class="img_cont_msg">
                    <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img_msg" />
                  </div>
                </div>
                <div class="d-flex justify-content-start mb-4">
                  <div class="img_cont_msg">
                    <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img_msg" />
                  </div>
                  <div class="msg_cotainer">
                    I am good too, thank you for your chat template
                    <span class="msg_time">9:00 AM, Today</span>
                  </div>
                </div>
                <div class="d-flex justify-content-end mb-4">
                  <div class="msg_cotainer_send">
                    You are welcome
                    <span class="msg_time_send">9:05 AM, Today</span>
                  </div>
                  <div class="img_cont_msg">
                    <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img_msg" />
                  </div>
                </div>
                {value.map((item, index) => {
                  return (


                    <div ref={autoScroll}>
                      {item.userId != userId ? (

                        <div class="d-flex justify-content-start mb-4">
                          <div class="img_cont_msg">
                            <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img_msg" />
                          </div>
                          <div class="msg_cotainer">
                            {item.text}
                            <span class="msg_time">9:07 AM, Today</span>
                          </div>
                        </div>
                      ) :


                        <div class="d-flex justify-content-end mb-4">
                          <div class="msg_cotainer_send">
                            {item.text}
                            <span class="msg_time_send">9:10 AM, Today</span>
                          </div>
                          <div class="img_cont_msg">
                            <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img_msg" />
                          </div>
                        </div>
                      }
                    </div>
                  )
                })}
              </div>
              <div class="card-footer">
                <div class="input-group">
                  <div class="input-group-append">
                    <span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
                  </div>
                  <textarea value={input} onChange={(e) => setInput(e.target.value)} name="" class="form-control type_msg" placeholder="Type your message..."></textarea>
                  <div onClick={submit} class="input-group-append">
                    <span class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;