import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import Date from './data.xml'
function component() {
    var element = document.createElement('div');

    //通过 import 引入 Lodash
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    // 将图像添加到我们现有的 div。
    let myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    console.log(Data);
    return element;
}

document.body.appendChild(component());