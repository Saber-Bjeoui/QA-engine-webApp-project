var app = $.sammy(function() {
 
 this.get(‘#home/’, function() {
 //your function
 });
 this.get(‘#login/’, function() {
 //your function 
 });
 this.get(‘#contact/’, function() {
 //your function
 });
});
$(function() {
 app.run(‘#/about/’);
});