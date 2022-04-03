import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import styles from './DogPage.css';
import DogTable from '../../components/dog/DogTable';
import DogHeaderBar from '../../components/dog/DogHeaderBar';

const { Header, Content, Footer } = Layout;

function DogPage({ dataSource, dispatch }) {
  return (
    <Layout>
      <Header>
        <DogHeaderBar dispatch={dispatch} />
      </Header>
      <Content style={{padding: "0px 50px"}}>
        <div className={styles.normal}>
          <h1 className={styles.title}>Yay! Welcome to DogPage!</h1>
          <div>
            <DogTable dataSource={dataSource} dispatch={dispatch} />
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

DogPage.propTypes = {
};

function mapStateToProps(state) {
  return { dataSource: state.dog.dataSource }
}

export default connect(mapStateToProps)(DogPage);
