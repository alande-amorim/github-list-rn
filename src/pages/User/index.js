import * as React from 'react';
import { Text, Dimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';

import UserHeader from '../../components/UserHeader';
import Stars from '../../components/Stars';
import Repos from '../../components/Repos';
import { Container, Badge } from './styles';

export default function TabViewExample({ route }) {
  const { user } = route.params;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'stars', title: 'Stars' },
    { key: 'repos', title: 'Repos', qtty: user.repos },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      default:
      case 'stars':
        return <Stars user={user} />;
      case 'repos':
        return <Repos user={user} />;
    }
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#666' }}
      renderBadge={({ route }) =>
        route.qtty && <Badge>{route.qtty > 99 ? '99+' : route.qtty}</Badge>
      }
      renderLabel={({ route, focused, color }) => (
        <Text
          style={{
            color: focused ? '#666' : '#AAA',
            margin: 8,
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 12,
          }}
        >
          {route.title}
        </Text>
      )}
      style={{ backgroundColor: 'transparent', elevation: 0 }}
    />
  );

  return (
    <Container>
      <UserHeader user={user} />

      <TabView
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    </Container>
  );
}
