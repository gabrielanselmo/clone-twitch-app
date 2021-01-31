import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail1.jpg';
import pandora from '../../images/pandora.jpg';

import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar source={pandora} />
            <StreamUsername numberOfLines={1}>pandoracaos</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Rust RP | !prime - discord do RP: +rp
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            RUST
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Jogo de tiro</TagText>
          </TagView>
          <TagView>
            <TagText>Ação</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  )

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
