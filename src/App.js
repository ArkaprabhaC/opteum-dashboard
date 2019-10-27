import React, {Component} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Menu } from 'antd';
import CustomMenu from "./Components/CustomMenu"
import avatar from "./assets/avatar2.png";
import background from "./assets/trianglify-lowres.png";
import TabbedComponent from './Components/TabbedComponent';
import { Tabs } from 'antd';

const {Footer, Sider, Content } = Layout;
const { TabPane } = Tabs;


class App extends Component {

  constructor(props){
    super(props);

    this.styles = {
      sider: {
        paddingTop: '40px',
        height: '100vh',
        position: 'fixed',
        zIndex: 6,
        background: "#80ff80",
        left: 0
      }
    }

  }

  render(){
   return (
    <Layout style={{overflow:"hidden"}}>
      <CustomMenu/>
       <Layout style={{minHeight:"100vh"}}>
        <Sider breakpoint="md" collapsedWidth="0" width={250} style={this.styles.sider}>
          
          <img src={avatar} className="sider_avatar" alt="user-icon"/>
          <p className="sider_greet">Hello Arkaprabha</p>

          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0, background: "#80ff80" }}
          >
          
              <Menu.Item key="1">Dashboard</Menu.Item>
              <Menu.Item key="2">Profile</Menu.Item>
              <Menu.Item key="3">Packages</Menu.Item>
              <Menu.Item key="4">Performance Reporting</Menu.Item>
           
          </Menu>
        </Sider>

        <Layout className="content_layout">
          <Content className="content_content">

            <h3> Tuesday, Sep 3, 2019 Recommendation | Data updated at: <strong>22:30</strong></h3>
            
            <Tabs type="card">
              <TabPane tab="Tab 1" key="1"> <TabbedComponent selected = "1"/> </TabPane>
              <TabPane tab="Tab 2" key="2"> <TabbedComponent selected = "2"/> </TabPane>
              <TabPane tab="Tab 3" key="3"> <TabbedComponent selected = "3"/> </TabPane>
              <TabPane tab="Tab 4" key="4"> <TabbedComponent selected = "4"/> </TabPane>
            </Tabs>

            
          </Content>

          <Footer style={{ textAlign: 'center', backgroundImage: `url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>Sigmanteum Corporation © 2019</Footer>

        </Layout>
      </Layout>

      

  </Layout>
  );
  }
}

export default App;
