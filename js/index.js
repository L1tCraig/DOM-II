// Your code goes here

// 2
const busTab = document.querySelector('h1');
document.addEventListener('keydown', function(event){
    if (event.key === 'Tab')
    busTab.textContent = 'I see you tabbin'
})
// 3
const navLink = document.querySelectorAll('.nav-link')
navLink.forEach(link => {
    link.addEventListener('mouseover', function(event){
        link.style.color = 'blue'
    })
});
/*
// 4
document.addEventListener('keyup', function(event){
    if (event.key === ' ') {
        document.body.style.background = 'grey'
    }
}) */
// 5
document.footer.addEventListener('copy', function(event){
    console.log('copying the copyright now?')
})
// 6
const imgSelector = document.querySelectorAll('img')
const h2Selector = document.querySelectorAll('h2')
const pSelector = document.querySelectorAll('p')

imgSelector[0].addEventListener('dblclick', function(event){
    h2Selector[0].textContent = 'VVV Follow Along Below VVV'
    pSelector[0].textContent = 'DblClick the picture of the map'
    imgSelector[1].addEventListener('dblclick', function(event){
        h2Selector[1].textContent = 'OK read and Do!'
        pSelector[1].textContent = 'Step 1.) Hit k if you agree if you dont step 2 doesnt work!'
        pSelector[2].textContent = 'Step 2.) ok DblClick the boat on the shore and keep going!'

        imgSelector[3].addEventListener('dblclick', function(event){
            h2Selector[2].textContent = 'You must be a Prinny DOOD!'
            'Step 1.) The letter to press is two left of the letter that sounds like what most have two of on their face!'
            'Step 2.) DblClick the Boat inside the town waterways'

            imgSelector[2].addEventListener('dblclick', function(event){
                h2Selector[3].textContent = 'Thanks!!!'
                pSelector[3].textContent = 'this was a fun little nesting exorsise'
                pSelector[4].textContent = 'If the browser refreshes this is reset XD'
            })
        })
    })
})