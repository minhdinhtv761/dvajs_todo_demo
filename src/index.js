import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
    initialState: {
        todo: {
            dataSource: [
                {
                    key: 1,
                    title: 'John Brown',
                    description: 'New York No. 1 Lake Park',
                    tag: true,
                },
                {
                    key: 2,
                    title: 'Jim Green',
                    description: 'London No. 1 Lake Park',
                    tag: false,
                },
                {
                    key: 3,
                    title: 'Joe Black',
                    description: 'Sidney No. 1 Lake Park',
                    tag: true,
                },
            ],
        },
        modal: {
            isShow: false,
        },
    }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/todo').default);
app.model(require('./models/modal').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
