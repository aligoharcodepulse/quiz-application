function storeFormData() {
    const rollNo = document.getElementById('rollNumber').value;
    const name = document.getElementById('name').value;
    const batch = document.getElementById('batch').value;
    const section = document.getElementById('section').value;
    const formData = {
      rollNo: rollNo,
      name: name,
      batch: batch,
      section: section
    };
    // Convert object to JSON string
    const jsonData = JSON.stringify(formData);
    // Store data in session storage
    sessionStorage.setItem('formData', jsonData);
    window.location.href = "quiz.html"
  }
  document.addEventListener("click",function(event){
    if (event.target && event.target.id === "startQuiz") {
        storeFormData();
    }
  })