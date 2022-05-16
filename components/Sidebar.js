// import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import styled from "styled-components";
import ChatIcon from '@material-ui/icons/Chat';
// import ChatIcon from '@mui/icons-material/Chat';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Sidebar() {
  return (
    <Container>
      <Header>
        {/* <h1>this is the header</h1> */}

        <UserAvatar />

        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>


        </IconsContainer>

      </Header>
    </Container>
  )
}

export default Sidebar;

const Container = styled.div``;

const Header = styled.div`
display:flex;
position:sticky;
top:0;
background-color:white;
z-index:1;
justify-content:space-between;
`;

const UserAvatar = styled(Avatar)``;

const IconsContainer = styled.div``;
// const AccountCircleIcon = styled.div``;