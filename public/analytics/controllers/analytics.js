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
      {name: 'Xiuli', score: 77},
      {name: 'Julian', score: 90},
      {name: 'Jaoquin', score: 83},
      {name: 'Pierre', score: 74},
      {name: 'Anita', score: 82},
      {name: 'Randal', score: 75},
      {name: 'Homer', score: 93},
      {name: 'Theodore', score: 88},
      {name: 'Nancy', score: 72},
      {name: 'Ralph', score: 84},
      {name: 'Thomas', score: 79},
      {name: 'Tawney', score: 96},
      {name: 'Michelle', score: 85},
      {name: 'Cooper', score: 70},
      {name: 'Billy', score: 86},
      {name: 'Doug', score: 76},
      {name: 'Calvin', score: 90},
      {name: 'Bev', score: 80},
      {name: 'Morgan', score: 71},
      {name: 'Alfredo', score: 84},
      {name: 'Logan', score: 56}
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
// List of students
.controller('StudentListController', function($scope){
  $scope.students=[
    {name : 'Xiuli Shen', id : 0},
    {name : 'Xiuli Shen', id : 0},
    {name : 'Xiuli Shen', id : 0},
    {name : 'Xiuli Shen', id : 0},
    {name : 'Xiuli Shen', id : 0},
    {name : 'Xiuli Shen', id : 0},
    {name : 'Xiuli Shen', id : 0},
    {name : 'Xiuli Shen', id : 0},
    {name : 'Xiuli Shen', id : 0},
    {name : 'Xiuli Shen', id : 0},
    {name : 'Xiuli Shen', id : 0}    
  ];
})
;