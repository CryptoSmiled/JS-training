//age in days


function ageindays() {
    let byear = prompt('yer');
    let agedays = (2022 - byear) * 365;
    let h1 = document.createElement('h1');
    let answer = document.createTextNode('you are ' + agedays + ' this days old');
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(answer);
    document.getElementById('result').appendChild(h1);
}

function reset() {
    document.getElementById('ageindays').remove();

}

//cats

function gc() {
    let image = document.createElement('img');
    let div = document.getElementById('cg');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);

}

//RPS

function play(choice) {
    let mychoice, botchoice;
    mychoice = choice.id;
    botchoice = random();
    console.log(botchoice);
    result = decideWinner(mychoice, botchoice);
    message = finalmessage(result);
    console.log(message);
    rpsfrontend(choice.id, botchoice, message);
}

function random() {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}

function decideWinner(mychoice, botchoice) {
    let rpsData = {
        'rock': { 'rock': 0.5, 'scissors': 1, 'paper': 0 },
        'paper': { 'rock': 1, 'scissors': 0, 'paper': 0.5 },
        'scissors': { 'rock': 0, 'scissors': 0.5, 'paper': 1 }
    }
    let myscore = rpsData[mychoice][botchoice]
    let botscore = rpsData[botchoice][mychoice]

    return [myscore, botscore]

}

function finalmessage([myscore, botscore]) {
    if (myscore == 0) {
        return { 'message': 'LOST', 'color': 'red' };
    } else if (myscore == 0.5) {
        return { 'message': 'TIE', 'color': 'blue' };
    } else { return { 'message': 'WIN', 'color': 'green' }; }

}

function rpsfrontend(mychoice, botchoice, finalmessage) {
    let imagedatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let mydiv = document.createElement('div');
    let botdiv = document.createElement('div');
    let messagediv = document.createElement('div');

    mydiv.innerHTML = "<img src='" + imagedatabase[mychoice] + "' height=150 width=150 >";
    botdiv.innerHTML = "<img src='" + imagedatabase[botchoice] + "' height=150 width=150 >";
    messagediv.innerHTML = "<h1 style = color:" + finalmessage['color'] + "> " + message.message + " </h1>";

    document.getElementById('rps').appendChild(mydiv);
    document.getElementById('rps').appendChild(messagediv);
    document.getElementById('rps').appendChild(botdiv);

}

function reload() {
    window.location.reload();
}

// colors

let buttons = document.getElementsByTagName('button');

// black jack

let bjgame = {
    'you': { 'scorespan': '#bjresult', 'div': '#urbox', 'score': 0 },
    'dealer': { 'scorespan': '#dbjresult', 'div': '#dbox', 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'],
    'cardsmap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'j': 10, 'q': 10, 'k': 10, 'a': [1, 11] },
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'stand': false,
    'turnOver': false,

};
let you = bjgame['you'];
let dealer = bjgame['dealer'];
let hitsound = new Audio('static/sounds/swish.m4a');
let cards = bjgame['cards'];
let winsound = new Audio('static/sounds/cash.mp3');
let losssound = new Audio('static/sounds/aww.mp3');

function randomcard() {
    let randomindex = Math.floor(Math.random() * 13);
    return cards[randomindex];
}


function hit() {
    if (bjgame['stand'] === false) {

        let card = randomcard();
        showCard(card, you);
        updateScore(card, you);
        showScore(you);
    }
}

function showCard(card, player) {
    if (player['score'] <= 21) {
        let cardimage = document.createElement('img');
        cardimage.src = `static/images/${card}.png`;
        document.querySelector(player['div']).appendChild(cardimage);
        hitsound.play();
    }
}

function stand() {
    bjgame['stand'] = true;
    dealerlogic();

}

function deal() {
    if (bjgame['turnOver'] === true) {
        bjgame['stand'] = false;
        let urimg = document.querySelector('#urbox').querySelectorAll('img');
        for (i = 0; i < urimg.length; i++) {
            urimg[i].remove();
        }
        let dimg = document.querySelector('#dbox').querySelectorAll('img');
        for (i = 0; i < dimg.length; i++) {
            dimg[i].remove();
        }
        you['score'] = 0;
        dealer['score'] = 0;
        document.querySelector('#bjresult').textContent = '0';
        document.querySelector('#bjresult').style.color = "bisque";
        document.querySelector('#dbjresult').textContent = '0';
        document.querySelector('#dbjresult').style.color = "bisque";
        document.querySelector('#results').textContent = `Let's Play`;
        document.querySelector('#results').style.color = 'bisque';
        bjgame['turnOver'] = true;
    }
}

function updateScore(card, player) {
    //if under 21 A = 11 if over A=1
    if (card === 'a') {
        if (player['score'] + bjgame['cardsmap'][card][1] <= 21) {
            player['score'] += bjgame['cardsmap'][card][1];
        } else { player['score'] += bjgame['cardsmap'][card][0]; }


    } else {
        player['score'] += bjgame['cardsmap'][card];
    }
}

function showScore(player) {
    if (player['score'] > 21) {
        document.querySelector(player['scorespan']).textContent = "BUST";
        document.querySelector(player['scorespan']).style.color = 'red';
    } else {
        document.querySelector(player['scorespan']).textContent = player['score'];
    }
}

function dealerlogic() {
    while (dealer['score'] < 17 && bjgame['stand'] === true) {

        let card = randomcard();
        showCard(card, dealer);
        updateScore(card, dealer);
        showScore(dealer);

    }
    bjgame['turnOver'] = true;
    showResult(winner());
}

function winner() {
    let winner;
    if (you['score'] <= 21) {
        if (you['score'] > dealer['score'] || (dealer['score'] > 21)) {
            bjgame['wins']++;
            winner = you;
        } else if (you['score'] < dealer['score']) {
            bjgame['losses']++;
            winner = dealer;
        } else if (you['score'] === dealer['score']) {
            bjgame['draws']++;
        }
    } else if (you['score'] > 21 && dealer['score'] <= 21) {
        bjgame['losses']++;
        winner = dealer;
    } else if (you['score'] > 21 && dealer['score'] > 21) {
        bjgame['draws']++;

    }

    return winner;
}

function showResult(winner) {
    let message, messageColor;
    if (bjgame['turnOver'] === true) {

        if (winner === you) {
            document.querySelector('#wins').textContent = bjgame['wins'];
            message = 'You Won!';
            messageColor = 'green';
            winsound.play();
        } else if (winner === dealer) {
            document.querySelector('#losses').textContent = bjgame['losses'];
            message = 'You Lost!';
            messageColor = 'red';
            losssound.play();
        } else {
            document.querySelector('#draws').textContent = bjgame['draws'];
            message = `It's a Tie!`;
            messageColor = 'white';
            losssound.play();
        }
        document.querySelector('#results').textContent = message;
        document.querySelector('#results').style.color = messageColor;
    }
}
