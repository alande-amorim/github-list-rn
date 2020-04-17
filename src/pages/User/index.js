import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

import UserHeader from '../../components/UserHeader';

import {
  Container,
  Star,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class User extends Component {
  state = {
    stars: [],
    loading: false,
    page: 1,
  };

  static propTypes = {
    route: PropTypes.shape({
      params: PropTypes.object,
    }).isRequired,
  };

  componentDidMount() {
    this.fetchStars();
  }

  fetchStars = async () => {
    const { route } = this.props;
    const { page, stars } = this.state;
    const { user } = route.params;

    console.tron.log(user);

    this.setState({ loading: true });
    const response = await api.get(`/users/${user.login}/starred?page=${page}`);
    this.setState({
      stars: [...stars, ...response.data],
      page: page + 1,
      loading: false,
    });
  };

  render() {
    const { route } = this.props;
    const { user } = route.params;
    const { stars, loading } = this.state;

    return (
      <Container>
        <UserHeader user={user} />

        <Star
          data={stars}
          keyExtractor={(star) => String(star.id)}
          onEndReachedThreshold={0.2}
          onEndReached={this.fetchStars}
          renderItem={({ item }) => (
            <Starred>
              <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        />

        {loading && <ActivityIndicator />}
      </Container>
    );
  }
}
