// ========================== TOOLTIP ==========================
var card = document.querySelectorAll(".card");
var tooltip = document.querySelectorAll(".tooltip");
var description = document.querySelectorAll(".description");
const calculatePositionTooltip = () => {
    for(let i = 0; i < tooltip.length; i++){
    var widthCard = card[i].clientWidth;
    var widthTooltip = tooltip[i].clientWidth;
    var heightTooltip = tooltip[i].clientHeight;
    };
    var x = (widthCard / 2) - (widthTooltip / 2) ;
    var y = - heightTooltip - 20;
    for(let i = 0; i < card.length; i++){
        tooltip[i].style.left = `${x}px`;
        tooltip[i].style.top = `${y}px`;
    };
};
window.addEventListener('load', () => calculatePositionTooltip());
window.addEventListener('resize', () => calculatePositionTooltip());
for(let i = 0; i < card.length; i++){
    card[i].addEventListener('mouseenter', () => {
        tooltip[i].classList.add('activo');
        tooltip[i].style.opacity = '1';
        description[i].style.display = 'block';
        calculatePositionTooltip();
    });
    let timer;
    card[i].addEventListener('mouseleave', () =>{
        timer = setTimeout(() => {
            tooltip[i].classList.remove('activo');
            tooltip[i].style.opacity = '0';
            description[i].style.display = 'none';
            calculatePositionTooltip();
        }, 200);
    });
    tooltip[i].addEventListener('mouseenter', () => clearTimeout(timer));
    tooltip[i].addEventListener('mouseleave', () => tooltip[i].classList.remove('activo'));
    tooltip[i].addEventListener('mouseleave', () => tooltip[i].style.opacity = '0')
};