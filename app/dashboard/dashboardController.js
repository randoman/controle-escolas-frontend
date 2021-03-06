(function() {
  angular.module('CadastroEscolas').controller('DashboardCtrl', [
    '$http',
    DashboardController
  ])

  function DashboardController($http) {
    const vm = this
    vm.getSummary = function() {
      const url = 'http://localhost:3003/api/escolas/count'
      const url2 = 'http://localhost:3003/api/escolas/turmasCount'
      //extrai a variavel "value" do objeto, nesse caso, o numero de escolas
      //a variavel ira entrar com valor padrao de 0, caso um valor nao seja encontrado
      $http.get(url).then(function(response){
        var data = response.data
        vm.numeroEscolas = data.value
      })
      $http.get(url2).then(function(response){
        var data = response.data
        vm.numeroTurmas = data.value
      })
    }

    vm.getSummary()
  }
})()
