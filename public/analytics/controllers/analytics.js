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
      { year: '2014-01', class_avg: 24 , state_avg: 21},
      { year: '2014-02', class_avg: 21 , state_avg: 18},
      { year: '2014-03', class_avg: 18, state_avg: 17},
      { year: '2014-04', class_avg: 22 , state_avg: 23},
      { year: '2014-05', class_avg: 23 , state_avg: 20}
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
      {name: 'Xiuli',     score: .77,  time: .6},
      {name: 'Julian',    score: .90,  time: .8},
      {name: 'Jaoquin',   score: .83,  time: .6},
      {name: 'Pierre',    score: .74,  time: .7},
      {name: 'Anita',     score: .82,  time: .5},
      {name: 'Randal',    score: .75,  time: .3},
      {name: 'Homer',     score: .93,  time: .6},
      {name: 'Theodore',  score: .88,  time: .8},
      {name: 'Nancy',     score: .72,  time: .9},
      {name: 'Ralph',     score: .84,  time: .4},
      {name: 'Thomas',    score: .79,  time: .5},
      {name: 'Tawney',    score: .96,  time: .3},
      {name: 'Michelle',  score: .85,  time: .7},
      {name: 'Cooper',    score: .70,  time: .3},
      {name: 'Billy',     score: .86,  time: .8},
      {name: 'Doug',      score: .76,  time: .9},
      {name: 'Calvin',    score: .90,  time: .10},
      {name: 'Bev',       score: .80,  time: .5},
      {name: 'Morgan',    score: .71,  time: .6},
      {name: 'Alfredo',   score: .84,  time: .7},
      {name: 'Logan',     score: .56,  time: .4}
    ],

    // The name of the data record attribute that contains x-values.
    xkey: 'name',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['score', 'time'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Class Average', 'Response Time']
  });
})
// Donut of students
.controller('DailyReportController', function($scope){
  Morris.Donut({
  element: 'donut-example',
  data: [
    {label: 'Students Quizzed', value: 24},
    {label: 'Total Students', value: 40}
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