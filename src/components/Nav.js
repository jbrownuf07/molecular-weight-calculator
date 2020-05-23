import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <Menu fluid vertical tabular>
            <Menu.Item
                as={ Link }
                name='home'
                to=''>
                <Icon name='home' />
            </Menu.Item>
            <Menu.Item
                as={ Link }
                name='calculator'
                to='calculator'>
                <Icon name='calculator' />
            </Menu.Item>
            <Menu.Item
                as={ Link }
                name='about'
                to='about'>
                <Icon name='info' />
            </Menu.Item>
        </Menu>
    );
}

export default Nav;