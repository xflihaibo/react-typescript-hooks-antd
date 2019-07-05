import * as React from 'react';
const {useContext} = React;

const {Provider, Consumer} = React.createContext(123);
function Bar() {
    return <Consumer>{color => <div>{color}</div>}</Consumer>;
}
function Foo() {
    return <Bar />;
}
function Login() {
    return <Foo />;
}

export default Login;
