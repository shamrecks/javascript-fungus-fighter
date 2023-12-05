
let fungusHP = 100;
let fungusAP = 100;
let fungusState = document.querySelector('.freaky-fungus');
let attacks = document.querySelectorAll('.attack-btn')


function handleEntangle() {
fungusHP = fungusHP - 9
fungusAP = fungusAP - 23
render();
}

function handleArcaneScepter() {
    fungusHP = fungusHP - 14
    fungusAP = fungusAP - 12
    render();
    }
    function handleDragonBlade() {
        fungusHP = fungusHP - 47
        fungusAP = fungusAP - 38
        render();
        }
        function handleStarFire() {
            fungusHP = fungusHP - 25
            fungusAP = fungusAP - 33
            render();
            }
            

function render(event) {
fungusHP = Math.max(0, fungusHP)
fungusAP = Math.max(0, fungusAP)
document.getElementById('ap-meter').value = fungusAP;
document.getElementById('hp-meter').value = fungusHP;
document.querySelector('.hp-text').textContent = fungusHP
 document.querySelector('.ap-text').textContent = fungusAP
 console.log(fungusState)
 if ( fungusHP <= 0 )
 fungusHP = fungusState.classList = '.dead'
 if (fungusAP <= 0)
 fungusAP = fungusState.classList = '.jump'
 attacks.forEach = button.disabled

}