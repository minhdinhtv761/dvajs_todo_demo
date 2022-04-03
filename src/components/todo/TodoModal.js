import React, { useCallback } from 'react';
import { message, Button, Form, Input, Modal } from 'antd';
import styles from './TodoModal.css'
import { useForm } from 'antd/lib/form/Form';

const TodoModal = ({ modal, dispatch }) => {
    const [form] = useForm();
    
    const [data, setData] = React.useState({
        key: "",
        title: "",
        description: "",
        tag: false,
    });

    React.useEffect(() => {
        if (modal.currentTodo) setData(modal.currentTodo);
    }, [modal.currentTodo]);

    function CheckData() {
        if (data.title === "" || !data.title) {
            message.error('Empty title');
            return false;
        } else if (data.description === "" || !data.description) {
            ('Empty description');
            return false;
        }
        return true;
    }

    const  HandleCloseModal = React.useCallback(() => {
        dispatch({
            type: 'modal/hide',
        });
        
        setData({
            ...data,
            key: "",
            title: "",
            description: "",
            tag: false,
        });
    }, [dispatch])

    const HandleSubmitModal = useCallback(() => {
        if (CheckData()) {
            if (modal.currentTodo) {
                dispatch({
                    type: 'todo/edit',
                    payload: data,
                })
            } else {
                dispatch({
                    type: 'todo/add',
                    payload: data,
                });
            }

        HandleCloseModal();
        }
    }, [CheckData, data, dispatch])

    return (
        <div className={styles.normal}>
            <Modal
                title="Todo Modal"
                visible={modal.isShow}
                width="650px"
                onCancel={HandleCloseModal}
                onOk={HandleSubmitModal}
            >
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 50 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Title"
                        name="title"
                    >
                        <Input value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                    >
                        <Input value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

TodoModal.propTypes = {
};

export default TodoModal;
