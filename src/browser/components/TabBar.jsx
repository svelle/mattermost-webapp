// Copyright (c) 2015-2016 Yuya Ochiai
// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React from 'react';
import PropTypes from 'prop-types';
import {Glyphicon, Nav, NavItem} from 'react-bootstrap';

export default class TabBar extends React.Component { // need "this"
  render() {
    const tabs = this.props.teams.map((team, index) => {
      const sessionExpired = this.props.sessionsExpired[index];

      let unreadCount = 0;
      if (this.props.unreadCounts[index] > 0) {
        unreadCount = this.props.unreadCounts[index];
      }
      if (this.props.unreadAtActive[index]) {
        unreadCount += 1;
      }

      let mentionCount = 0;
      if (this.props.mentionCounts[index] > 0) {
        mentionCount = this.props.mentionCounts[index];
      }
      if (this.props.mentionAtActiveCounts[index] > 0) {
        mentionCount += this.props.mentionAtActiveCounts[index];
      }

      let badgeDiv;
      if (sessionExpired) {
        badgeDiv = (
          <div className='TabBar-badge TabBar-badge-nomention'/>
        );
      } else if (mentionCount !== 0) {
        badgeDiv = (
          <div className='TabBar-badge'>
            {mentionCount}
          </div>
        );
      }
      const id = 'teamTabItem' + index;

      // draggable=false is a workaround for https://github.com/mattermost/desktop/issues/667
      // It would obstruct https://github.com/mattermost/desktop/issues/478
      return (
        <NavItem
          className='teamTabItem'
          key={id}
          id={id}
          eventKey={index}
          ref={id}
          draggable={false}
        >
          <span
            title={team.name}
            className={unreadCount === 0 ? '' : 'teamTabItem-unread'}
          >
            {team.name}
          </span>
          { ' ' }
          { badgeDiv }
        </NavItem>);
    });
    if (this.props.showAddServerButton === true) {
      tabs.push(
        <NavItem
          className='TabBar-addServerButton'
          key='addServerButton'
          id='addServerButton'
          eventKey='addServerButton'
          title='Add new server'
          draggable={false}
        >
          <Glyphicon glyph='plus'/>
        </NavItem>
      );
    }
    return (
      <Nav
        className='TabBar'
        id={this.props.id}
        bsStyle='tabs'
        activeKey={this.props.activeKey}
        onSelect={(eventKey) => {
          if (eventKey === 'addServerButton') {
            this.props.onAddServer();
          } else {
            this.props.onSelect(eventKey);
          }
        }}
      >
        { tabs }
      </Nav>
    );
  }
}

TabBar.propTypes = {
  activeKey: PropTypes.number,
  id: PropTypes.string,
  onSelect: PropTypes.func,
  teams: PropTypes.array,
  sessionsExpired: PropTypes.array,
  unreadCounts: PropTypes.array,
  unreadAtActive: PropTypes.array,
  mentionCounts: PropTypes.array,
  mentionAtActiveCounts: PropTypes.array,
  showAddServerButton: PropTypes.bool,
  onAddServer: PropTypes.func,
};