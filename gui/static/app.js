data_from_sensors.onmessage = function(input) {
  values = JSON.parse(input.data)
  document.getElementById("c_temp").innerHTML = values.value;
}
const btn = document.getElementById('myButton');
function toggleText(button_id) {
    var text = document.getElementById(button_id).firstChild;
    text.data = text.data == "Start" ? "Stop" : "Start";
    if (text.data == "Start") {
        btn.addEventListener('click', function onClick() {
            btn.style.backgroundColor = 'salmon';
        });
    }
    else {
        btn.addEventListener('click', function onClick() {
            btn.style.backgroundColor = 'green';
        });
    }

};
const sp = document.getElementById('speed');
const log = document.getElementById('value_speed');
sp.addEventListener('change', updateValue);
function updateValue(e) {
    log.textContent = e.target.value + "  m/s";
};

//document.getElementById('value_speed').innerHTML = sp;
/*
var rangeSlider = function(){
var slider = $('.range-slider-js'),
range = $('.speed'),
value = $('.value_speed text-heading darkened');

slider.each(function(){

value.each(function(){
var value = $(this).prev().attr('value');
$(this).html(value);
});

range.on('input', function(){
$(this).next(value).html(this.value);
});
});
};
rangeSlider();
*/

//btn.addEventListener('click', function onClick() {
//btn.style.backgroundColor = 'salmon';
//btn.style.color = 'white';
//});        
