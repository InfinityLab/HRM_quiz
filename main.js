(function(){
	angular.module("hrm_test",[])
	.controller("MainController",["$scope","$http",
		function($scope,$http){
        $scope.chapters = [{
            "id": 1,
            "selected":true
        }];

        $scope.NextQuestion = function(){
        	$scope.Answer = null
	        var len = $scope.chapters.length;
	        checked = []
	        for(i = 0; i < len; i++){
	        	if($scope.chapters[i]["selected"] == true){
	        		checked.push($scope.chapters[i]["id"])
	        	}
	        }
	        var chpt = checked[Math.floor(Math.random() * checked.length)]
      		var Q = Questions[chpt][Math.floor(Math.random() * Questions[chpt].length )]
      		$scope.Question = Q["Q"]
      		$scope.A = Q["A"]
      		$scope.B = Q["B"]
      		$scope.C = Q["C"]
      		$scope.D = Q["D"]
      		$scope.E = Q["E"]
      		$scope.correct = Q["Ans"]
  		}

  		Questions = [
  			[],
  			[
	  			{
	  				"Q":"The fourth phase of HRM is ongoing. Current management thinking holds that:",
	  				"A":"employeesarequitesimilar in termsof therewardsthey seek.",
	  				"B":"employees are motivated primarily by compensation and benefits.",
	  				"C":"employees are often the firm's best competitive advantage.",
	  				"D":"social influences are no longer important to most employees.",
					"E":"the goals and aims of management must be achieved at all costs.",
					"Ans":"C"
	  			}
	  		]
  		]

}])
}())