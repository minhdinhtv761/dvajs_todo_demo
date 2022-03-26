import React from "react";
import { Button, PageHeader } from 'antd';
import { connect } from 'dva';
import TodoModal from "./TodoModal";

const HeaderBar = ({isShow, dispatch}) => {
    function HandleShowModal() {
        dispatch({
            type: 'modal/show',
        })
    }

    function HandleMarkAllDone() {
        dispatch({
            type: 'todo/markalldone',
        })
    }
    
    function HandleMarkAllUndone() {
        dispatch({
            type: 'todo/markallundone',
        })
    }

    return (
        <div>
            <PageHeader
                extra={[
                    <Button key="3" onClick={HandleMarkAllDone}>Mark all done</Button>,
                    <Button key="2" onClick={HandleMarkAllUndone}>Mark all undone</Button>,
                    <Button key="1" type="primary" onClick={HandleShowModal}>
                        Add Todo
                    </Button>,
                ]}
            />
            <TodoModal isShow={isShow} dispatch={dispatch} />
        </div>
    );
}

HeaderBar.propTypes = {
}

function mapStateToProps(state) {
    return { isShow: state.modal.isShow }
  }

export default connect(mapStateToProps)(HeaderBar);