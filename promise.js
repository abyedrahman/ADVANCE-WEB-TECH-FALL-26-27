function getStudentResult() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const success = true;

            if (success) {
                const student = {
                    id: 51846,
                    name: "Abid Rahman",
                    department: "CSE",
                    marks: 85
                };

                resolve(student);
            } else {
                reject("Failed to retrieve student result.");
            }

        }, 3000);
    });
}


// Using async/await
async function displayResult() {
    console.log("Getting student result...");

    try {
        const student = await getStudentResult();

        console.log("Student result received!");
        console.log("ID:", student.id);
        console.log("Name:", student.name);
        console.log("Department:", student.department);
        console.log("Marks:", student.marks);

    } catch (error) {
        console.log(error);
    } finally {
        console.log("Result processing completed.");
    }
}


// Call displayResult()
displayResult();