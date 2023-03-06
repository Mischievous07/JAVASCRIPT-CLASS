<!doctype html>
<html><head>
    <title>Hangman Game</title>
    <style>
        .gameArea {
            text-align: center;
            font-size: 2em;
        }
        .box,
        .boxD {
            display: inline-block;
            padding: 5px;
        }
        .boxE {
            display: inline-block;
            width: 40px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 1.5em;
        }
    </style>
</head>
<body>
    <div class="gameArea">
        <div class="score"> </div>
        <div class="puzzle"></div>
        <div class="letters"></div>
        <button>Start Game</button>
    </div>
    <script>
        const words = ['javascript', 'html', 'css', 'jquery', 'bootstrap'];

        const game = {
            solution: '',
            letters: [],
            puzzle: [],
            total: 0
        };

        const elements = {
            score: document.querySelector('.score'),
            puzzle: document.querySelector('.puzzle'),
            letters: document.querySelector('.letters'),
            button: document.querySelector('button')
        };

        function startGame() {
            if (words.length > 0) {
                elements.button.style.display = 'none';
                elements.score.textContent = 'Letters left: 0';
                game.solution = words.shift();
                game.letters = game.solution.split('');
                game.puzzle = [];
                game.total = game.letters.length;

                builder();
            }
        }

        function builder() {
            elements.puzzle.innerHTML = '';
            elements.letters.innerHTML = '';

            for (let i = 0; i < game.letters.length; i++) {
                const letter = game.letters[i];
                const element = createElement('span', elements.puzzle, '-', 'boxE');

                if (letter === ' ') {
                    element.textContent = ' ';
                    element.style.border = 'none';
                } else {
                    game.total++;
                }

                game.puzzle.push(element);
            }

            updateScore();

            for (let i = 65; i <= 90; i++) {
                const letter = String.fromCharCode(i);
                createElement('span', elements.letters, letter, 'box').addEventListener('click', checker);
            }
        }

        function createElement(type, parent, text, className) {
            const element = document.createElement(type);
            element.className = className;
            parent.appendChild(element);
            element.textContent = text;
            return element;
        }

        function checker() {
            const element = this;
            element.classList.remove('box');
            element.classList.add('boxD');
            element.removeEventListener('click', checker);
            checkLetter(element.textContent);
        }

        function checkLetter(letter) {
            let correct = false;

            for (let i = 0; i < game.letters.length; i++) {
                const char = game.letters[i].toUpperCase();
                if (char === letter.toUpperCase()) {
                    correct = true;
                    game.puzzle[i].textContent = game.letters[i];
                    game.puzzle[i].style.border = 'none';
                    game.total--;
                }
            }

            updateScore();

            if (game.total <= 0) {
                elements.button.style.display = '';
                elements.button.textContent = 'Next word';
                elements.button.addEventListener('click', startGame);
            }
        }

        function updateScore() {
            elements.score.textContent = `Letters left: ${game.total}`;
        }

        elements.button.addEventListener('click', startGame);
        </script> </body>  </html>
