const ANGLE = 45;

let wowpanels = document.querySelectorAll(".wowpanel");
let colors = ['#3498DB', '#2ECC71', '#F1C40F', '#9B59B6', '#E74C3C'];

wowpanels.forEach((element, i) => {
    floatable(element, colors[i]);
});

function floatable(panel, color) {

    let content = panel.querySelector(".menuContent");
    content.style.backgroundColor = color;

    panel.addEventListener('mouseout', e => {
        content.style.transform = `perspective(300px) 
								   rotateY(0deg)
								   rotateX(0deg)`;
    });

    panel.addEventListener('mousemove', e => {
        let w = panel.clientWidth;
        let h = panel.clientHeight;
        let y = (e.offsetX - w * 0.5) / w * ANGLE;
        let x = (1 - (e.offsetY - h * 0.5)) / h * ANGLE;

        content.style.transform = `perspective(300px) 
								   rotateX(${x}deg)
								   rotateY(${y}deg)`;
    });

}