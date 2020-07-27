window.addEventListener('load', () => {
    document.querySelector('.loading').style.display = 'none'
    document.querySelector('.load').style.display = 'block'

    const navLinks = document.querySelectorAll('.nav-list')

    var elemento = document.getElementById('service');
    var posicion = elemento.getBoundingClientRect();

    navLinks.forEach(item => {
        item.addEventListener('click', (link) => {

            link.preventDefault()

            let dataElement = link.target.dataset.section
            let positionElement = document.getElementById(dataElement).getBoundingClientRect()
            let position = Math.round(positionElement.y)

            let scrolling = setInterval(scrollingSlow, 2)
           
            function scrollingSlow(){
                if(Math.sign(positionElement.y) == -1){
                    if(position >= 0){
                        clearInterval(scrolling)
                    }else{
                        position = position + 30
                        window.scrollBy(0, -30)
                    }

                }else{
                    if(position <= 0){
                        clearInterval(scrolling)
                    }else{
                        position = position - 30
                        window.scrollBy(0, 30)
                    }
                }
            }

            document.querySelector('.nav-list.active').classList.remove('active')
            link.target.parentNode.classList.add('active')
            
        })
    })

    const positiomElements = [
        {
            name: 'our',
            position: Math.round(document.getElementById('our').getBoundingClientRect().y) 
        },
        {
            name: 'service',
            position: Math.round(document.getElementById('service').getBoundingClientRect().y)
        }
    ]
    let count = 0

    window.onscroll = () => {
        let currentPosition = window.pageYOffset

        if(currentPosition >= positiomElements[count].position - 200){
            let elements = document.querySelectorAll(`#${positiomElements[count].name} div`)
            elements.forEach(element => {
                element.style.display = 'flex'
            })
            count = 1
        }
    }

    const bars = document.querySelector('.bars')
    let activeBars = false

    bars.addEventListener('click', () => {
        document.querySelector(".bars i").classList.toggle("fa-times")

        if(activeBars){
            document.querySelector('.content-nav-list').classList.remove('active')
            activeBars = false
        }else{
            document.querySelector('.content-nav-list').classList.add('active')
            activeBars = true
        }
        

    })
})