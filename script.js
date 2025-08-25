let h1 = document.createElement('h1');
h1.textContent = " je suis un beat titre";

document.body.append(h1)

h1.classList.add('bg-info')




document.body.classList.add('bg-warning')

let btnRouge =  document.getElementById('rouge')
 


btnRouge.addEventListener('click' , () => {
    
    let p  = document.createElement('p')
    document.body.prepend(p)
    p.textContent = 'je suis un paragraphe qui va rendre folle fatiha ';
    

p.classList.add('text-danger')

p.style.textAlign = "center"

})


