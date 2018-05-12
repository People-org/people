$(function () {
  $("#datepicker, #datepicker1, #datepicker2, #datepicker3, #datepicker4, #datepicker5, #datepicker6, #datepicker7, #datepicker8, #datepicker9, #datepicker10").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());
});