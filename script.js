let linkNav = document.querySelectorAll('[href^="#"]'), 
    V = 0.2;  
for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault(); 
        let w = window.pageYOffset,  
            hash = this.href.replace(/[^#]*(.*)/, '$1');  
        t = document.querySelector(hash).getBoundingClientRect().top,  
            start = null;
        requestAnimationFrame(step); 
        function step(time) {
            if (start === null) start = time;
            let progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  
            }
        }
    }, false);
}

//   всплытие popup
var callback_btn=document.getElementById('callback_btn');
callback_btn.addEventListener('click', function(){
    var pop_up_window=document.getElementById('pop_up_window');
    pop_up_window.style.visibility='visible';
});

var pop_up_close=document.getElementById('pop_up_close');
pop_up_close.addEventListener('click', function(){
    pop_up_window.style.visibility='hidden';
});

// корректность ввода телефона
$(function() {
    $('#phone_pop_up').inputmask({   alias: "phone", "clearIncomplete": true });
});