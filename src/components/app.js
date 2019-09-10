import { h, Component } from "preact";
import { devToUrl } from "../constant/url";
import Header from "./header";
import Card from "./card";
import style from "./style";

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData(page = 1, top = 1) {
    fetch(`${devToUrl}?page=${page}&top=${top}`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data });
      })
      .catch(error => console.log(error));
  }

  render({}, { data }) {
    return (
      <div id="app">
        <link
          href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Rubik:700&display=swap"
          rel="stylesheet"
        ></link>
        <Header />
        <div class={style.content}>
          <div class={style.contentlist}>
            {data.map(item => (
              <Card data={item} />
            ))}
          </div>
        </div>
        <div class={style.github}>
          <a href="https://github.com/burkaydurdu/Devved" target="_blank">
            <img src="/assets/icons/github.png" width="40" height="40" />
          </a>
        </div>
      </div>
    );
  }
}
export default App;
