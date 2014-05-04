'use strict';
  
angular.module('mean.analytics', [])
  /**** CONTROLLERS ****/
// class controller
.controller('ClassController', function($scope){
      new Morris.Line({
      element: 'class-chart',
       data: [
          { year: '2014-01', class_avg: 24 , state_avg: 21},
          { year: '2014-02', class_avg: 21 , state_avg: 18},
          { year: '2014-03', class_avg: 18, state_avg: 17},
          { year: '2014-04', class_avg: 22 , state_avg: 23},
          { year: '2014-05', class_avg: 23 , state_avg: 20}
        ],
        xkey: 'year',
        ykeys: ['class_avg', 'state_avg'],
        labels: ['Class Average', 'State Average']
      });
})
// Individual student controller
.controller('IndvController', function($scope){
    new Morris.Bar({
    element: 'indv-chart',
   data: [
      {name: 'Tawney',    score: .96,  time: .3},
      {name: 'Homer',     score: .93,  time: .6},
      {name: 'Calvin',    score: .90,  time: .10},
      {name: 'Julian',    score: .90,  time: .8},
      {name: 'Theodore',  score: .88,  time: .8},
      {name: 'Billy',     score: .86,  time: .8},
      {name: 'Michelle',  score: .85,  time: .7},
      {name: 'Alfredo',   score: .84,  time: .7},
      {name: 'Ralph',     score: .84,  time: .4},
      {name: 'Jaoquin',   score: .83,  time: .6},
      {name: 'Anita',     score: .82,  time: .5},
      {name: 'Bev',       score: .80,  time: .5},
      {name: 'Thomas',    score: .79,  time: .5},
      {name: 'Xiuli',     score: .77,  time: .6},
      {name: 'Doug',      score: .76,  time: .9},
      {name: 'Randal',    score: .75,  time: .3},
      {name: 'Pierre',    score: .74,  time: .7},
      {name: 'Nancy',     score: .72,  time: .9},
      {name: 'Morgan',    score: .71,  time: .6},
      {name: 'Cooper',    score: .70,  time: .3},
      {name: 'Logan',     score: .56,  time: .4}
    ],
    xkey: 'name',
    ykeys: ['score', 'time'],
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
.controller('MathGraphController', function($scope){
      new Morris.Line({
      element: 'math-chart',
       data: [
          { year: '2014-01', class_avg: 24 , state_avg: 21},
          { year: '2014-02', class_avg: 21 , state_avg: 18},
          { year: '2014-03', class_avg: 18, state_avg: 17},
          { year: '2014-04', class_avg: 22 , state_avg: 23},
          { year: '2014-05', class_avg: 23 , state_avg: 20}
        ],
        xkey: 'year',
        ykeys: ['class_avg', 'state_avg'],
        labels: ['Class Math Average', 'State Average']
      });
})
.controller('ScienceGraphController', function($scope){
      new Morris.Line({
      element: 'science-chart',
       data: [
          { year: '2014-01', class_avg: 24 , state_avg: 21},
          { year: '2014-02', class_avg: 21 , state_avg: 18},
          { year: '2014-03', class_avg: 18, state_avg: 17},
          { year: '2014-04', class_avg: 22 , state_avg: 23},
          { year: '2014-05', class_avg: 23 , state_avg: 20}
        ],
        xkey: 'year',
        ykeys: ['class_avg', 'state_avg'],
        labels: ['Class Science Average', 'State Average']
      });
})
.controller('GeographyGraphController', function($scope){
      new Morris.Line({
      element: 'geo-chart',
       data: [
          { year: '2014-01', class_avg: 24 , state_avg: 21},
          { year: '2014-02', class_avg: 21 , state_avg: 18},
          { year: '2014-03', class_avg: 18, state_avg: 17},
          { year: '2014-04', class_avg: 22 , state_avg: 23},
          { year: '2014-05', class_avg: 23 , state_avg: 20}
        ],
        xkey: 'year',
        ykeys: ['class_avg', 'state_avg'],
        labels: ['Class Geo Average', 'State Average']
      });
})
.controller('EnglishGraphController', function($scope){
      new Morris.Line({
      element: 'english-chart',
       data: [
          { year: '2014-01', class_avg: 24 , state_avg: 21},
          { year: '2014-02', class_avg: 21 , state_avg: 18},
          { year: '2014-03', class_avg: 18, state_avg: 17},
          { year: '2014-04', class_avg: 22 , state_avg: 23},
          { year: '2014-05', class_avg: 23 , state_avg: 20}
        ],
        xkey: 'year',
        ykeys: ['class_avg', 'state_avg'],
        labels: ['Class English Average', 'State Average']
      });
})
;