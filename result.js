document.addEventListener("DOMContentLoaded",function(){
    const resultParagraph = document.getElementById('totalMarksParagraph');
    const score = sessionStorage.getItem('score');
    resultParagraph.innerHTML = "<p>Your Final Score is " + score + " out of 5</p>";
})

