app.controller('mainPage', ['$rootScope','$scope', function($rootScope,$scope)
{
	$scope.listOfUsers = [
							{id : 1 , name: "Dinesh" , address:"Jaju" , email:"dineshjaju@gmail.com"},
							{id : 2 , name: "Poojitha" , address:"Nagandla" , email:"PoojithaNagandla@gmail.com"},
						  ];

	$scope.master = {id :null , name: "" , address:"" , email:"newone@gmail.com"};

	$scope.userDetails = angular.copy($scope.master);

	$scope.validate = function ()
	{
		alert('User Name is ' + $scope.userDetails.name + ' Address is ' + $scope.userDetails.address + ' Email is ' + $scope.userDetails.email );
	}


	$scope.reset = function()
	{
		$scope.userDetails = angular.copy($scope.master);
		 $scope.myForm.$setPristine(); //reset Form
	}


	$scope.add = function()
	{
		console.log($scope.userDetails.id);
		if($scope.userDetails.id == null)
		{
			$scope.userDetails.id = $scope.listOfUsers.length + 1 ;
			$scope.listOfUsers.push($scope.userDetails);
		}else
		{
			for(i = 0; i < $scope.listOfUsers.length;i++ )
			{
				if($scope.userDetails.id == $scope.listOfUsers[i].id )
				{
					$scope.listOfUsers[i] = $scope.userDetails;
					$scope.reset();
				}
			}
		}
	}

	$scope.edit = function(id)
	{
		console.log(id);
		$scope.userDetails = angular.copy($scope.listOfUsers[id-1]);
	}

	$scope.remove = function(id)
	{
		console.log(id);
		for(var i = 0; i < $scope.listOfUsers.length; i++){
			if($scope.listOfUsers[i].id === id) {
				$scope.listOfUsers.splice(i,1);
                         if($scope.userDetails.id === id)
                         {
                         	$scope.reset();
                         }
                         break;
                     }
                 }
             }

}]);