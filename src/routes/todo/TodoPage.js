import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import styles from './TodoPage.css';
import TodoTable from '../../components/todo/TodoTable';
import TodoHeaderBar from '../../components/todo/TodoHeaderBar';

const { Header, Content, Footer } = Layout;

function TodoPage() {
  return (
    <Layout>
      <Header>
        <TodoHeaderBar />
      </Header>
      <Content style={{padding: "0px 50px"}}>
        <div className={styles.normal}>
          <h1 className={styles.title}>Yay! Welcome to TodoPage!</h1>
          <div>
            <TodoTable />
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

TodoPage.propTypes = {
};

export default connect()(TodoPage);
