const menu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.navigation');


menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    nav.classList.toggle('open');
});

const form = document.querySelector('form');

form.addEventListener(('submit'), (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const inputVal = input.value;
    const stats = document.querySelector('.stats-section');



    console.log(inputVal);

    async function shortenLink() {
        try {
            const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputVal}`)
            const url = await res.json();
            const shortLink = url.result.short_link;

            const originalLink = inputVal.substring(0, 25);
            console.log(originalLink);
            console.log(shortLink);

            let div = document.createElement('div');

            div.classList.add('url-container');
            div.innerHTML = `
            <p class="url">${originalLink}</p>
            <div class="btn-wrapper">
              <p class="short-url">${shortLink}</p>
              <button class="copy-btn">Copy</button>
            </div> 
            `;

            stats.prepend(div);
            input.value = '';






        } catch (e) {
            input
            console.log('Error', e);
        }
    }
    shortenLink();

})