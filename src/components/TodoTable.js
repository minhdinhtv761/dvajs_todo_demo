import React from "react";
import { connect } from "dva";
import { Table, Tag, Space } from 'antd';

const TodoTable = ({ dispatch, todo }) => {
  function handleDelete(key) {
    dispatch({
      type: 'todo/delete',
      payload: key,
    });

    console.log(todo);
  }

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Tag',
      key: 'tag',
      dataIndex: 'tag',
      render: tag => {
        let color = tag ? 'green' : 'volcano';
        return (
          <Tag color={color} key={tag}>
            {tag ? 'DONE' : 'UNDONE'}
          </Tag>
        );
      }
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="large">
          <a>Edit</a>
          <a onClick={() => handleDelete(record.key)}>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={todo.dataSource} />
    </div>
  );
}

TodoTable.propTypes = {
};

function mapStateToProps(state) {
  return { todo: state.todo }
}

export default connect(mapStateToProps)(TodoTable);