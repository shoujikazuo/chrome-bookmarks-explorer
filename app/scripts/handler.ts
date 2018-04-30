// import { driver } from './model/maindriver.js';

function onFindButtonClick(e: MouseEvent) {
    console.log(`call hirasawa`);
    // driver.main();
}

document.addEventListener('DOMContentLoaded', function() {
    const tFindButton: HTMLElement | null = document.getElementById('findBtn');

    if(!!tFindButton) {
        tFindButton.addEventListener('click', onFindButtonClick);
    } else {
        console.log(`Find button is not exist. tFindButton = ${tFindButton}`)
    }
});