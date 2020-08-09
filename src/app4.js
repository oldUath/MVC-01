import './app4.css';
import $ from 'jquery';

const $change = $('#app4 .yuan');

$change.on('mouseenter',()=>{
    $change.addClass('active')
});
$change.on('mouseleave',()=>{
    $change.removeClass('active')
});