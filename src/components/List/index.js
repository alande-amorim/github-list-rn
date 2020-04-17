import React from 'react';

import {
  Container,
  ListItems,
  Item,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default function List({ items, fetchMore }) {
  return (
    <Container>
      <ListItems
        data={items}
        keyExtractor={(item) => String(item.id)}
        onEndReachedThreshold={0.2}
        onEndReached={fetchMore}
        renderItem={({ item }) => (
          <Item>
            <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
            <Info>
              <Title>{item.name}</Title>
              <Author>{item.owner.login}</Author>
            </Info>
          </Item>
        )}
      />
    </Container>
  );
}
