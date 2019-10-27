import React from 'react';
import 'antd/dist/antd.css';
import CardContainer from  "./CardContainer";
import { Tabs } from 'antd';


const { TabPane } = Tabs;


const TabbedComponent = (props)=>{
    return(
        <Tabs type="card">
            <TabPane tab="Tab 1" key="1"> <CardContainer selected_level1 = {props.selected} selected_level2 = "1"/> </TabPane>
            <TabPane tab="Tab 2" key="2"> <CardContainer selected_level1 = {props.selected} selected_level2 = "2"/> </TabPane>
            <TabPane tab="Tab 3" key="3"> <CardContainer selected_level1 = {props.selected} selected_level2 = "3"/> </TabPane>
            <TabPane tab="Tab 4" key="4"> <CardContainer selected_level1 = {props.selected} selected_level2 = "4"/> </TabPane>
        </Tabs>
    );
}


export default TabbedComponent;