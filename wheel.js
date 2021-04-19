if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function ready() {
    const backButton = document.querySelector('.back')

    backButton.addEventListener('click', () => {
        const timeline = gsap.timeline({onComplete:backtoHome})
        timeline
        .fromTo('.back',{opacity:1}, {duration:1, opacity: 0, x: -20, ease:'easein'})
        .fromTo('.accesories',{opacity:1}, {duration:1, opacity: 0, y: -50, ease:'easein'}, '<')
        .fromTo('#leftwheel',{opacity:1},{opacity:0, rotation:0, x:70}, {duration:1, opacity: 1, rotation: -100,transformOrigin:'center', x: 0,ease:'easein'}, '<')
        .fromTo('.dash',{opacity:1}, {duration:1,opacity:0, y:10}, '<')
        .fromTo('.wheel-title',{opacity:1}, {duration:1,opacity:0, x:70, ease:'easein'}, '<')
        .fromTo('.footer',{opacity:1}, {duration:1, opacity:0, y:10, ease:'easein'},'<')
        .fromTo('#box3',{opacity:1}, {duration:1, opacity:0, x:40, ease:'easein'}, '<')
        .fromTo('#box2',{opacity:1}, {duration:1, opacity:0, x:40, ease:'easein'}, '<.3')
        .fromTo('#box1',{opacity:1}, {duration:1, opacity:0, x:40, ease:'easein'}, '<.3')
    
        function backtoHome(){
            window.location.href = "/"
        }
    })
    
    const timeline = gsap.timeline()
    timeline
        .from('.back', {duration:1, opacity: 0, x: -20, ease:'easein'})
        .from('.accesories', {duration:1, opacity: 0, y: -50, ease:'easein'}, '<')
        .fromTo('#leftwheel',{opacity:0, rotation:0, x:70}, {duration:1, opacity: 1, rotation: -100,transformOrigin:'center', x: 0,ease:'easein'}, '<')
        .from('.dash', {duration:1,opacity:0, y:10}, '<')
        .from('.wheel-title', {duration:1,opacity:0, x:70, ease:'easein'}, '<')
        .from('.footer', {duration:1, opacity:0, y:10, ease:'easein'},'<')
      
        .from('#box3', {duration:1, opacity:0, x:40, ease:'easein'}, '<')
        .from('#box2', {duration:1, opacity:0, x:40, ease:'easein'}, '<.3')
        .from('#box1', {duration:1, opacity:0, x:40, ease:'easein'}, '<.3')
}
