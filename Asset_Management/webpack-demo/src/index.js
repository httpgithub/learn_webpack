import _ from 'lodash'
import './style.css'
function component() {
    var element = document.createElement('div');

    //通过 import 引入 Lodash
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    return element;
}

document.body.appendChild(component());