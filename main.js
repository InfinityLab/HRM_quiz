(function(){
	angular.module("hrm_test",[])
	.controller("MainController",["$scope","$http",
		function($scope,$http){
		var Q = null
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
      		Q = Questions[chpt][Math.floor(Math.random() * Questions[chpt].length )]
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
  				$scope.feedback = "correct"
  			}else{
  				$scope.feedback = "you are wrong"
  			}
  		}

  		Questions = [
  			[],
  			// Chapter 1
  			[
	  			{
	  				"Q":"The fourth phase of HRM is ongoing. Current management thinking holds that:",
	  				"A":"employees are quite similar in termsof therewardsthey seek.",
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
	  				"C":"the existence of acommon body of knowledgeand certification of members.",
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
	  				"C":"adesirefor work/life balance.",
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
	  				"Q":"Approximately ________ percent of the Canadian population could be members of visible minorities by 2017",
	  				"A":"50",
	  				"B":"20",
	  				"C":"40",
	  				"D":"30",
	  				"E":"none of above",
	  				"Ans":"B"
	  			},
	  			{
	  				"Q":"The single most important factor governing the size and composition of the labour force is:",
	  				"A":"population growth",
	  				"B":"immigration patterns.",
	  				"C":"diversity",
	  				"D":"the birth rate.",
	  				"E":"thedeath rate",
	  				"Ans":"A"
	  			},
	  			{
	  				"Q":"When unemployment rates fall",
	  				"A":"training and retention strategiesincreasein importance.",
	  				"B":"there is always a greater demand for servicesand training strategiesincrease",
	  				"C":"there is always a greater demand for services",
	  				"D":"retention strategies increase in importance",
	  				"E":"unions are more likely to organize workers",
	  				"Ans":"A"
	  			},
	  			{
	  				"Q":"You are the Director of Human Resources at a real estate development company based in Toronto. To attract and retain employees born after 1981 which of the following would be the most strategic to implement?",
	  				"A":"a comprehensive pension plan",
	  				"B":"more opportunity to work independently",
	  				"C":"greater job security",
	  				"D":"an environmental stew ardship program",
	  				"E":"eldercare",
	  				"Ans":"D"
	  			},
	  			{
	  				"Q":"The Hawthorne Studies are closely linked with:",
	  				"A":"the human resources movement.",
	  				"B":"Mary Parker Follett.",
	  				"C":"Frederick Taylor.",
	  				"D":"scientific management",
	  				"E":"the human relations movement.",
	  				"Ans":"E"
	  			},
	  			{
	  				"Q":"You are the HR generalist of a national railway.Which employment legislation would you refer to when it comes to employee relations issues within the organization?",
	  				"A":"provincial",
	  				"B":"provincial/territorial",
	  				"C":"territorial",
	  				"D":"federal",
	  				"E":"noneof theabove",
	  				"Ans":"D"
	  			},
	  			{
	  				"Q":"Management practicesin thelate1800sand early 1900semphasized:",
	  				"A":"higher wages.",
	  				"B":"task simplification and performance- based pay",
	  				"C":"workplace harmony",
	  				"D":"self-management",
	  				"E":"empowerment",
	  				"Ans":"B"
	  			},
	  			{
	  				"Q":"The practice of contracting with outside vendors to handle specified functions on a permanent basis is known as",
	  				"A":"contract administration",
	  				"B":"hiring temporary employees",
	  				"C":"payroll and benefits administration",
	  				"D":"labour- management relations.",
	  				"E":"outsourcing",
	  				"Ans":"E"
	  			},
	  			{
	  				"Q":"As the HR consultant of a newly formed company, A run has planned a presentation for the line managers on organizational culture and the purpose it serves. Which of the following points would A run haveincluded in hispresentation?",
	  				"A":" fostering employee loyalty and commitment and providing employees with a sense of direction",
	  				"B":"succession planning",
	  				"C":"creating aworldlier atmosphere",
	  				"D":"fostering employee loyalty and commitment",
	  				"E":"increasing training levels",
	  				"Ans":"A"
	  			},
	  			{
	  				"Q":"The globalization of markets and manufacturing has vastly increased",
	  				"A":"employee turn over",
	  				"B":"international competition",
	  				"C":"the prices of products and services.",
	  				"D":"the quality of products and services.",
	  				"E":"standardization practices.",
	  				"Ans":"B"
	  			},
	  			{
	  				"Q":"HR department staff members are traditionally involved in key operational responsibilities. Which of the following is an operational responsibility?",
	  				"A":"collecting metrics",
	  				"B":"analyzing metrics",
	  				"C":"setting goals and objectives",
	  				"D":"interpreting health and safety legislation",
	  				"E":"interpreting human right laws",
	  				"Ans":"A"
	  			},
	  			{
	  				"Q":"The HR manager of Smith & Yu company was heavily involved in a downsizing exercise of the company's sales force due to an economic dow nturn. He was also involved in arranging for outplacement services and employee retention programs as well as restructuring of the business followingthedownsizing.Thisisan exampleof HR's role in:",
	  				"A":"environmental scanning",
	  				"B":"environmental scanning and executing strategy",
	  				"C":"operational activities",
	  				"D":"formulating strategy.",
	  				"E":"executing strategy",
	  				"Ans":"E"
	  			},
	  			{
	  				"Q":"Joe Brown was hired by a manufacturing firm as a supervisor . During his first few weeks as a supervisor he realised that employees who report to him expect a lot of direction from him and expect all of the decision making to be done by him . Joe Brown decide to train his employees take on additional responsibilities and amke decisions within  a specific scope. Joe Brown is :",
	  				"A":"outsourcing hisstaff.",
	  				"B":"empowering his staff",
	  				"C":"reducing his staff",
	  				"D":"embracing his staff.",
	  				"E":"noneof theabove.",
	  				"Ans":"B"
	  			},
	  			{
	  				"Q":"The tendency of firms to extend their salesor manufacturing to new markets abroad is known as",
	  				"A":"domestication",
	  				"B":"globalization",
	  				"C":"product diversification",
	  				"D":"cultural diversity",
	  				"E":"international marketing",
	  				"Ans":"B"
	  			},
	  			{
	  				"Q":"Mortgage Financial needs to recruit 10 employees for a period of three months to assist its team of underwriters during the busy season.Thecompany doesnot want to provide these 10 employees regular full-time or part-time status. As the HR manager, what would you suggest the company do in this situation?",
	  				"A":"use contingent employees",
	  				"B":"develop a retention plan",
	  				"C":"do nothing about the situation",
	  				"D":"outsource the underwriting function",
	  				"E":"increase the workload of staff",
	  				"Ans":"A"
	  			},
	  			{
	  				"Q":"The broad objectives of HR associations across the country include:",
	  				"A":"serving as a voice for HR practitioners",
	  				"B":"skills updating",
	  				"C":"assisting in the provision of training in the field of HR.",
	  				"D":"providing opportunities for information exchange.",
	  				"E":"all of the above.",
	  				"Ans":"E"
	  			},
	  			{
	  				"Q":"Payoff sassociated with properly implemented ethics programs include:",
	  				"A":"increased stakeholder confidence",
	  				"B":"increased profits.",
	  				"C":"greater client/customer and employee loyalty.",
	  				"D":"decreased vulnerability to legal liability issues.",
	  				"E":"all of above.",
	  				"Ans":"E"
	  			},
	  			{
	  				"Q":"Baby boomers:",
	  				"A":"resulted in afocuson recruitment and selection in organizationsin the past",
	  				"B":"are currently causing a great deal of competition for advancement",
	  				"C":"were born between 1946and 1965",
	  				"D":"will beincreasing rapidly in numbersover thenext few decades.",
	  				"E":"have had very high fertility rates.",
	  				"Ans":"C"
	  			},
	  			{
	  				"Q":" If you were the HR advisor of a company where the majority of the workforce consisted of employees born before 1965 what initiatives would you recommend providing to keep the group challenged ?",
	  				"A":"job security",
	  				"B":"eldercare and pension benefits",
	  				"C":"flexiblework arrangements",
	  				"D":"independent work",
	  				"E":"onsite gym facilities",
	  				"Ans":"B"
	  			},
	  			{
	  				"Q":'The prevailing atmosphere or "internal weather" that exists in an organization and its impact on employees is',
	  				"A":"a myth about organizations.",
	  				"B":"the need for a corporate culture.",
	  				"C":"the importance of having a mission statement.",
	  				"D":"organizational climate.",
	  				"E":"the need for performance appraisals.",
	  				"Ans":"D"
	  			},
	  			{
	  				"Q":"Which of the following statements is true of the Hawthorne Studies?",
	  				"A":"Worker morale was greatly influenced by such factors as the supervisor's leadership style",
	  				"B":"Researchers were not interested in the factors influencing worker morale and productivity",
	  				"C":"Economic incentives were found to be the most closely linked to productivity.",
	  				"D":"The conclusions had little impact on management practices.",
	  				"E":"Treating workerswith dignity and respect wasfound to haveaweak correlation to",
	  				"Ans":"A"
	  			},
	  			{
	  				"Q":"Which of the following statementsistrue?",
	  				"A":"Ethnic diversity is increasing.Currently, more than 200 different ethnic groups are represented among Canadian residents.",
	  				"B":"Ethnic diversity is starting to level off in Canada",
	  				"C":"The proportion of visible and ethnic minorities entering the Canadian labour market peaked in the mid-1990s and is gradually decreasing.",
	  				"D":"Most visibleand ethnicminority Canadiansareprofessionals.",
	  				"E":"The majority of Canadians are of French or British origin.",
	  				"Ans":"A"
	  			},
	  			{
	  				"Q":"Technological advances in manufacturing have",
	  				"A":"eliminated many blue-collar jobs.",
	  				"B":"resulted in a decline in the impact of workforce diversity",
	  				"C":"decreased the importance of white-collar jobs.",
	  				"D":"led to significant increases in the employment of persons with disabilities.",
	  				"E":"had little impact on service- sector firms.",
	  				"Ans":"A"
	  			},
	  			{
	  				"Q":"The Canadian national body through which all provincial and specialist HR associations are affiliated is called the",
	  				"A":"Canadian Management Association.",
	  				"B":"Human Resources Professionals Association of Ontario",
	  				"C":"Canadian Council of Human Resources Associations",
	  				"D":"International Personnel Management Association-Canada",
	  				"E":"Society for Human ResourceManagement.",
	  				"Ans":"C"
	  			},
	  			{
	  				"Q":"Rita is the HR Director of a manufacturing company. She recently undertook research to identify competitor compensation and incentive plans, information about pending legislative changes and availability of talent in the labour market for the upcoming strategic planning meeting. Rita was conducting",
	  				"A":"environmental scanning",
	  				"B":"an external market survey.",
	  				"C":"an envrionmental study.",
	  				"D":"an employee engagement survey.",
	  				"E":"an external opportunities/threats study.",
	  				"Ans":"A"
	  			},
	  			{
	  				"Q":"The characteristics of the work force are known as:",
	  				"A":"demographics",
	  				"B":"organizational climate",
	  				"C":"diversity",
	  				"D":"unionization",
	  				"E":"population trends",
	  				"Ans":"A"
	  			},
	  			{
	  				"Q":'Any attribute that humans are likely to use to tell them, "that person is different from me," and thus includes such factors such as race, gender, age, values and cultural norms, is known as',
	  				"A":"characteristics",
	  				"B":"differences",
	  				"C":"perceptions",
	  				"D":"minorities",
	  				"E":"diversity",
	  				"Ans":"E"
	  			},
	  			{
	  				"Q":"The ratio of an organization's outputs to its inputs is known as:",
	  				"A":"productivity",
	  				"B":"the supply and demand equation",
	  				"C":"competitive ability",
	  				"D":"the equity ratio",
	  				"E":"the labour market",
	  				"Ans":"A"
	  			},
	  			{
	  				"Q":"External environmental influences having a direct or indirect influence on HRM include which of the following",
	  				"A":"organizational culture",
	  				"B":"increasing empowerment",
	  				"C":"organizational climate",
	  				"D":"labour market conditions",
	  				"E":"decreasing work forcediversity",
	  				"Ans":"D"
	  			},
	  			{
	  				"Q":"the early 1900s,personnel administration, as it was then called:",
	  				"A":"was closely tied to union-management relations",
	  				"B":"served a key advisory role in organizations",
	  				"C":"focussed on trying to improve the human element in organizations.",
	  				"D":"played a very subservient role in organizations.",
	  				"E":"was highly influenced by laws and regulations",
	  				"Ans":"D"
	  			},
	  			{
	  				"Q":"Economic downturns are generally associated with",
	  				"A":"an overwhelming number of job applicants for vacancies",
	  				"B":"high turnover",
	  				"C":"lower unemployment rates",
	  				"D":"skills shortages",
	  				"E":"more competition for qualified employees",
	  				"Ans":"A"
	  			},
	  			{
	  				"Q":"The knowledge, education, training, skills, and expertise of a firm's workers is known as",
	  				"A":"production capital",
	  				"B":"human capital",
	  				"C":"management's philosophy",
	  				"D":"physical capital",
	  				"E":"cultural diversity",
	  				"Ans":"B"
	  			},
	  			{
	  				"Q":"You havebeen tasked with building employeeengagement at thefirm you work for. Strategic human resources initiatives you would consider implementing include:",
	  				"A":"employee relations activity",
	  				"B":"employee recognition programs",
	  				"C":"job design indicators",
	  				"D":"diversity programs",
	  				"E":"employee recognition programs and management development programs",
	  				"Ans":"E"
	  			},
	  			{
	  				"Q":"A company utilizes a system to measure the impact of Human Resources which balances measures relating to financial results, customers, internal business processes and human capital management. This system is knows as the:",
	  				"A":"HRIS",
	  				"B":"Human Capital Index",
	  				"C":"balanced scorecard",
	  				"D":"balanced strategy",
	  				"E":"noneof theabove.",
	  				"Ans":"C"
	  			},
	  			{
	  				"Q":"The goal of HRM is to align people practices to organizational strategy to produce behaviours required to achieve organizational goals",
	  				"A":"True",
	  				"B":"False",
	  				"C":"",
	  				"D":"",
	  				"E":"",
	  				"Ans":"A"
	  			},
	  			{
	  				"Q":"HRM has evolved over the last few decades due to economic forces such as globalization, technological changes, and intense competition, all of which make human capital more important",
	  				"A":"True",
	  				"B":"False",
	  				"C":"",
	  				"D":"",
	  				"E":"",
	  				"Ans":"B"
	  			},
	  			{
	  				"Q":"Management can loseitsauthority and power by empowering itsemployees",
	  				"A":"True",
	  				"B":"False",
	  				"C":"",
	  				"D":"",
	  				"E":"",
	  				"Ans":"B"
	  			},
	  			{
	  				"Q":"The growing emphasis on education and human capital reflects several social and economic factors, such as the increase in primary-sector employment.",
	  				"A":"True",
	  				"B":"False",
	  				"C":"",
	  				"D":"",
	  				"E":"",
	  				"Ans":"B"
	  			},
	  			{
	  				"Q":"HR responsibilities have shifted from operational to strategic responsibilities which involve formulating and executing organizational strategy.",
	  				"A":"True",
	  				"B":"False",
	  				"C":"",
	  				"D":"",
	  				"E":"",
	  				"Ans":"A"
	  			},
	  			{
	  				"Q":"Technological advances will continue to shift employment from some occupations to others, while contributing to a decline in productivity",
	  				"A":"True",
	  				"B":"False",
	  				"C":"",
	  				"D":"",
	  				"E":"",
	  				"Ans":"B"
	  			},
	  			{
	  				"Q":"Recent research indicates that there is a strong positive relationship between employee engagement and organizational performance.",
	  				"A":"True",
	  				"B":"False",
	  				"C":"",
	  				"D":"",
	  				"E":"",
	  				"Ans":"A"
	  			},
	  			{
	  				"Q":"Asan HRprofessional in today'sorganizations, you need to beconcerned with ethical issuessuch as security of information, employee and client privacy, governance and conflicts of interest.",
	  				"A":"True",
	  				"B":"False",
	  				"C":"",
	  				"D":"",
	  				"E":"",
	  				"Ans":"A"
	  			},
	  			{
	  				"Q":"An HR professional can build employeeengagement by coachinglinemanagerstobuild trusting relationshipswith their employees, establishing recognition programsand providing management development programs.",
	  				"A":"True",
	  				"B":"False",
	  				"C":"",
	  				"D":"",
	  				"E":"",
	  				"Ans":"A"
	  			},
	  			{
	  				"Q":"HR professionals are increasingly expected by their employers to be change agents who lead the organization and its employees through change",
	  				"A":"True",
	  				"B":"False",
	  				"C":"",
	  				"D":"",
	  				"E":"",
	  				"Ans":"A"
	  			}
	  		]
  		]

}])
}())