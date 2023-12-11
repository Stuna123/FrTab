/* John codeur, video 2 
console.log("Hello, Francis Tabora");
*/

/*Video 3
    var name = "Francis Tabora";
console.log(name);
*/

/*Video 4
//Pour afficher le nombre y
var x = 12;
var y = 25.63;
console.log(y);

//Pour convertir en string
Ici l'affichage aura la couleur noir pour dire que c'est un string
var x = 12;
var y = 25.63;
var xToString = x.toString();
console.log(xToString);

Ici l'affichage aura la couleur bleu pour dire que c'est un nombre
Deuxième remarque, 
    la variable qui était un nombre deviendra un string à partir d'un nombre
var x = 12;
var y = 25.63;
var xToString = x.toString();
console.log(x);

//Pour envoyer la longueur de la chaine
var name = 'Tabora Francis';
var nameLength = name.length;
console.log(nameLength);

//Convertir un string en int
var xString = '12';
var xNumber = parseInt(xString);
console.log(xString);

//Convertir un string en int
var xString = '12';
var xNumber = parseInt(xString);
console.log(xNumber);

//Retourner une position d'un string ou l'occurence d'un string
var myString = 'Hello Francis';
var position = myString.indexOf("Francis");
console.log(myString);

//Pour remplacer un string
var myString = 'Hello Francis';
var NewString = myString.replace("Francis", 'Tabora');
console.log(NewString);

//Coller deux string
var string1 = "Hello";
var string2 = "Francis";
console.log(string1+ " " +string2);
*/

/*
***************************************************************************
Video 5
//Creer et afficher une variable
var x;
x = 12;
console.log(x);

//Operation
var x = 12, y = 5;
var result = x+y; // On peut mettre -,*,/,%
console.log(result);
    
    
    //Dans l'incrementation x++ ou ++x
    //  x++ : On donne la valeur à x et on incremente après
    //  ++x : On incremente d'abord puis on donne la valeur à x
    // var x = 12, y = 5;
    // var result = ++x;
    // console.log(result);
    
    var x = 12;
    var y = 5;
    x--;
    console.log(x);
    
    var x = 12;
    var y = 5;
    x += 1; // x -= 1; | x *= 2; | x %=5;
    console.log(x);
*/

/*    
***************************************************************************
Video 7
var x = 5;
//On pause la question pour savoir si x est égal à 5
var myBoolean = (x===5);
console.log(myBoolean);

//On demande si x est égal à 5 mais en format string
// " === " : strictement, ceci verifie si les variables sont le même
//x==="5", on verifie également le type de la variable 
//On compare 5 number à 5 string
//Pour que cela soit vrai il faut avoir 5 en string cad x = "5"
var x = 5;
var myBoolean = (x==="5");
console.log(myBoolean);

//Signe des comparaison : >, <, >=, <=, !=, ==

var x = 5;
var y = 12;

console.log("---------------");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log("---------------");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log("---------------");
console.log(!true);
console.log(!false);

*/
    
/*
Video 8

var speed = 120;

if(speed<80)
{
    if(speed<50)
    {
        console.log("Accelere un petit peu");            
    }
    else
    {
        console.log("Tu roules a la bonne vitesse");
    }
        
}
else if(speed < 100)
{
    console.log("Il faut que tu ralentisses un petit peu");
}
else
{
    console.log("Tu roules beaucoup trop vite, c'est dangereux!");    
}
**************************************************************************
var favoriteColor = "yellow"
switch(favoriteColor)
{
    case "yellow":
    case "blue":
        console.log("Wouah! Le bleu c'est trop beau");
        break;
    case "red":
        console.log("J'aimerais bien une voiture rouge");
        break;
    default:
        console.log("Je ne connais pas ta couleur");
}

*/    

/*
 Video 9 : boucles

var number = 0;
while(number<3)
{
    console.log(number);
    number++;
}

var number = 0;
//On execute au moins une fois
do
{
    console.log(number);
    number++;
}while(number>0 && number<3)

for(var number = 0; number <5; number++)
{
    
//        On initialise number à 0
//        On teste la condition qui est : number < 5
//        On entre dans la boucle pour executer le code
//        On incrémente number après avoir executer le code dans la boucle
//        
//        On augmente number à 1 qui vaut maintenant 1
//        On teste la condition qui est : number < 5
//        On entre dans la boucle pour executer le code
//        On incrémente number après avoir executer le code dans la boucle
//        
//        On augmente number à 1 qui vaut maintenant 2
//        On teste la condition qui est : number < 5
//        On entre dans la boucle pour executer le code
//        On incrémente number après avoir executer le code dans la boucle
//        
//        On augmente number à 1 qui vaut maintenant 3
//        On teste la condition qui est : number < 5
//        On entre dans la boucle pour executer le code
//        On incrémente number après avoir executer le code dans la boucle
//        
//        On augmente number à 1 qui vaut maintenant 4
//        On teste la condition qui est : number < 5
//        On entre dans la boucle pour executer le code
//        On incrémente number après avoir executer le code dans la boucle
//        
//        Quand number vaut 5, on quitte la boucle. Pourquoi ?
//        -> La condition ne plus valable car 5 ne pas strictement inf à 5
//        Donc, on quitte la boucle avec comme resultat
//            -> 0 1 2 3 4
//        * Ceci aurait été vrai si 5 était vrai si la condition était 5<=5
    
    console.log(number);
}

*/

