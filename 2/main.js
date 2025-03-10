console.log ('Hello')

function getYoungestUser(users) {

    let youngest = users[0];

    for (let i = 1; i < users.length; i++) { 
        if (users[i].age < youngest.age) { 
            youngest = users[i]; 
        }
    }
    return youngest.name;
}

const users = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
];

console.log(getYoungestUser(users));

//////////////////////////////////////////////

function cloneuser(users) {
    return {...user };
 }

 const user =  { name: 'Temo', age: 25 };
 const newUser = cloneuser(user);

 console.log(newUser);
 console.log(newUser === user);

 ///////////////////////////////////////////

 function rollDice() {
    return Math.floor(Math.random() * 6) + 1; 
}

function playGame() {
    let aAttempts = 0;
    let bAttempts = 0;
    
   
    while (true) {
        aAttempts++;
        if (rollDice() === 3) break;
    }

    
    while (true) {
        bAttempts++;
        if (rollDice() === 3) break;
    }

    console.log(`A-მ გააგორა 3 ${aAttempts} ცდაში`);
    console.log(`B-მ გააგორა 3 ${bAttempts} ცდაში`);

    if (aAttempts < bAttempts) {
        console.log("A არის გამარჯვებული! 🎉");
    } else if (bAttempts < aAttempts) {
        console.log("B არის გამარჯვებული! 🎉");
    } else {
        console.log("თამაში ფრეა! 🤝");
    }
}

playGame();
