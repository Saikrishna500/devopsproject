
let students = [];

function addStudent() {
    const nameInput = document.getElementById("name");
    const rollInput = document.getElementById("roll");

    const name = nameInput.value.trim();
    const roll = rollInput.value.trim();

    if (name === "" || roll === "") {
        alert("Please enter both student name and roll number.");
        return;
    }

    const duplicate = students.some(student => student.roll === roll);

    if (duplicate) {
        alert("This roll number already exists.");
        return;
    }

    students.push({ name, roll });

    nameInput.value = "";
    rollInput.value = "";

    displayStudents();
}

function deleteStudent(roll) {
    students = students.filter(student => student.roll !== roll);
    displayStudents();
}

function displayStudents() {
    const list = document.getElementById("studentList");
    const count = document.getElementById("count");

    list.innerHTML = "";

    students.forEach(student => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = student.name;

        const rollCell = document.createElement("td");
        rollCell.textContent = student.roll;

        const actionCell = document.createElement("td");
        const button = document.createElement("button");

        button.textContent = "Delete";
        button.className = "delete-btn";
        button.onclick = () => deleteStudent(student.roll);

        actionCell.appendChild(button);
        row.append(nameCell, rollCell, actionCell);
        list.appendChild(row);
    });

    count.textContent = "Total Students: " + students.length;
}
