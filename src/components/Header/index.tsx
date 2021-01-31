import React from 'react';
import { MaterialCommunityIcons, MaterialIcons, Feather } from '@expo/vector-icons';

import { Container, Avatar, OnlineStatus, RightSide, Button } from './styles';

import colors from '../../styles/colors';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <OnlineStatus />
      </Avatar>

      <RightSide>
      <Button>
          <MaterialCommunityIcons 
          name="video-outline"
          size={26}
          color={colors.black}
          />
        </Button>

        <Button>
          <MaterialIcons 
          name="notifications-none"
          size={26}
          color={colors.black}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons 
          name="message-outline"
          size={26}
          color={colors.black}
          />
        </Button>

        <Button>
          <Feather 
          name="search"
          size={26}
          color={colors.black}
          />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
