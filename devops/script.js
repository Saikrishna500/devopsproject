function validateStudent(name, rollNumber, department) {
    if (!name.trim() || !rollNumber.trim() || !department.trim()) {
        alert("Please fill in all student details.");
        return false;
    }

    const students = JSON.parse(
        localStorage.getItem("students") || "[]"
    );

    const duplicate = students.some(
        student => student.rollNumber.toLowerCase() ===
                   rollNumber.trim().toLowerCase()
    );

    if (duplicate) {
        alert("This roll number already exists.");
        return false;
    }

    return true;
}
