(function(){
	angular.module("hrm_test",[])
	.controller("MainController",["$scope","$http",
		function($scope,$http){
    $scope.show_c = 0;
    $scope.show_q = 0;
		var Q = null
        $scope.mistake = [];
        $scope.chapters = [{
            "id": 1,
            "selected":true
        },{
        	"id": 2,
        	"selected":false
        },{
          "id": 7,
          "selected":false
        },{
          "id":8,
          "selected":false
        },{
          "id":9,
          "selected":false
        },{
          "id":10,
          "selected":false
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
	        chpt = checked[Math.floor(Math.random() * checked.length)]
          qst = Math.floor(Math.random() * Questions[chpt].length )
      		Q = Questions[chpt][qst]
      		$scope.Question = Q["Q"]
      		$scope.A = Q["A"]
      		$scope.B = Q["B"]
      		$scope.C = Q["C"]
      		$scope.D = Q["D"]
      		$scope.E = Q["E"]
      		$scope.correct = Q["Ans"]
  		}

  		$scope.ans = function(answer){
  			if (Q["Ans"] === answer){
  				$scope.feedback = "CORRECT"
  			}else{
  				$scope.feedback = "WRONG"
          var stored = false;
          for (var i = 0; i < $scope.mistake.length; i++) {
            if($scope.mistake[i]["chapter"] == chpt && $scope.mistake[i]["question"] == qst){
              stored = true;
            }
          };

          if(!stored) $scope.mistake.push({"chapter":chpt, "question":qst, "text":$scope.Question})
  			}
  		}

      $scope.show_qst = function (c,q){
        console.log($scope.show_c+ " "+ c)
        console.log($scope.show_q+ " "+ q)
        $scope.show_c = c;
        $scope.show_q = q;
        console.log($scope.show_c+ " "+ c)
        console.log($scope.show_q+ " "+ q)
      }
      $scope.hide_qst = function (){
        $scope.show_c = 0;
        $scope.show_q = 0;
      }
      $scope.show = function(c,q){
        console.log($scope.show_c+ " "+ c)
        return $scope.show_c === c && $scope.show_q === q;
      }

      $scope.ToQst = function(c,q){
          chpt = c;
          qst = q;
          Q = Questions[c][q]
          $scope.Question = Q["Q"]
          $scope.A = Q["A"]
          $scope.B = Q["B"]
          $scope.C = Q["C"]
          $scope.D = Q["D"]
          $scope.E = Q["E"]
          $scope.correct = Q["Ans"]
          $scope.Answer = null;
      }
}])
}())