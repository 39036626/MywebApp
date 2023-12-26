document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const playerDisplay = document.querySelector('#player')

    let currentPlayer = 'playerX'

    // squares.forEach(square => {
    //     square.addEventListener('click', clickOutcome)
    // })
    squares[0].addEventListener('dblclick', function() {
    alert("雙擊事件觸發了!")})
    squares[1].addEventListener('click', clickOutcome)
    squares[2].addEventListener('click', clickOutcome)
    squares[3].addEventListener('click', clickOutcome)
    squares[4].addEventListener('click', clickOutcome)
    squares[5].addEventListener('click', clickOutcome)
    squares[6].addEventListener('click', clickOutcome)
    squares[7].addEventListener('click', clickOutcome)
    squares[8].addEventListener('click', clickOutcome)


    function clickOutcome(e) {
        const squareArray = Array.from(squares)
        const index = squareArray.indexOf(e.target)
        playerDisplay.innerHTML = currentPlayer

        if (currentPlayer === 'playerX') {
            squares[index].classList.add('playerX')
            currentPlayer = 'playerO'
        } else {
            squares[index].classList.add('playerO')
            currentPlayer = 'playerX'
        }
    }

})