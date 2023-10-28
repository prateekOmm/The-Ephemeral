const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".navlink", {
    stagger: .2,
    y: 10,
    opacity: 0,
    ease: Power3,
    duration: .9,
})

Shery.textAnimate("#headings h1", {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
});

gsap.from(".anim2", {
    stagger: 0.2,
    y: 40,
    opacity: 0,
    duration: 2,
    ease: Expo,
})

Shery.imageEffect(".imgff", {
    style: 5,
    config: {"a":{"value":2.73,"range":[0,30]},"b":{"value":-0.64,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7647087451080712},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.36,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":42.13},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"uFrequencyX":{"value":24.79,"range":[0,100]},"uFrequencyY":{"value":16.53,"range":[0,100]},"uFrequencyZ":{"value":9.92,"range":[0,100]}},
})

Shery.imageEffect("#imgntext img", {
    style: 3,
    config: {"uFrequencyX":{"value":24.79,"range":[0,100]},"uFrequencyY":{"value":16.53,"range":[0,100]},"uFrequencyZ":{"value":9.92,"range":[0,100]},"geoVertex":{"range":[1,64],"value":42.13},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.749999948910308},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.17,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})

Shery.imageEffect("#bimg", {
    style: 4, 
    config: {"uColor":{"value":false},"uSpeed":{"value":1,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.150102237005782},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.5,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.2,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.91,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":32}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.23,"range":[0,2]},"noise_scale":{"value":26.45,"range":[0,100]}},
    gooey: true,
})

document.querySelector("button").addEventListener("mouseover", function() {
    gsap.to("#future video", {
        opacity: 1, 
        ease: Expo,
        duration: 1.5,
    })
})

document.querySelector("button").addEventListener("mouseleave", function() {
    gsap.to("#future video", {
        opacity: 0, 
        ease: Expo,
        duration: 1.5,
    })
})