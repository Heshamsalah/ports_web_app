import React, {Component} from 'react';
import Ports from './containers/Ports/indexPage';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import Login from './containers/Auth/login'
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Dropdown
} from 'semantic-ui-react'


const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
    vertical
    visible={visible}
    width='thin'
  >
    <Menu.Item as='a'>
      <Icon name='home' />
      Home
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='gamepad' />
      Games
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='camera' />
      Channels
    </Menu.Item>
  </Sidebar>
)

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}

class App extends Component {
  state = {
    animation: 'overlay',
    direction: 'left',
    dimmed: false,
    visible: false,
    ports: []
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleAnimationChange = animation => {
    this.setState(prevState => ({ animation, visible: !prevState.visible }));
  }

  handleDimmedChange = (e, { checked }) => this.setState({ dimmed: checked })

  handleDirectionChange = direction => () => this.setState({ direction, visible: false })

  render() {
    const { animation, dimmed, direction, visible } = this.state
    const { activeItem } = this.state

    return (
      <Router>

        <Route
          path="/"
          exact
          render={props =>
            localStorage.getItem("accessToken") ? (
              <Ports />
            ) : (
              <Redirect
                to={{ pathname: '/signin', state: { from: props.location } }}
              />
            )
          }
        />
        <Route path="/signin/" component={Login} />

        {/* <Sidebar.Pushable as={Segment}>
        <Menu size='mini' fixed>
          <Menu.Item 
            name='overlay'
            active={activeItem === 'overlay'}
            onClick={() => {
              // this.handleItemClick();
              this.handleAnimationChange('overlay');
            }}
          />
          <Menu.Item 
            name='push'
            active={activeItem === 'push'}
            onClick={(e) => {
              // this.handleItemClick(e, e.target.name);
              console.log("push");
              this.handleAnimationChange('push');
            }}
          />
          <Menu.Item 
            name='scale down'
            active={activeItem === 'scale down'}
            onClick={() => {
              // this.handleItemClick();
              this.handleAnimationChange('scale down');
            }}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position='right'>
            <Menu.Item>
              <Button primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
          <VerticalSidebar animation={animation} direction={direction} visible={visible} />

          <Sidebar.Pusher dimmed={dimmed}>
            <Segment basic>
              <Ports ports={this.state.ports} />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable> */}
      </Router>
    );
  }
}



export default App;
