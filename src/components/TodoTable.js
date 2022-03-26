import React from "react";
import { connect } from "dva";
import { Button, Table, Tag, Space } from 'antd';

const TodoTable = ({ dataSource, dispatch }) => {
  function HandleDelete(key) {
    dispatch({
      type: 'todo/delete',
      payload: key,
    });
  }

  function HandleChangeStatus(key) {
    dispatch({
      type: 'todo/changestatus',
      payload: key
    })
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
          <Button type="link" onClick={() => HandleChangeStatus(record.key)}>{record.tag === true ? "Mark undone" : "Mark done"}</Button>
          {/* <Button type="link" onClick={() => HandleChangeStatus(record.key)}>Change status</Button> */}
          <Button type="link">Edit</Button>
          <Button type="link" danger onClick={() => HandleDelete(record.key)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={dataSource} />
  );
}

TodoTable.propTypes = {
};

function mapStateToProps(state) {
  return { dataSource: state.todo.dataSource }
}

export default connect(mapStateToProps)(TodoTable);