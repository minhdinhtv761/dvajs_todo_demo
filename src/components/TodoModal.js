import React from 'react';
import { Button, Form, Input, Modal } from 'antd';
import styles from './TodoModal.css'

const TodoModal = ({ isShow, record, dispatch }) => {
    const [input, setInput] = React.useState({
        title: "",
        description: "",
    });

    function HandleCloseModal() {
        dispatch({
            type: 'modal/hide',
        })
    }

    function HandleSubmitModal(input) {
        dispatch({
            type: 'todo/add',
            payload: input,
        });
        console.log(input);
        HandleCloseModal();
    }

    return (
        <div className={styles.normal}>
            <Modal
                title="Todo Modal"
                visible={isShow}
                width="650px"
                onCancel={HandleCloseModal}
                onOk={() => HandleSubmitModal(input)}
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
                        <Input value={input.title} onChange={(e) => setInput({ ...input, title: e.target.value})} />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please input your description!' }]}
                    >
                        <Input value={input.description} onChange={(e) => setInput({ ...input, description: e.target.value})} />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

TodoModal.propTypes = {
};

export default TodoModal;
