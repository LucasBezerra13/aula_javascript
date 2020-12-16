function clicou(){
    
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por visitar nosso site</b>";
    /*alert("Obrigado por visitar o nosso site");*/

}
function redirecionar(){
    /*window.open("https://mail.google.com/");*/
    window.location.href = "https://mail.google.com/";
}

function trocar(element){
    element.innerHTML = "Obrigado por passar o mouse"
    // document.getElementById("mousemove").innerHTML = "<b>Obrigado por visitar nosso site brow</b>";
   /* alert("Foi")*/
}
function voltar(element){
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por visitar</b>";
    element.innerHTML = "Passe o mouse"
}

function load(){
    alert("Página carregada");
}

function funcaochange(element){
    console.log(elemento.value)
}

/*
function soma(n1,n2){
    return n1 + n2;
}
var validar = 0;
function  validaIdade (idade){
    if(idade >= 18){
        validar = true
    }
    else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade")
validaIdade(idade)
console.log(validar);
*/

//alert(soma(5, 10));

/*
var d = new Date();
alert(d.getDay(2));
alert(d.getHours(14:20)))
alert(d.getMinutes,(50)))
*/

/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while(count <= 5){
    console.log(count);
    count = count + 1;
};
*/

/*
var idade = prompt("Qual sua idade");
if(idade >=18){
    alert("maior de 18")
}
else{
    alert("menor de idade")
}
*/

//var fruta = [{nome = "maça", cor = "vermelho"}, {nome:"uva" , cor:"roxa"}];
//console.log(fruta);


/*
var fruta = {nome = "maça", cor = "vermelho"}
console.log(fruta.nome)
*/

//var lista = ["maçã", "uva", "limão"]
//lista.push("laranja");
//lista.pop();

//console.log(lista[0]);
//console.log(lista.toString())
//console.log(lista.join("-"))

//var nome= "Lucas Bezerra"
//var n1 =5;
//var n2 =3;
//var frase = "Japão dé o melhor time do mundo";
//alert("Bem vindo " + nome + " vc tem "+ idade+" anos");
//alert(idade + idade2)
//console.log(nome);
//console.log(n1 * n2)
//console.log(frase.toLoerCase)
//alert(frase.replace("Japão", "Brasil"))