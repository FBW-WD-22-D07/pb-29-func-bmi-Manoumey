// # BMI-Rechner als Funktion
// Gehen wir noch einmal zu unserer BMI-Rechner-Übung zurück und ändern den Code so, dass er Funktionen verwendet.

// - Anstatt globale Variablen zu haben und die Berechnungen im globalen Bereich durchzuführen, erstelle zwei Funktionen:
//   1. **calculateBMI** nimmt drei Argumente entgegen: einen String `name`, eine Zahl `weight` und eine Zahl `height`. Sie gibt einen String mit dem Namen und der BMI-Zahl zurück.

// function calculateBMI(name, weight, height){
// if(typeof weight !="number" || typeof height !="number"){
// console.log(`${weight} or ${height} is not a number `);
// } else{
//     let BMI=(weight/(height/100*height/100));
//     let fixedBMI = BMI.toFixed(2);
  
//     console.log(`${name} ${fixedBMI}`);
//     return;
// }
// }

// calculateBMI("Frank", 125, 89);



const calculateBMI= (weight, height)=>{
    if(typeof weight !="number" || typeof height !="number"){
    console.log(`${weight} or ${height} is not a number `);
    } else{
        let BMI=(weight/(height/100*height/100)).toFixed(2)
    
        return BMI;
    }
    };
    
    console.log(calculateBMI(125, 89));
    


//   2. **whoIsBiggest** nimmt vier Argumente entgegen: zwei `name`-Strings und zwei `bmi`-Zahlen. Sie gibt die Zeichenkette mit dem Namen der größeren Person zurück.

// **Bonus**
// - Schreibe die Funktion **whoIsBiggest** so um, dass sie sechs Argumente benötigt: `Person 1 name`, `Person 2 name`, `Person 1 weight`, `Person 2 weight`, `Person 1 height`, `Person 2 height`
// - Die Funktion **whoIsBiggest** sollte die Funktion **calculateBMI** verwenden, um den BMI für beide Personen zu berechnen, bevor sie sie vergleicht und den Namen der Person mit dem größeren BMI zurückgibt (das bedeutet, dass im globalen Bereich nur die Funktion **whoIsBiggest** aufgerufen wird)


function whoIsBiggest(pers1Name, pers2Name, pers1BMI, pers2BMI){
    if(typeof pers1BMI !="number" || typeof pers2BMI !="number"){
        console.log(`${pers1BMI} or ${pers2BMI} is not a number `);
        } else{
            if(pers1BMI > pers2BMI){
                return pers1Name;
            } else{
                return pers2Name;
            }
            
        }

}

console.log(whoIsBiggest("Frank", "Mark", 26.72, 28.33));