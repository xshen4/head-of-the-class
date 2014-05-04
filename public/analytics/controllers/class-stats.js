'use strict';
  
  angular.module('mean.analytics', ['d3'])
  /**** CONTROLLERS ****/
  .controller('ClassStatController', function($scope) {
    // get data from db here 
    $scope.data = [
      {name: 'Xiuli', score: 70},
      {name: 'Julian', score: 90},
      {name: 'Jaoquin', score: 80},
      {name: 'Pierre', score: 70},
      {name: 'Anita', score: 80},
      {name: 'Losaaa', score:40}
      ];
})
.controller('SubjectStatController', function($scope) {
  $scope.data = [
    {name: 'Science', score: 90},
    {name: 'Math', score: 80},
    {name: 'English', score: 70},
    {name: 'History', score: 80},
    {name: 'Music', score:50}
    ];
})
/**** DIRECTIVES *****/
// Class stat directive.  Shows individual users. 
  .directive('classStats', ['$window', '$timeout', 'd3Service', 
    function($window, $timeout, d3Service) {
      return {
        restrict: 'A',
        scope: {
          data: '=',
          label: '@',
          onClick: '&'
        },
        link: function(scope, ele, attrs) {
          d3Service.d3().then(function(d3) {
          console.log(d3);
            var renderTimeout;
            var margin = parseInt(attrs.margin) || 20,
                barHeight = parseInt(attrs.barHeight) || 20,
                barPadding = parseInt(attrs.barPadding) || 5;
   
            var svg = d3.select(ele[0])
              .append('svg')
              .attr('width', 500)
              .attr('height', 500)
              .style('width', '100%');
   
            $window.onresize = function() {
              scope.$apply();
            };
   
            scope.$watch(function() {
              return angular.element($window)[0].innerWidth;
            }, function() {
              scope.render(scope.data);
            });
   
            scope.$watch('data', function(newData) {
              scope.render(newData);
            }, true);
   
            scope.render = function(data) {
              svg.selectAll('*').remove();
   
              if (!data) return;
               if (renderTimeout) clearTimeout(renderTimeout);
   
              renderTimeout = $timeout(function() {
   
                var width = d3.select(ele[0])[0][0].offsetWidth - margin,
                    height = scope.data.length * (barHeight + barPadding),
                    color = d3.scale.category20(),
                    xScale = d3.scale.linear()
                      .domain([0, d3.max(data, function(d) {
                        return d.score;
                      })])
                      .range([0, width]);
  // set the height based on the calculations above
                svg.attr('height', height);
   
    //create the rectangles for the bar chart
                  svg.selectAll('rect')
                    .data(data)
                    .enter()
                      .append('rect')
                      .on('click', function(d,i) {
                        return scope.onClick({item: d});
                      })
                      .attr('height', barHeight)
                      .attr('width', 140)
                      .attr('x', Math.round(margin/2))
                      .attr('y', function(d,i) {
                        return i * (barHeight + barPadding);
                      })
                      .attr('fill', function(d) {
                        return color(d.score);
                      })
                      .transition()
                        .duration(1000)
                        .attr('width', function(d) {
                          return xScale(d.score);
                        });
                  svg.selectAll('text')
                    .data(data)
                    .enter()
                      .append('text')
                      .attr('fill', '#fff')
                      .attr('y', function(d,i) {
                        return i * (barHeight + barPadding) + 15;
                      })
                      .attr('x', 15)
                      .text(function(d) {
                        return d.name + ' (scored: ' + d.score + ')';
                      });
                }, 200);
              };
            });
          }};
  }])
  // Subject matter analysis.  Shows subjects
  .directive('subjectStats', ['$window', '$timeout', 'd3Service', 
    function($window, $timeout, d3Service) {
      return {
        restrict: 'A',
        scope: {
          data: '=',
          label: '@',
          onClick: '&'
        },
        link: function(scope, ele, attrs) {
          d3Service.d3().then(function(d3) {
          console.log(d3);
            var renderTimeout;
            var margin = parseInt(attrs.margin) || 20,
                barHeight = parseInt(attrs.barHeight) || 20,
                barPadding = parseInt(attrs.barPadding) || 5;
   
            var svg = d3.select(ele[0])
              .append('svg')
              .attr('width', 500)
              .attr('height', 500)
              .style('width', '100%');
   
            $window.onresize = function() {
              scope.$apply();
            };
   
            scope.$watch(function() {
              return angular.element($window)[0].innerWidth;
            }, function() {
              scope.render(scope.data);
            });
   
            scope.$watch('data', function(newData) {
              scope.render(newData);
            }, true);
   
            scope.render = function(data) {
              svg.selectAll('*').remove();
   
              if (!data) return;
               if (renderTimeout) clearTimeout(renderTimeout);
   
              renderTimeout = $timeout(function() {
   
                var width = d3.select(ele[0])[0][0].offsetWidth - margin,
                    height = scope.data.length * (barHeight + barPadding),
                    color = d3.scale.category20(),
                    xScale = d3.scale.linear()
                      .domain([0, d3.max(data, function(d) {
                        return d.score;
                      })])
                      .range([0, width]);
    
   
  // set the height based on the calculations above
                svg.attr('height', height);
   
  //create the rectangles for the bar chart
                svg.selectAll('rect')
                  .data(data)
                  .enter()
                    .append('rect')
                    .on('click', function(d,i) {
                      return scope.onClick({item: d});
                    })
                    .attr('height', barHeight)
                    .attr('width', 140)
                    .attr('x', Math.round(margin/2))
                    .attr('y', function(d,i) {
                      return i * (barHeight + barPadding);
                    })
                    .attr('fill', function(d) {
                      return color(d.score);
                    })
                    .transition()
                      .duration(1000)
                      .attr('width', function(d) {
                        return xScale(d.score);
                      });
                svg.selectAll('text')
                  .data(data)
                  .enter()
                    .append('text')
                    .attr('fill', '#fff')
                    .attr('y', function(d,i) {
                      return i * (barHeight + barPadding) + 15;
                    })
                    .attr('x', 15)
                    .text(function(d) {
                      return d.name + ' (scored: ' + d.score + ')';
                    });
              }, 200);
            };
          });
        }};
  }])
  // Line chart
/* .directive('subjectStats', ['$window', '$timeout', 'd3Service', 
    function($window, $timeout, d3Service) {
      return {
        restrict: 'A',
        scope: {
          data: '=',
          label: '@',
          onClick: '&'
        },
        link: function(scope, ele, attrs) {
          d3Service.d3().then(function(d3) {
          console.log(d3);

          });
        };
      }])*/
;