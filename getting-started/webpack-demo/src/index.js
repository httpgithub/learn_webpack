function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    //在index.html 中通过<script src="https://unpkg.com/lodash@4.16.6"></script>  隐式依赖lodash
    //Lodash使用了一个简单的 _ 符号，就像Jquery的 $ 一样，十分简洁。 参考：https://www.jianshu.com/p/d46abfa4ddc9
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());