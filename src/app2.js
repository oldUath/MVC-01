import './app2.css';
import $ from "jquery"

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')
//监听父元素,e.currentTarget获取点击了哪个元素
$tabBar.on('click', 'li', (e) => {
    const $li = $(e.currentTarget);
    const index = $li.index();
    console.log(index);

    // 最好不要用这两个
    // // eq是等于第几个的意思,.siblings()是他的兄弟节点
    // $tabContent.children().eq(index)
    //     .css({ display: 'block' })
    //     .siblings().css({ display: 'none' })
    // // eq是等于第几个的意思,.siblings()是他的兄弟节点
    // $tabContent.children().eq(index)
    //     .show()
    //     .siblings().hide()

    // js只管js的代码，不管css
    $tabContent.children().eq(index)
        .addClass('active')
        .siblings().removeClass('active');

    // 点击li换色
    $li.addClass('selected').siblings().removeClass('selected');
})