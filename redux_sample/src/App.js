import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

function App(props) {
  // 関数の引数としてpropsを用いる必要がある。
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome {props.username}
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  username: state.user.username
})
// propsとして使えるようにする為に必要な関数

export default connect(mapStateToProps)(App);
