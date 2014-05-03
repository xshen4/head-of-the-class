'use strict';

angular.module('mean.analytics').controller('AnalyticsController', ['$scope', '$stateParams', '$location', 'Global', 'd3',
    function($scope, $stateParams, $location, Global) {
        $scope.global = Global;
        // Default hard coded menu items for main menu
        // hardcoded student data to test
        $scope.students = [{
            'id': 1,
            'score': 0.5,
            'name': 'Jenny'
        }, {
            'id': 2,
            'score': 0.8,
            'name': 'Matt'
        }];
        $scope.students2 = [{
            id: 1,
            name: 'Jenny'
        }, {
            id: 2,
            name: 'Matt'
        }];
    }
])
    // added on
    .directive('testDir', function(){   
        var students = [{
            'id': 1,
            'score': 0.5,
            'name': 'Jenny'
        }, {
            'id': 2,
            'score': 0.8,
            'name': 'Matt'
        }];
        console.log(students[0].id);
        return {
            template: 'Name:' + students[0].name + 'Id:' + students[0].id
        };
    })
    .directive('d3bars', ['d3Service', function (d3Service) {
          return {
            restrict:'EA',
            scope: {},
            link: function(scope, ele, attrs) {
                d3Service.d3().then(function(d3) {
                var margin = parseInt(attrs.margin) || 20,
                  barHeight = parseInt(attrs.barHeight) || 20,
                  barPadding = parseInt(attrs.barPadding) || 5;
              // d3 is the raw d3 object
                var svg = d3.select(ele[0]).append('svg')
                            .style('width', '100%');
                scope.data = [
                  {name: 'Greg', score: 98},
                  {name: 'Ari', score: 96},
                  {name: 'Q', score: 75},
                  {name: 'Loser', score: 48}
                ];

             scope.render = function(data) {
            // remove all previous items before render
                svg.selectAll('*').remove();

                // If we don't pass any data, return out of the element
                if (!data) return;

                // setup variables
                var width = d3.select(ele[0]).node().offsetWidth - margin,
                    // calculate the height
                    height = scope.data.length * (barHeight + barPadding),
                    // Use the category20() scale function for multicolor support
                    color = d3.scale.category20(),
                    // our xScale
                    xScale = d3.scale.linear()
                      .domain([0, d3.max(data, function(d) {
                        return d.score;
                      })])
                      .range([0, width]);

                // set the height based on the calculations above
                svg.attr('height', height);

                //create the rectangles for the bar chart
                svg.selectAll('rect')
                  .data(data).enter()
                    .append('rect')
                    .attr('height', barHeight)
                    .attr('width', 140)
                    .attr('x', Math.round(margin/2))
                    .attr('y', function(d,i) {
                      return i * (barHeight + barPadding);
                    })
                    .attr('fill', function(d) { return color(d.score); })
                    .transition()
                      .duration(1000)
                      .attr('width', function(d) {
                        return xScale(d.score);
                      });
            };

            });
        }};
   }])
;