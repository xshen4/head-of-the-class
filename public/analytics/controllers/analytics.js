'use strict';
  
angular.module('mean.analytics', [])
  /**** CONTROLLERS ****/
// class controller
.controller('ClassController', function($scope){
    new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'class-chart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
   data: [
      { year: '2014-01', class_avg: 20 , state_avg: 30},
      { year: '2014-02', class_avg: 10 , state_avg: 20},
      { year: '2014-03', class_avg: 5 , state_avg: 10},
      { year: '2014-04', class_avg: 5 , state_avg: 15},
      { year: '2014-05', class_avg: 20 , state_avg: 5}
    ],

    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['class_avg', 'state_avg'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Class Average', 'State Average']
  });
})
// Individual student controller
.controller('IndvController', function($scope){
    new Morris.Bar({
    // ID of the element in which to draw the chart.
    element: 'indv-chart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
   data: [
      {name: 'Xiuli', score: 70},
      {name: 'Julian', score: 90},
      {name: 'Jaoquin', score: 80},
      {name: 'Pierre', score: 70},
      {name: 'Anita', score: 80},
      {name: 'Meow', score: 70},
      {name: 'Hi', score: 90},
      {name: 'There', score: 80},
      {name: 'Name', score: 70},
      {name: 'Random', score: 80},
      {name: 'Thoughts', score: 70},
      {name: 'Totes', score: 90},
      {name: 'Mcgotes', score: 80},
      {name: 'Cool', score: 70},
      {name: 'Beans', score: 80},
      {name: 'Dude', score: 70},
      {name: 'Cali', score: 90},
      {name: 'Chicago', score: 80},
      {name: 'Moew', score: 70},
      {name: 'To', score: 80},
      {name: 'LAAL', score:40}
    ],

    // The name of the data record attribute that contains x-values.
    xkey: 'name',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['score'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Class Average']
  });
})
// Donut of students
.controller('DailyReportController', function($scope){
  Morris.Donut({
  element: 'donut-example',
  data: [
    {label: "Students Quizzed", value: 24},
    {label: "Total Students", value: 40}
  ]
});
})
// List of students
.controller('StudentListController', function($scope){
  $scope.students=[
    {name : 'Julian', id : 0},
    {name : 'Joaquin', id : 0},
    {name : 'Pierre', id : 0},
    {name : 'Anita', id : 0},
    {name : 'Xiuli', id: 0}
  ];
})
.controller('DropDownController', function($scope){
  $scope.students=[
    {name : 'Julian', id : 0},
    {name : 'Joaquin', id : 0},
    {name : 'Pierre', id : 0},
    {name : 'Anita', id : 0},
    {name : 'Xiuli', id: 0}
  ];
  $('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });
})
;