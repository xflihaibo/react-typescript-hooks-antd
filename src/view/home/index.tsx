import * as React from 'react';
import history from '../../router/history';
const {useState} = React;
import {Button} from 'antd';

import './index.less';

const hendleGoBack = () => {
    console.log(history);
    history.goBack();
};

const Home = () => {
    const [home, setHome] = useState(0);
    return (
        <div className="tms-home-container">
            <h1> 首页：{home}</h1>
            <button onClick={() => setHome(home + 1)}> reduce</button>
            <Button onClick={hendleGoBack}> 后退</Button>
        </div>
    );
};

export default Home;
