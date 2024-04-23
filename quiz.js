document.addEventListener("DOMContentLoaded", function() {
    const quizForm = document.getElementById('quizForm');
  
    quizForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const formData = new FormData(quizForm);
      let score = 0;
  
      formData.forEach((value, key) => {
        if (key === "q1" && parseInt(value) === 2) {
          score = score + 1;
        }
        if (key === "q2" && parseInt(value) === 1) {
          score = score + 1;
        }
        if (key === "q3" && parseInt(value) === 4) {
          score = score + 1;
        }
        if (key === "q4" && parseInt(value) === 3) {
          score = score + 1;
        }
        if (key === "q5" && parseInt(value) === 2) {
          score = score + 1;
        }
      });
      sessionStorage.setItem('score', score);
      window.location.href = "result.html";
    });
  });
  
  