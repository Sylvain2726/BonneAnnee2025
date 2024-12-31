

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Draggable)
    
   });


const bonneAnnee = document.getElementById('divBonneAnnee')
const nbr2024 = document.getElementById('2024')
const quatre = document.getElementById('quatre')
const mesVoeux = document.getElementById('mesVoeux')
const title = document.getElementById('title')









/* gsap.to('.circle', 

    {
        y: -500,
        duration: 2,
        backgroundColor: 'tomato',
        stagger : {
            each : 0.2,
            repeat : -1,
            yoyo : true,
            from: 'center'

        }
    }
) */
//Pour sequencer les animations
/* const timeLine = gsap.timeline( {
    
    repeat : -1,
    yoyo : true
})

timeLine.to('.circle' , {x: 100})
timeLine.to('.circle' , {y: -250})
timeLine.to('.circle' , {x: 200}) */
const timeLine = gsap.timeline( {
//yoyo : true,
    
})
timeLine.from(nbr2024, {
    x : -700 ,
    duration : 2 ,

})

timeLine.to(quatre, {
    y: 200,
    opacity : 0,
    duration : 2,
    
})

timeLine.to(quatre, {
    onComplete : () => {
        quatre.textContent = '5'
    }
})

timeLine.to(quatre, {
    y: -1,
    opacity : 1,
    duration : 2,
})
timeLine.to(nbr2024 , {
    scale : 10,
    duration : 2,
    opacity : 0
})

timeLine.to(bonneAnnee, {
    onComplete : () => {
        bonneAnnee.classList.remove('hidden')
        bonneAnnee.classList.add('flex')
        nbr2024.classList.add('hidden')
    }
})
timeLine.from(bonneAnnee , {
    scale : 10,
    duration : 2,
    opacity : 0,
})
timeLine.from('.anime' , {
    y : 100, 
    opacity : 0,
    duration : 1,
    stagger : 0.5
})
timeLine.to(bonneAnnee , {
    //scale : -5,
    delay  : 1,
    duration : 1,
    opacity : 0,
})
timeLine.to(bonneAnnee, {
    onComplete : () => {
        bonneAnnee.classList.add('hidden')
        bonneAnnee.classList.remove('flex')
        nbr2024.classList.add('hidden')
    }
})
timeLine.from(mesVoeux , {
    onComplete : () => {
        mesVoeux.classList.remove('hidden')
        mesVoeux.classList.add('flex')
    }
})
timeLine.from(title , {
    opacity : 0,
    duration : 2
})
timeLine.from('.box' , {
    y : 100, 
    opacity : 0,
    duration : 1,
    stagger : 3
})



