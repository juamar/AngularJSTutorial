(function(){

var app = angular.module('universidadApp',[ ]);

app.controller('listadoCtrl', ['$scope', function($scope){
	
		$scope.listado = ["Fernando Herrera", "Juan Avendaño", "Pedro Montoya", "Maria Huergo"];
        
        $scope.profesores = [{
            nombre : "Fernando Herrera",
            edad : 28,
            clase : "PP"
        },
        {
            nombre : "Juan Avendaño",
            edad : 24,
            clase : "Programación Android"
        },
        {
            nombre : "Pedro Montoya",
            edad : 42,
            clase : "Redes"
        }
    ];
}]);

})();
