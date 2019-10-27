import React, {Component, Fragment} from 'react'
import { Menu, Button, Drawer } from 'antd';
import 'antd/dist/antd.css';

import './CustomMenu.css';

class CustomMenu extends Component {
    state = {
        visible: false
      }
      showDrawer = () => {
        this.setState({
          visible: true,
        });
      };
    onClose = () => {
        this.setState({
          visible: false,
        });
      };

    render(){
        return(
            <Fragment>
                <Menu 
                    mode="horizontal"
                    theme="dark"
                    className="fullScreenNav"
                    selectedkeys="1"
                    style={{lineHeight:"62px", paddingRight: "20px", position:"fixed"}}
                >
            
                    <Menu.Item key="1" style={{float:"right"}}>Products</Menu.Item>
                    <Menu.Item key="2" style={{float:"right"}}>Company</Menu.Item>
                    <Menu.Item key="3" style={{float:"right"}}>Pricing</Menu.Item>
                    <Menu.Item key="4" style={{float:"right"}}>Sign Up</Menu.Item>
                                    
                </Menu>
                <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                    Menu
                </Button>
                <Drawer
                    title="Sigmanteum TM"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                        <Menu 
                            mode="vertical"       
                        >
                    
                            <Menu.Item key="1">Products</Menu.Item>
                            <Menu.Item key="2">Company</Menu.Item>
                            <Menu.Item key="3">Pricing</Menu.Item>
                            <Menu.Item key="4">Sign Up</Menu.Item>
                                            
                        </Menu>
                </Drawer>
            </Fragment>
        );
    }
    
}

export default CustomMenu;