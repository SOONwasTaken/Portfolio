const routes = {
    home: `
        <img id="background-image" src="assets/img/backgrounds/home.png"></img>
        <p class="text-h1">Home</p> 

        <div class="flex-br-lg"></div>

        <p>
            Welcome to my site. This will serve as a place where I put random stuff.
        </p>
    `,

    lucky_star: `
        <img id="background-image" src="assets/img/backgrounds/lucky-star.png"></img>
        <h1 class="text-h1 lucky-star-font">Lucky★Star</h1> 

        <div class="flex-br-lg"></div>

        <p>
            Placeholder
        </p>
    `
};

function capitalizeFirstLetters(string) {
    let split = string.toLowerCase().split('_');

    for (let i = 0; i < split.length; i++) {
        split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
    }

    return split.join(' ');
}

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const menu = document.getElementById('nav-menu');

    function goTo(hash) {
        // replace content of page
        const page = hash.replace('#', '');
        mainContent.innerHTML = routes[page] || routes.home;
        
        // assign background image to body if it exists
        const background = document.getElementById('background');
        const backgroundImg = document.getElementById('background-image');

        if (backgroundImg !== null) {
            background.style.backgroundImage = `url('${backgroundImg.getAttribute('src')}')`
        }
    }

    window.addEventListener('load', () => {
        for (const key in routes) {
            let li = document.createElement('li');
            li.innerHTML = `<a href="#${key}">${capitalizeFirstLetters(key)}</a>`;
            menu.appendChild(li);
        }

        goTo(window.location.hash);
    });

    window.addEventListener('hashchange', () => {
        goTo(window.location.hash);
    });

});





