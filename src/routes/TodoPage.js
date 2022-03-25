import React from 'react';
import { connect } from 'dva';
import styles from './TodoPage.css';
import TodoTable from '../components/TodoTable';

function TodoPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to TodoPage!</h1>
      <TodoTable />
    </div>
  );
}

TodoPage.propTypes = {
};

export default connect()(TodoPage);
