(function(angular, undefined) {
  angular.module("parqueaderoApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);