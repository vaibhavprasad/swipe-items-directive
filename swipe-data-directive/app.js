// Code goes here
(function() {
  var app = angular.module('selectApp', ['ngAnimate', 'ui.bootstrap']);

  app.controller('moduleCtrl', function($scope) {
    $scope.selectedList = [];
    $scope.itemdata = [{
          id: '1',
          name: 'item1',
          selected: false
        }, {
          id: '2',
          name: 'item2',
          selected: false
        }, {
          id: '3',
          name: 'item3',
          selected: false
        }, {
          id: '5',
          name: 'item5',
          selected: false
        }, {
          id: '6',
          name: 'item6',
          selected: false
        }, {
          id: '7',
          name: 'item7',
          selected: false
        }, {
          id: '8',
          name: 'item8',
          selected: false
        }, {
          id: '9',
          name: 'item9',
          selected: false
        }, {
          id: '10',
          name: 'item10',
          selected: false
        }, {
          id: '11',
          name: 'item11',
          selected: false
        }, {
          id: '12',
          name: 'item12',
          selected: false
        }, {
          id: '13',
          name: 'item13',
          selected: false
        }, {
          id: '14',
          name: 'item14',
          selected: false
        }, {
          id: '15',
          name: 'item15',
          selected: false
        }, {
          id: '16',
          name: 'item16',
          selected: true
        }, {
          id: '17',
          name: 'item17',
          selected: true
        }, {
          id: '18',
          name: 'item18',
          selected: true
        }];
  });

  app.directive('selectData', function() {
    return {
      restrict: 'E',

      scope: {
        title: '@',
        data: '='
      },
      templateUrl: "selectelement.html",
      controller: function($scope, $uibModal, $log) {
        $scope.animationsEnabled = true;
        console.log($scope.title);
        $scope.showModal = function() {
          var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'myModalContent.html',
            controller: function($scope, $uibModalInstance, title, data) {

              $scope.title = title;
              $scope.backupList = angular.copy(data);
              $scope.initialList = data;

              $scope.ok = function() {
                $uibModalInstance.close($scope.initialList);
              };

              $scope.cancel = function() {
                data = angular.copy($scope.backupList);
                console.log($scope.backupList);
                console.log($scope.initialList);              
                $uibModalInstance.dismiss('cancel');
              };
              $scope.addToSelected = function(index) {
                $scope.initialList[index].selected = true;
                console.log($scope.initialList[index]);
              };
              $scope.addToUnselected = function(index) {
                $scope.initialList[index].selected = false;
                console.log( $scope.initialList[index]);
              };
              $scope.selectAll = function() {
                angular.forEach($scope.initialList, function(item){
                  item.selected = true;
                });
              };
              $scope.removeAll = function() {
                angular.forEach($scope.initialList, function(item) {
                  item.selected = false;
                })
              };
            },
            resolve: {
              title: function() {
                return $scope.title;
              },
              data: function() {
                return $scope.data;
              }
            }
          });
          modalInstance.result.then(function(initialList) {
            $scope.readyData = initialList;
            console.log($scope.readyData);
          }, function() {
            console.log("exit modal on cancel");
          });
        };
      },
      link: function() {

      }
    }
  });
})();