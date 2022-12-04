
const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.fa-bars')
const flex = document.querySelector('.flex')
const head = document.querySelector('.head')
const explore = document.getElementById('explore');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelectorAll('.link')
const linksA = document.querySelectorAll('.link-a')
const text = document.querySelector('.text')
const linkTop= document.querySelector('.link-top');
const date = document.querySelector('.date');
const loadinImg = document.querySelector('.loading-img')
const colors = ['red', 'blue', '#8c3b01' , 'green' ,'#8c7e01', '#de10d0'];
const synonyms = ['recognize', 'travel', 'tour', 'tread', 'see', 'explore']


let num = 0;
setInterval(()=>{
    explore.innerText = synonyms[num]
    explore.style.color = `${colors[num]}`
    num++;
    if(num>5){num=0}
},2000)


menuBtn.addEventListener('click',()=>{
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    closeBtn.classList.toggle('fa-times')
    text.classList.toggle('none')

    if (linksContainerHeight===0) {
        linksContainer.style.height='350px'
    }else{
        linksContainer.style.height='0px'
    }
})

links.forEach(link=>{
    link.addEventListener('click',(e)=>{
        const linksContainerHeight = linksContainer.getBoundingClientRect().height;
        const screenWidth = screen.width
        closeBtn.classList.toggle('fa-times')
        

        if(screenWidth<768){
            text.classList.toggle('none')

            if (linksContainerHeight===0) {
                linksContainer.style.height='350px'
            }else{
                linksContainer.style.height='0px'
            }
        }
        })
})

linksA.forEach(link=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();

        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id);

        const flexHight = flex.getBoundingClientRect().height;
        const headHeight = head.getBoundingClientRect().height


        let position = element.offsetTop;

        window.scrollTo({
            left : 0 ,
            top : screen.width>768?position - flexHight:position - flexHight - headHeight,
        })


    })
})

date.innerHTML= new Date().getFullYear();

window.addEventListener('scroll',()=>{
    const scrollHeight = window.pageYOffset

    if (scrollHeight > 500) {
        linkTop.classList.toggle('active')
    }
})

window.addEventListener('load',()=>{
    loadinImg.classList.toggle('none')
})