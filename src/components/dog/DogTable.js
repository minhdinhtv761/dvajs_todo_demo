import React from "react";
import { connect } from "dva";
import { Button, Table, Tag, Space, Image } from 'antd';

const DogTable = ({ dataSource, dispatch }) => {
  function HandleDelete(message) {
    dispatch({
      type: 'dog/delete',
      payload: message,
    });
  }

  const columns = [
    {
      title: 'Dog',
      dataIndex: 'dog',
      key: 'dog',
      render: (text, record) => (
        <Image width={200} src={record.message}></Image>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="large">
          <Button type="link" danger onClick={() => HandleDelete(record.message)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={dataSource} />
  );
}

DogTable.propTypes = {
};

export default DogTable;