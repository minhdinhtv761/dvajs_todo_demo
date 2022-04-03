import React from "react";
import { Button, PageHeader } from 'antd';
import { connect } from 'dva';

const DogHeaderBar = ({ dispatch }) => {
    function HandleAddRandom() {
        dispatch({
            type: 'dog/add',
        })
    }

    return (
        <div>
            <PageHeader
                extra={[
                    <Button key="1" type="primary" onClick={HandleAddRandom}>
                        Add Random
                    </Button>,
                ]}
            />
        </div>
    );
}

DogHeaderBar.propTypes = {
}

function mapStateToProps(state) {
}

export default connect(mapStateToProps)(DogHeaderBar);