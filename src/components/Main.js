import React from "react";
import 'antd/dist/antd.less';
import '../../index.css';
import { Layout } from 'antd';

import {PageHeader} from './Header';
import {ItemInput} from './Content/ItemInput';

const { Content, Footer } = Layout;


export const Main = () => {
  return (
    <Layout className="layout">
      <PageHeader />
      <Content style={{ padding: '0 50px' }}>
        <ItemInput />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}
