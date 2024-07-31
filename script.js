
let cloths = document.querySelector('#cloths')
let blog = document.querySelector('#blogs')
let review = document.querySelector('#reviews')
let contact = document.querySelector('#contacts')
let login = document.getElementById('login')
let loged = document.getElementById('loged')

let submit = document.querySelector('#submit')

cloths.addEventListener('click', () => {
    cloths.style.color = 'red'
    blog.style.color = 'black'
    review.style.color = 'black'
    contact.style.color = 'black'
})

blog.addEventListener('click', () => {
    cloths.style.color = 'black'
    blog.style.color = 'red'
    review.style.color = 'black'
    contact.style.color = 'black'
})

review.addEventListener('click', () => {
    cloths.style.color = 'black'
    blog.style.color = 'black'
    review.style.color = 'red'
    contact.style.color = 'black'
})

contact.addEventListener('click', () => {
    cloths.style.color = 'black'
    blog.style.color = 'black'
    review.style.color = 'black'
    contact.style.color = 'red'
})

login.addEventListener('click', () => {
    document.querySelector('.loginpage').style.display = 'block';
})


loged.addEventListener('click', () => {
    let email = document.getElementById('inpu1')
    let pass = document.getElementById('inpu2')

    if (email.value == "" || pass.value == "") {
        alert("Please enter your email or Password !");
    }
    else {
        alert('You are  login successfully')
        document.querySelector('.loginpage').style.display = 'none';

    }

})

submit.addEventListener('click', () => {
    let name = document.querySelector('#name')
    let email = document.querySelector('#email')
    let number = document.querySelector('#number')
    let pass = document.querySelector('#pass')

    // function empty(){
    //     document.querySelector('#name').value ==
    // }

    if (name.value == "" || email.value == "" || number.value == "" ||
        pass.value == "") {
        alert("Please enter all the fields !");
    } else {
        alert('Thank you For Connecting')
        name.value = " "
        email.value = " "
        number.value = " "
        pass.value = " "

    }
})