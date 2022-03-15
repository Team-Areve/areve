import { SendBtn } from 'assets/icons';
import Message from 'components/chat/Message';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { palette } from 'lib/styles/palette';
import { FlexAlignCenter, FlexJustifyCenter } from 'lib/styles/utilStyles';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import styled from 'styled-components';
import PlusBtnImg from 'assets/icons/PlusBtn.png';
import SendBtnImg from 'assets/icons/SendBtn.png';

const socket = io.connect('http://localhost:4000');

function ChatPage() {
  const [text, setText] = useState('');
  const [sendMsgList, setSendMsgList] = useState([]);
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onClick = (e) => {
    setSendMsgList([...sendMsgList, text]);
    setText('');
    socket.emit('chatting', sendMsgList);
  };
  const onRenderChat = () => {
    return sendMsgList.map((msg, idx) => (
      <Message key={`sendMsg_${idx}`} variant="send">
        {msg}
      </Message>
    ));
  };

  useEffect(() => {
    // socket.to('some room').emit('some event');
    socket.on('chatting', (data) => {
      console.log(data);
    });
  }, []);

  return (
    <ChatPageContainer>
      <ChatPageTop>
        <ChatPageOpponent>상대방</ChatPageOpponent>
        <ChatPageClose>X</ChatPageClose>
      </ChatPageTop>
      <ChatPageChattingList>{onRenderChat()}</ChatPageChattingList>

      <ChatPageInputWrapper>
        <ChatPageMenuBtn src={PlusBtnImg} />

        <Input width="320px" height="40px" value={text} onChange={onChange} />
        <ChatPageSendBtn src={SendBtnImg} onClick={onClick} />
      </ChatPageInputWrapper>
    </ChatPageContainer>
  );
}

const ChatPageContainer = styled.section`
  width: 400px;
  height: 800px;
  border: 0.5px solid ${palette.gray};
`;

const ChatPageTop = styled.div`
  width: 400px;
  height: 50px;
  color: ${palette.MainColor};
  text-align: center;
  border-bottom: 0.5px solid ${palette.gray};
  margin-bottom: 20px;
  ${FlexAlignCenter}
`;

const ChatPageOpponent = styled.span`
  margin-left: 30px;
`;

const ChatPageClose = styled.span`
  margin-left: 280px;
`;

const ChatPageChattingList = styled.ol`
  height: 680px;
  margin: 0 10px;
`;

const ChatPageInputWrapper = styled.div`
  ${FlexAlignCenter};
  justify-content: center;
  width: 400px;
  height: 50px;
  background-color: ${palette.grayLightest};
`;

const ChatPageMenuBtn = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;
const ChatPageSendBtn = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 10px;
  cursor: pointer;
`;

export default ChatPage;
