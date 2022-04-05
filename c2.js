//Mensaje Bienvenida
alert("!!Bienvenido a CrytpoMarket!!\nAqui usted va a poder comprar Cryptomonedas con Pesos Argentinos")

//Creacion de Usuario
alert("Antes de comenzar es necesario crear su cuenta.\nEmpezemos.")

let usuarioNombre= prompt("Ingrese su nombre: ")
let usuarioTelefono=parseInt(prompt("Ingrese su telefono: "))
let usuarioEmail=prompt("Ingrese su email: ")

//Validacion de Email
let contador=0;
for(let i of usuarioEmail){
    if (i=="@" || i=="."){
        contador++;
    }}

if(contador<2){
    alert("Ingreso un email incorrecto, asegurese que el email contenga un arroba y por lo menos un punto");
    usuarioEmail=prompt("Ingrese nuevamente su email:")
}

//Objeto datos del Usuario
class Usuario{
    constructor(nombre,telefono,email){
        this.nombre=nombre;
        this.telefono=telefono;
        this.email=email;
    }
    saludar(){
        alert("Bienvenido "+(this.nombre).toUpperCase()+" a CryptoMarket")
    }
}

const usuario1= new Usuario(usuarioNombre,usuarioTelefono,usuarioEmail);
usuario1.saludar();

//Lista para guardar datos del usuario
const usuarios=[usuario1]

//Array con parametros de las cryptos
const cryptos=[{nombre:"BITCOIN", par:"BTCUSDT",cotizacion:2000000 },
                {nombre:"ETHEREUM", par:"ETHUSDT",cotizacion:100000},
                {nombre:"USDT", par:"USDT",cotizacion:210},
                {nombre:"DAI", par:"Dai",cotizacion:210}]

//Eleccion de cryptos a comprar por parte del usuario
let cryptoElegida;
const cryptosAcomprar=[]
while( cryptoElegida != ""){
    cryptoElegida=prompt("Ingrese nombre de crypto que desea comprar:\n1)Bitcoin\n2)Ethereum\n3)USDT\n4)Dai"+
    "\nCuando finalize aprete ACEPTAR").toUpperCase();
    console.log(cryptoElegida)
    for(let i of cryptos){
        if (cryptoElegida==i.nombre){
            cryptosAcomprar.push(cryptoElegida)
            console.log(cryptosAcomprar)
        }
    }
}
//Salida con alert para mostrar cryptos elegidas
for(let a=0; a<cryptosAcomprar.length; a++){
    alert("Usted esta por comprar: "+ cryptosAcomprar[a])}