/*
    Partie 2
   ***********
   Vidéo 1
   
   function multiply(number1,number2,number3)
{
    
    return number1*number2*number3;
}

var a = 3;
var b = 6;
var result = multiply(a,b,a);
console.log(result);
*/

/*
Partie 2
**************************************************************************
Video 2 : function 

function multiply(number1,number2,number3)
{
    var resultMultiply = number1*number2*number3;
    return resultMultiply;
}
*/

/*
Partie 2
**************************************************************************
Video 3 : Scoope
var a = 5;
var b = 6;
var result = multiply(a,b,a);
console.log(result);

//Pour rendre global resultMultiply
function multiply(number1,number2,number3)
{
    resultMultiply = number1*number2*number3;
    return resultMultiply;
}

var a = 5;
var b = 6;
var result = multiply(a,b,a);
console.log(resultMultiply);

*/

/*
Partie 2
***************************************************************************   
Video 3 : Array[]
//Syntaxe var Array = [valeur1, valeur2, ... , valeurN];
//Pour afficher un element Array[0] || Array[N] || Array[length+N]
var fruits = ["Pomme","Banane","Orange","Citron", ''];
//length permet d'afficher la longueur du tableau
console.log(fruits.length);

var fruits = ["Pomme","Banane","Orange","Citron"];
//pop, permet de supprimer le dernier element 
console.log(fruits);
fruits.pop();
console.log(fruits); 

var fruits = ["Pomme","Banane","Orange","Citron"];
//length permet d'afficher la longueur du tableau
for(var i = 0; i <= fruits.length; i++)
{
    console.log(fruits[i]);
}

//push, permet d'ajouter un element dans le tableau
fruits.push("Ananas");
console.log(fruits);

//slice (n): permet de retourner une valeur du tableau à partir de l'indice à n element
//slice (n,n): permet de retourner une valeur du tableau à partir de l'indice à n-1 element
var fruits = ["Pomme","Banane","Orange","Citron", "Kiwi"];
var agrumes = fruits.slice(1,3); //Ou fruits.slice(1)
console.log(agrumes);

//IL y'a 3 parties dans ce tableau qui sont numeroté comme suit : (0,0), (1,0), (2,0)

var myArray = [[0,1], [5,7,8], [12,18]];
console.log(myArray[1][2]);
*/
/*
Partie 2
***************************************************************************   

Video 4 : Object
*****************
Syntaxe :

var object = {
    propertyName1 (ou attribut) : propertyValue1,
    propertyName2 : propertyValue2,
    method1: function(){
    
    }
};
Pour afficher : 
    object.attribut
    object["nom attribut"] ou object['nom attribut'] 
    
//On crée un objet dog qui a 3 attributs
var dog = {
    name: "Choupette",
    color: "white",
    age: "4 ans"
};
//Pour chaque execution de la boucle, property prend la valeur de l'attribut et l'affiche
for(var property in dog)
{
    console.log(dog[property]);
}
    
    Autre façon d'écrire
var dog = new Object();
dog.name = "Choupette";
dog.color = "white";
dog.age = 5;

for(var property in dog)
{
    console.log(dog[property]);
}

Creation d'une methode
***********************

var dog = new Object();
dog.name = "Choupette";
dog.color = "white";
dog.age = 5;
dog.aboie = function(){console.log("Wouaf")};
dog.aboie();

var dog = new Object();
dog.name = "Choupette";
dog.color = "white";
dog.age = 5;

//Avant de lire ici ion lit dog.aboie(3)
dog.aboie = function(number)
{
    while(number>0)   
    {
        console.log(number.toString()+" Wouaf");
        number--;
    }
    
    
};
dog.aboie(3);
*/

/*
Partie 2
***************************************************************************   

Video 5 : Prototype
********************
function Dog(nameDog, colorDog, ageDog)
{
//this, fait reference à chaque parametre de la fonction qui seront utilisés.
//this.name fait reference à name dans le paramètre de nameDog, et même chose pour le reste
//this.var est un recipient qui attend d'être rempli par les valeurs qui sont les param du constructeur
    this.name = nameDog;
    this.color = colorDog;
    this.age = ageDog;
}

var petitCaniche = new Dog("Choupette", "white", 5);
var grosPitbull = new Dog("Rex", "black", 3);

console.log(petitCaniche);
console.log(grosPitbull);

function Dog(name, color, age)
{
//this, fait reference à chaque parametre de la fonction qui seront utilisés.
//this.name fait reference à name dans le paramètre de name
    
    //Attribut
    this.name = name;
    this.color = color;
    this.age = age;
    
    //methode aboyer
    this.aboie = function()
    {
        //Pour faire aboyer un chien en particulier, on doit ajouter son nom avec this
        //this va specifier l'objet du quel on parle
        console.log("Aboie mon chien");
        console.log(this.name + " : Wouaf");
    }
}

//On crée des chien
var petitCaniche = new Dog("Choupette", "white", 5);
var grosPitbull = new Dog("Rex", "black", 3);

//Ici, on appel le chien qui va aboyer en faisant le nom du chien + aboie()
petitCaniche.aboie();
grosPitbull.aboie();

*/

var fruits = ["Oranges","Fraises"];
fruits.unshift("Ananas");
console.log(fruits);
