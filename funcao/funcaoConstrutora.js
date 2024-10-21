function Carro(velocidadeMaxima = 200, delta = 5){
  // atributo privado
  let velocidadeAtual = 0

  // metodo publico
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima){
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMaxima
    }
  }

  this.frear = function(){
    if (velocidadeAtual - delta >= 0){
      velocidadeAtual -= delta
    } else{
      velocidadeAtual == 0
    }
  }

  // metodo publico
  this.getVelocidadeAtual = function(){
    return velocidadeAtual
  }
}

const uno = new Carro // Instanciado sem parenteses pois utilizou os valores padrão
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350,50) // Instanciado com novos valores diferentes do padrão
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
ferrari.frear()
console.log(ferrari.getVelocidadeAtual())