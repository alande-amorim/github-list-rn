import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

import List from '../List';
import { Container } from './styles';

export default class Repos extends Component {
  state = {
    repos: [],
    loading: false,
    page: 1,
  };

  componentDidMount() {
    this.fetchStars();
  }

  fetchStars = async () => {
    const { user } = this.props;
    const { page, repos } = this.state;

    this.setState({ loading: true });
    const response = await api.get(`/users/${user.login}/repos?page=${page}`);
    this.setState({
      repos: [...repos, ...response.data],
      page: page + 1,
      loading: false,
    });
  };

  render() {
    const { repos, loading } = this.state;

    return (
      <Container>
        <List items={repos} fetchMore={this.fetchStars} />

        {loading && <ActivityIndicator />}
      </Container>
    );
  }
}
