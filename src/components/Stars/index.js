import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

import List from '../List';
import { Container } from './styles';

export default class Stars extends Component {
  state = {
    stars: [],
    loading: false,
    page: 1,
  };

  componentDidMount() {
    this.fetchStars();
  }

  fetchStars = async () => {
    const { user } = this.props;
    const { page, stars } = this.state;

    this.setState({ loading: true });
    const response = await api.get(`/users/${user.login}/starred?page=${page}`);
    this.setState({
      stars: [...stars, ...response.data],
      page: page + 1,
      loading: false,
    });
  };

  render() {
    const { stars, loading } = this.state;

    return (
      <Container>
        <List items={stars} fetchMore={this.fetchStars} />

        {loading && <ActivityIndicator />}
      </Container>
    );
  }
}
