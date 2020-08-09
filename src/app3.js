import './app3.css'
import $ from 'jquery'
const $square = $('#app3 .div1')
$square.on('click',()=>{
    $square.toggleClass('move')
})