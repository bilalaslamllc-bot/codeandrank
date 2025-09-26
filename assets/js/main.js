// Basic JS for footer year and small behaviors
(function(){
const y = new Date().getFullYear();
document.getElementById('year')?.textContent = y;
document.getElementById('year2')?.textContent = y;
document.getElementById('year3')?.textContent = y;
})();