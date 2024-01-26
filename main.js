let elStudentFirstNameInput = document.querySelector(".student-first-name")
let elStudentLastNameInput = document.querySelector(".student-last-name");
let elStudentBithdateInput = document.querySelector(".student-bithdate-input");
let elStudentSchoolarshipSelect = document.querySelector(".student-schoolarship-select");

let elStudentResult = document.querySelector(".student-result")

//DATABASE
const students = [];

let selectedIndex = -1;



//render function
const renderStudent = () => {
    let result = "";
    for(let i = 0; i < students.length; i++){
        result += `
        <tr>
            <td>${i + 1}</td>
            <td>${students[i].firstName + " " +  students[i].lastName}</td>
            <td>${students[i].bithDate}</td>
            <td>${students[i].schoolarShip}</td>
            <td class="d-flex gap-3">
                <button class="btn btn-primary" type="button" data-student-id=${i}>🖊</button>
                <button class="btn btn-danger" type="button" data-student-index=${i} >🧺</button>
            </td>
        </tr>
        `
    }

    elStudentResult.innerHTML = result
}

// delete function
elStudentResult.addEventListener("click", (evt) => {
    let studentIndex = evt.target.dataset.studentIndex;
    let studentId = evt.target.dataset.studentId;
  
    if (evt.target.matches(".btn-danger")) {
      // students.filter(student => student.id !== id)  
      students.splice(studentIndex, 1);
      renderStudent();
    }

    if(evt.target.matches(".btn-primary")){
        elStudentFirstNameInput.value = students[studentId].firstName;
        elStudentLastNameInput.value = students[studentId].lastName;
        elStudentBithdateInput.value = students[studentId].bithDate;
        elStudentSchoolarshipSelect.value = students[studentId].schoolarShip;

        selectedIndex = studentId 
    }
  });

// Add student function
    let addStudent = () => {
        let firstName =elStudentFirstNameInput.value.trim();  
        let lastName =elStudentLastNameInput.value.trim();   
        let bithDate =elStudentBithdateInput.value.trim();   
        let schoolarShip = elStudentSchoolarshipSelect.value.trim();

        let newStudent = {
            id: students.length + 1,
            firstName,
            lastName,
            bithDate,
            schoolarShip,
        }
        if(firstName && lastName && bithDate && schoolarShip){
            if(selectedIndex >= 0){
                students[selectedIndex] = newStudent;
                selectedIndex = -1;
            }else{
                students.push(newStudent);
            }
        }
        else{
            alert("malumotlarni to'ldiring")
        }

        elStudentFirstNameInput.value = null;
        elStudentLastNameInput.value = null;
        elStudentBithdateInput.value = null;
        elStudentSchoolarshipSelect.value = null;
        renderStudent()
    }
