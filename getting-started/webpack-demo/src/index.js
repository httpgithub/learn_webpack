import _ from 'lodash'
function component() {
    var element = document.createElement('div');

    //通过 import 引入 Lodash
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());