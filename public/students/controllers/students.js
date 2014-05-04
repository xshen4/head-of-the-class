'use strict';
  
angular.module('mean.students', [])
  /**** CONTROLLERS ****/
// Controller for student 
.controller('StudentController', function($scope){
    $scope.course_data = [
      {subject: 'math', value : 80},
      {subject: 'science', value : 80},
      {subject: 'geography', value : 80},
      {subject: 'english', value : 80}
    ];

    $scope.state_data = 25;

    new Morris.Donut({
    element: 'math-progress',
      data: [
        {label: 'Your score', value: 80},
        {label: 'Average Score', value: 95}
      ]
    });
    new Morris.Donut({
    element: 'science-progress',
      data: [
        {label: 'Students Quizzed', value: 24},
        {label: 'Total Students', value: 40}
      ]
    });
    new Morris.Donut({
    element: 'geography-progress',
      data: [
        {label: 'Students Quizzed', value: 24},
        {label: 'Total Students', value: 40}
      ]
    });
    new Morris.Donut({
    element: 'english-progress',
      data: [
        {label: 'Students Quizzed', value: 24},
        {label: 'Total Students', value: 40}
      ]
    });
})
.controller('UserInfoController', function($scope){
  $scope.data = {id: 0, name: 'Xiuli'};
})
// Individual student controller
.controller('StudentCompareController', function($scope){
    new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'compare-chart',
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