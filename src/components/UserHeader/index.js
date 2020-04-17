import React from 'react';

import { Container, Avatar, HeaderTextContainer, Name, Bio } from './styles';

export default function UserHeader({ user }) {
  return (
    <Container>
      <Avatar source={{ uri: user.avatar }} />
      <HeaderTextContainer>
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
      </HeaderTextContainer>
    </Container>
  );
}
