function storeFormData() {
  let rollNo= document.getElementById('rollNumber').value;
  let name = document.getElementById('name').value;
  const batch = document.getElementById('batch').value;
  const section = document.getElementById('section').value;

  if (rollNo !== "" && name !== "") {
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
  else {
    alert("Student Name and Roll Number are required fields!");
  }
  document.addEventListener("click",function(event){
    if (event.target && event.target.id === "startQuiz") {
        storeFormData();
    }
  })
  
}
    