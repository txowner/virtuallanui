import "./style.css";
import "./app.css";

// import logo from "./assets/images/logo-universal.png";
import { Submit } from "../wailsjs/go/main/App";
import { main } from "../wailsjs/go/models";

document.querySelector("#app").innerHTML = `
  <div class="container">
      <h1>Virtuallan客户端</h1>

      <form id="connect-form">
          <div class="row">
              <div class="grid-label">
                  <label for="target">服务器地址: </label>
              </div>
              <div class="grid-input">
                  <input id="target" class="input" name="target" placeholder="请输入服务器地址" />
              </div>
          </div>
          <div class="row">
              <div class="grid-label">
                  <label for="username">用户名: </label>
              </div>
              <div class="grid-input">
                  <input id="username" class="input" name="username" placeholder="请输入用户名" />
              </div>
          </div>
          <div class="row">
              <div class="grid-label">
                  <label for="password">密码: </label>
              </div>
              <div class="grid-input">
                  <input id="password" class="input" name="password" type="password" placeholder="请输入密码" />
              </div>
          </div>
          <div class="row">
              <div class="grid-label">
                  <label for="key">密钥: </label>
              </div>
              <div class="grid-input">
                  <input id="key" class="input" name="key" type="password" placeholder="请输入密钥" />
              </div>
          </div>
          <div class="row">
              <div class="grid-label">
                  <label for="log-level">日志级别: </label>
              </div>
              <div class="grid-input">
                  <select id="log-level" name="log-level">
                      <option value="info">INFO</option>
                      <option value="debug">DEBUG</option>
                  </select>
              </div>
          </div>
          <div class="row">
              <button id="submit" type="submit">连接</button>
          </div>
      </form>

      <p id="result"></p>
  </div>
`;
// document.getElementById("logo").src = logo;

let targetElement = document.getElementById("target");
let usernameElement = document.getElementById("username");
let passwordElement = document.getElementById("password");
let keyElement = document.getElementById("key");
let logLevelElement = document.getElementById("log-level");

let submitElement = document.getElementById("submit");
let resultElement = document.getElementById("result");

async function submit() {
  if (submitElement.innerText === "已连接") {
    submitElement.innerText = "连接";
    resultElement.innerText = "";
    return;
  }

  let sp = new main.SubmitParams();
  sp.target = targetElement.value;
  sp.username = usernameElement.value;
  sp.password = passwordElement.value;
  sp.key = keyElement.value;
  sp.log_level = logLevelElement.value;

  // Check if the input is empty
  if (sp.target === "" || sp.username === "" || sp.password === "" || sp.key === "") return;

  // Call App.Submit(SubmitParams)
  try {
    Submit(sp)
      .then((result) => {
        submitElement.innerText = "已连接";
        resultElement.innerText = result;
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (err) {
    console.error(err);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#connect-form").addEventListener("submit", (e) => {
    e.preventDefault();
    submit();
  });
});
