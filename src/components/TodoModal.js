import React from 'react';
import { Button, Form, Input, Modal } from 'antd';
import styles from './TodoModal.css'

const TodoModal = ({ isShow, record, dispatch }) => {
    function HandleCloseModal() {
        dispatch({
            type: 'modal/hide',
        })
    }

    function HandleSubmitModal() {
        HandleCloseModal();
    }

    return (
        <div className={styles.normal}>
            <Modal
                title="Todo Modal"
                visible={isShow}
                width="650px"
                onCancel={HandleCloseModal}
                onOk={HandleSubmitModal}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 50 }}
                    initialValues={{ remember: true }}
                    onFinish={() => { }}
                    onFinishFailed={() => { }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: 'Please input todo title!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please input your description!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item>
                        <Button style={{ width: "100%" }} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

TodoModal.propTypes = {
};

export default TodoModal;
