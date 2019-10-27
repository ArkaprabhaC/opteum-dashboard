import React from  'react';
import {Col, Table, Card} from 'antd';
import 'antd/dist/antd.css';
import "./CardComponent.css";


const CardComponent = (props) =>{
      
    const columns = [
        {
          title: 'Expiry',
          dataIndex: 'expiry',
        },
        {
          title: 'Strike',
          dataIndex: 'strike',
        },
        {
          title: 'Action',
          dataIndex: 'action',
        },
        {
            title: 'LTP',
            dataIndex: 'ltp',
        },
        {
            title: 'Moneyness',
            dataIndex: 'moneyness',
        },
        {
            title: 'OI',
            dataIndex: 'oi',
        },
        {
            title: 'Lot Size',
            dataIndex: 'lotsize',
        },
      ];

    return(  
      <Col md={12} xs={24} className="card_margin">
        <Card title={props.title} extra={<span>SPOT: {props.spot}</span>}> 
            <Table dataSource={props.children} columns={columns} pagination={false} style={{overflowX:"scroll"}}/>
            <div>
                <span className="card_footer_investmentreqd">Investment: <strong>Rs {props.investment_reqd}</strong> </span>
                <span className="card_footer_avgprofit">Projected avg profit: <strong>{props.avg_profit}</strong> </span>
            </div>
        </Card>
      </Col>        
    );
}

export default CardComponent;