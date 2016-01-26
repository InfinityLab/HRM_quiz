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
	  			},
	  			{
	  				"Q":"Which of thefollowingapply toemployersand employeesacrossCanada?",
	  				"A":"Employment equity legislation",
	  				"B":"Employment Insurance and human rights legislation",
	  				"C":"Employment Insurance and Canada/Quebec Pension Plan",
	  				"D":"Employment Insurance and employment legislation",
	  				"E":"the Canada Labour Code",
	  				"Ans":"C"
	  			},
	  			{
	  				"Q":"Taking a stand on anti- animal testing, human rights protection, and environmental conservation is an example of a firm's",
	  				"A":"mission statement",
	  				"B":"code of ethics",
	  				"C":"ethics policy",
	  				"D":"desire for legal compliance",
	  				"E":"sense of social responsibility",
	  				"Ans":"E"
	  			},
	  			{
	  				"Q":"If you were an HR professional in the 1940s or 1950s you would likely have had the following activities added onto your portfolio of existing responsibilities:",
	  				"A":"running the payroll department",
	  				"B":"focusing on proactive management",
	  				"C":"handling orientation and performance appraisals",
	  				"D":"administering benefits",
	  				"E":"hiring and firing",
	  				"Ans":"C"
	  			},
	  			{
	  				"Q":"The Sandwich Generation refers to",
	  				"A":"Generation Y",
	  				"B":"employees who have to bring their lunch to work because they can't afford to eat out.",
	  				"C":"individualswho arecaught in thegeneration gap",
	  				"D":"employees with older and younger coworkers.",
	  				"E":"individuals with responsibilities for young dependents and elderly relatives",
	  				"Ans":"E"
	  			},
	  			{
	  				"Q":"Canadians who are functionally illiterate are:",
	  				"A":"able to perform routinetechnical taskswithout assistance.",
	  				"B":"involved in academic upgrading through their place of employment",
	  				"C":"exacting a toll on organizations' productivity levels.",
	  				"D":"older Canadians who did not have the opportunity to attend school.",
	  				"E":"no longer in thework force.",
	  				"Ans":"C"
	  			},
	  			{
	  				"Q":"Being completely familiar with employment legislation, HR policies and procedures, collective agreements, and the outcome of recent arbitration hearings and court decisions is most closely related with which of the following HR activities?",
	  				"A":"formulating policiesand procedures",
	  				"B":"serving as a change agent",
	  				"C":"serving as a consultant",
	  				"D":"providing services",
	  				"E":"offering advice",
	  				"Ans":"E"
	  			},
	  			{
	  				"Q":"Revlex Inc. has decided to allow its front line workers to make decisions regarding the ordering of certain suppliesthat wereformerly madeby managers. This initiative is an example of",
	  				"A":"a change in organizational climate.",
	  				"B":"job restructuring.",
	  				"C":"workplace incentives",
	  				"D":"employee empowerment",
	  				"E":"management development",
	  				"Ans":"D"
	  			},
	  			{
	  				"Q":"The third major phase in personnel management was a direct result of:",
	  				"A":"government intervention following the depression.",
	  				"B":"the increasing amount of government legislation.",
	  				"C":"the impact of the human relations movement.",
	  				"D":"a desire for professionalism.",
	  				"E":"an increase in unionizing activities.",
	  				"Ans":"B"
	  			},
	  			{
	  				"Q":"The process of analyzing manufacturing processes, reducing production costs, and compensating employees based on their performance levels is found in:",
	  				"A":"scientific management",
	  				"B":"the scientific movement",
	  				"C":"the human resources movement",
	  				"D":"the human relations movement",
	  				"E":"noneof theabove",
	  				"Ans":"A"
	  			},
	  			{
	  				"Q":"Characteristics of a profession include:",
	  				"A":"many diversepointsof view.",
	  				"B":"certification of members.",
	  				"C":"theexistenceof acommon body of knowledgeand certification of members.",
	  				"D":"government regulation",
	  				"E":"competing codes of ethics",
	  				"Ans":"A"
	  			},
	  			{
	  				"Q":"The second phase of personnel management arrived in the 1930s with:",
	  				"A":"a decrease in unionizing activities and minimum wage legislation.",
	  				"B":"health and safety legislation.",
	  				"C":"minimum wagelegislation.",
	  				"D":"a decrease in unionizing activities.",
	  				"E":"the decreasing momentum of the scientific management movement.",
	  				"Ans":"C"
	  			},
	  			{
	  				"Q":"Human resources practices that support strategy include:",
	  				"A":"staffing practices",
	  				"B":"performance management",
	  				"C":"rewardspractices.",
	  				"D":"production scheduling",
	  				"E":"policies and procedures",
	  				"Ans":"D"
	  			},
	  			{
	  				"Q":"Which of the following was given emphasisin Frederick Taylor'stheory on HRM?",
	  				"A":"empowerment of employees",
	  				"B":"work conditions",
	  				"C":"compensation tied to performance",
	  				"D":"job rotation",
	  				"E":"cross- functional cooperation",
	  				"Ans":"C"
	  			},
	  			{
	  				"Q":"Human resources management refers to:",
	  				"A":"concepts and techniques used in leading people at work.",
	  				"B":"the management of people in organizations.",
	  				"C":"concepts and techniques for organizing work activities.",
	  				"D":"all managerial activities.",
	  				"E":"management techniques for controlling people at work.",
	  				"Ans":"B"
	  			},
	  			{
	  				"Q":"The ratio of an organization's outputs such as goods and its inputs such as capital is which of the following:",
	  				"A":"thelabour market.",
	  				"B":"productivity",
	  				"C":"workforce diversity",
	  				"D":"outsourcing",
	  				"E":"an internal environmental influence",
	  				"Ans":"B"
	  			},
	  			{
	  				"Q":"Questions concerning ________ are at the core of a growing controversy brought about by the new information technologies",
	  				"A":"employee stress levels",
	  				"B":"speed, accuracy, and efficiency",
	  				"C":"data control, accuracy, right to privacy and ethics",
	  				"D":"job satisfaction",
	  				"E":"privacy and social responsibility",
	  				"Ans":"C"
	  			},
	  			{
	  				"Q":"Characteristics of Generation X employees include:",
	  				"A":"eagerness to make a contribution",
	  				"B":"sense of security linked to corporate loyalty",
	  				"C":"adesirefor work/lifebalance.",
	  				"D":"action- orientedness.",
	  				"E":"mastering of technology",
	  				"Ans":"C"
	  			},
	  			{
	  				"Q":"The core values, beliefs, and assumptions that are widely shared by members of an organization are known as:",
	  				"A":"the strategic plan",
	  				"B":"organizational climate",
	  				"C":"organizational culture",
	  				"D":"the mission statement",
	  				"E":"the pervading atmosphere.",
	  				"Ans":"C"
	  			},
	  			{
	  				"Q":"Mary Parker Follett was a:",
	  				"A":"strong advocate of scientific management.",
	  				"B":"believer in the motivational power of money.",
	  				"C":"strong advocate of authoritarian management",
	  				"D":"supporter of the view that workers are a factor of production",
	  				"E":"believer in self- management",
	  				"Ans":"E"
	  			},
	  			{
	  				"Q":"If you weretheHRadvisor of acompany wherethemajority of theworkforceconsisted of employees born after 1980, what initiatives would you recommend providing to keep the group challenged?",
	  				"A":"continuous skill development",
	  				"B":"empowerment and challenging work",
	  				"C":"flexible work arrangements",
	  				"D":"job security",
	  				"E":"eldercare benefits",
	  				"Ans":"B"
	  			},
	  			{
	  				"Q":"The company's plan for how it will balance its internal strengths and weaknesses with external opportunities and threats in order to maintain competitive advantage is known a",
	  				"A":"policiesand procedures",
	  				"B":"HR strategy",
	  				"C":"environmental scanning",
	  				"D":"strategy",
	  				"E":"none of above",
	  				"Ans":"D"
	  			},
	  			{
	  				"Q":"The third phase of personnel management was concerned largely with",
	  				"A":"corporate contribution",
	  				"B":"health and safety legislation compliance",
	  				"C":"benefits administration",
	  				"D":"payroll",
	  				"E":"corporate contribution and proactive management",
	  				"Ans":"E"
	  			},
	  			{
	  				"Q":"The management philosophy based on the belief that attitudes and feelings of workers are important and deserve more attention is known as:",
	  				"A":"socialism",
	  				"B":"psychology",
	  				"C":"scientific management",
	  				"D":"scientific management",
	  				"E":"the human resources movement",
	  				"Ans":"C"
	  			},
	  			{
	  				"Q":"pproximately ________ percent of the Canadian population could be members of visible minorities by 2017",
	  				"A":"50",
	  				"B":"20",
	  				"C":"40",
	  				"D":"30",
	  				"E":"none of above",
	  				"Ans":"B"
	  			},

	  		]
  		]

}])
}())