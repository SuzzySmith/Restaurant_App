const closeMenu = document.querySelector('.burger-close');
const openMenu = document.querySelector('.burger');
const menu = document.querySelector('.nav-mobile-menu');

// open mobile menu
openMenu.addEventListener('click', () => {
    console.log('open menu for the first time');
    menu.classList.toggle('nav-mobile-menu-open');
});



// close mobile menu
closeMenu.addEventListener('click', () => {
    console.log('close menu for the first time');

    menu.classList.toggle('nav-mobile-menu-open');

  

});

const getComments = async () => {

    const comment = await fetch('http://localhost:4000/api/comments');
    const url1 = window.location.href;
    
    const response = await comment.json();
    console.log(response)
    const comments = response.comments;

};
const loader = () => {
    const spinner = document.querySelector('.spinner-container');
                    spinner.classList.add('flex');
                    spinner.classList.remove('hidden');
    setTimeout(() => {
        loaderOff();
    }, 3000);


}

const loaderOff = () => {
    const spinner = document.querySelector('.spinner-container');
    spinner.classList.remove('flex');
    spinner.classList.add('hidden');
}

const submitComment = async () => {
    // e.preventDefault();
    // sub.click();
   

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const comment = document.querySelector('#comment').value;

    if (name === '' || email === '' || comment === '') {
        alert('Please fill in all fields');
        return;
    }

    loader();
    const data = {
        name,
        email,
        comment
    };
    const response = await fetch('http://localhost:4000/api/comments', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();
    console.log(result);

    
    setTimeout(() => {
        window.location = '/about';
    }, 2000);
    // getComments();
}


