import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const PostViewerBlock = styled(Responsive)`
  magin-top: 4rem;
  padding: 2rem;
`;
const PostHead = styled.div`
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;
const SubInfo = styled.div`
  margin-top: 1rem;
  color: ${palette.gray[5]};

  span + span:before {
    color: ${palette.gray[5]};
    padding-left: 0.25rem;
    pading-right: 0.25rem;
    content: '\\B7';
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = () => {
  const income = { title: '수입 : 0', date: '2020-08-21', color: '#c26565' };
  const expense = { title: '지출 : 0', date: '2020-08-21', color: '#3282b8' };

  const [selectLocalDate, setSelectLocalDate] = useState(
    new Date().toLocaleDateString()
  );

  const dateClick = (arg) => {
    setSelectLocalDate(arg.dateStr);
  };

  return (
    <PostViewerBlock>
      <PostHead>
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin, interactionPlugin]}
          events={[income, expense]}
          dateClick={dateClick}
        />
      </PostHead>
      <PostContent>
        <SubInfo>
          <span>
            <div>{selectLocalDate}</div>
            <div>test</div>
          </span>
        </SubInfo>
      </PostContent>
    </PostViewerBlock>
  );
};

export default PostViewer;
