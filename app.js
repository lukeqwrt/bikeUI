
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', imready)
}else{
    imready()
}

function imready(){
    document.getElementById('wheelplus').addEventListener('click', () => {
        // document.querySelector('.back').style.display = "block"
    
        document.getElementById('wheelplus').style.pointerEvents = "none"
        const timeline = gsap.timeline({onComplete:gotoWheel})
        timeline
        // parts
            .fromTo('#leftwheel', {opacity: 1, rotation: 0}, {duration: 2, transformOrigin:"center",  opacity: 1, rotation: 380, x: 280 })
            .fromTo('#body', {opacity: 1, x:0 }, {duration: 2,opacity:1, x:280}, '<')
            .fromTo('#wheelplus', {opacity:1}, {duration:0.5,transformOrigin:"center", opacity:0 }, '<.1')
            .fromTo('#seetplus', {opacity:1}, {duration:0.5,transformOrigin:"center", opacity:0 }, '<')
        // bars
            .fromTo('.bars', {opacity: 1}, {duration:1, opacity:0 ,ease:'power2'},'<')
        // title
            .fromTo('.title', {opacity:1, x:0}, {duration: 1, opacity:0, x:20, ease: 'power2'}, '<')
        //controls
            .fromTo('.house', {opacity:1, y: 0}, {duration: 1, opacity:0, y:20, ease:'power2'}, '<')
            .fromTo('.cycle', {opacity:1, y: 0}, {duration: 1, opacity:0, y:20, ease:'power2'}, '<.1')
            .fromTo('.add-circle', {opacity:1, y: 0}, {duration: 1, opacity:0, y:20, ease:'power2'}, '<.4')
    
    
        // end animation
        // goto
        function gotoWheel(){
            window.location.href = "/wheel.html";
        }
    
    })

    const timeline = gsap.timeline()
    timeline
    .from('#leftwheel',{duration: 2, transformOrigin:"center",  opacity: 1, rotation: 380, x: 280 })
    .from('#body', {duration: 2,opacity:1, x:280}, '<')

// bars
    .from('.bars', {duration:1, x: -20, opacity:0 ,ease:'easein'},'<')
// title
    .from('.title', {duration: 1, opacity:0, x:20, ease: 'power2'}, '<')
//controls
    .from('.house', {duration: 1, opacity:0, y:20, ease:'power2'}, '<')
    .from('.cycle', {duration: 1, opacity:0, y:20, ease:'power2'}, '<.1')
    .from('.add-circle', {duration: 1, opacity:0, y:20, ease:'power2'}, '<.4')

    .from('#wheelplus', {duration:0.5,transformOrigin:"center", opacity:0 } )
    .from('#seetplus', {duration:0.5,transformOrigin:"center", opacity:0 }, '<.3')

}

