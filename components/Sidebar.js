// import React from 'react'
import { Avatar, Button, IconButton } from '@material-ui/core';
import styled from "styled-components";
import ChatIcon from '@material-ui/icons/Chat';
// import ChatIcon from '@mui/icons-material/Chat';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';

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

            <Search>
                <SearchIcon />
                <SearchInput placeholder="Search in chats" />
            </Search>

            <SidebarButton>Start a new chat</SidebarButton>

            {/* List of Chats */}

        </Container>
    )
}

export default Sidebar;

const Container = styled.div``;

const Search = styled.div`
    display:flex;
    align-items:center;
    padding:20px;
    border-radius:2px;
`;

const SidebarButton = styled(Button)`
width:100%;
&&&& {
    border-top:1px solid whitesmoke;
    border-bottom:1px solid whitesmoke;
}
`;

const SearchInput = styled.input`
outline-width:0;
border:none;
flex:1;
`;

const Header = styled.div`
display:flex;
position:sticky;
top:0;
background-color:white;
z-index:1;
justify-content:space-between;
align-items:center;
padding:15px;
height:80px;
border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
cursor:pointer;
:hover{
  opacity:0.8;
}
`;

const IconsContainer = styled.div``;
// const AccountCircleIcon = styled.div``;