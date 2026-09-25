/* =========================================
   VELORA STUDENT MANAGEMENT SYSTEM
========================================= */


/* ELEMENTS */

const addStudentBtn =
    document.getElementById("addStudentBtn");

const modal =
    document.getElementById("modal");

const closeModal =
    document.getElementById("closeModal");

const cancelBtn =
    document.getElementById("cancelBtn");

const studentForm =
    document.getElementById("studentForm");

const studentTable =
    document.getElementById("studentTable");

const searchInput =
    document.getElementById("searchInput");

const groupFilter =
    document.getElementById("groupFilter");

const emptyMessage =
    document.getElementById("emptyMessage");

const modalTitle =
    document.getElementById("modalTitle");


/* FORM ELEMENTS */

const studentId =
    document.getElementById("studentId");

const firstName =
    document.getElementById("firstName");

const lastName =
    document.getElementById("lastName");

const group =
    document.getElementById("group");

const phone =
    document.getElementById("phone");

const grade =
    document.getElementById("grade");

const status =
    document.getElementById("status");

const payment =
    document.getElementById("payment");

const attendance =
    document.getElementById("attendance");


/* STATISTICS */

const totalStudents =
    document.getElementById("totalStudents");

const activeStudents =
    document.getElementById("activeStudents");

const totalGroups =
    document.getElementById("totalGroups");

const averageGrade =
    document.getElementById("averageGrade");


/* =========================================
   DEFAULT STUDENTS
========================================= */

const defaultStudents = [

    {
        id: 1,
        firstName: "Ali",
        lastName: "Valiyev",
        group: "Python-101",
        phone: "+998 90 123 45 67",
        grade: 95,
        status: "active",
        payment: "paid",
        attendance: "present"
    },

    {
        id: 2,
        firstName: "Madina",
        lastName: "Karimova",
        group: "Web-101",
        phone: "+998 91 234 56 78",
        grade: 88,
        status: "active",
        payment: "paid",
        attendance: "present"
    },

    {
        id: 3,
        firstName: "Sardor",
        lastName: "Aliyev",
        group: "Java-101",
        phone: "+998 93 345 67 89",
        grade: 76,
        status: "active",
        payment: "paid",
        attendance: "present"
    },

    {
        id: 4,
        firstName: "Malika",
        lastName: "Hasanova",
        group: "Python-101",
        phone: "+998 94 456 78 90",
        grade: 92,
        status: "active",
        payment: "paid",
        attendance: "present"
    },

    {
        id: 5,
        firstName: "Jasur",
        lastName: "Rahimov",
        group: "Web-101",
        phone: "+998 95 567 89 01",
        grade: 84,
        status: "active",
        payment: "paid",
        attendance: "present"
    },

    {
        id: 6,
        firstName: "Shahzoda",
        lastName: "Abdullayeva",
        group: "Design-101",
        phone: "+998 97 678 90 12",
        grade: 97,
        status: "active",
        payment: "paid",
        attendance: "present"
    },

    {
        id: 7,
        firstName: "Bekzod",
        lastName: "Tursunov",
        group: "Java-101",
        phone: "+998 98 789 01 23",
        grade: 72,
        status: "active",
        payment: "paid",
        attendance: "present"
    },

    {
        id: 8,
        firstName: "Zarina",
        lastName: "Ismoilova",
        group: "Web-101",
        phone: "+998 99 890 12 34",
        grade: 91,
        status: "active",
        payment: "paid",
        attendance: "present"
    },

    {
        id: 9,
        firstName: "Diyor",
        lastName: "Qodirov",
        group: "Python-101",
        phone: "+998 90 901 23 45",
        grade: 79,
        status: "active",
        payment: "paid",
        attendance: "present"
    },

    {
        id: 10,
        firstName: "Sevinch",
        lastName: "Ergasheva",
        group: "Design-101",
        phone: "+998 91 012 34 56",
        grade: 94,
        status: "active",
        payment: "paid",
        attendance: "present"
    },

    {
        id: 11,
        firstName: "Muhammad",
        lastName: "Yusufov",
        group: "Java-101",
        phone: "+998 93 123 45 67",
        grade: 68,
        status: "inactive",
        payment: "debt",
        attendance: "absent"
    },

    {
        id: 12,
        firstName: "Nilufar",
        lastName: "Saidova",
        group: "Python-102",
        phone: "+998 94 234 56 78",
        grade: 89,
        status: "active",
        payment: "paid",
        attendance: "present"
    },

    {
        id: 13,
        firstName: "Otabek",
        lastName: "Nazarov",
        group: "Python-102",
        phone: "+998 95 345 67 89",
        grade: 82,
        status: "active",
        payment: "paid",
        attendance: "present"
    },

    {
        id: 14,
        firstName: "Gulnoza",
        lastName: "Rasulova",
        group: "Web-102",
        phone: "+998 97 456 78 90",
        grade: 96,
        status: "active",
        payment: "paid",
        attendance: "present"
    },

    {
        id: 15,
        firstName: "Aziz",
        lastName: "Hamroyev",
        group: "Web-102",
        phone: "+998 98 567 89 01",
        grade: 73,
        status: "active",
        payment: "paid",
        attendance: "present"
    },

    {
        id: 16,
        firstName: "Mohira",
        lastName: "Kamilova",
        group: "Design-102",
        phone: "+998 99 678 90 12",
        grade: 90,
        status: "active",
        payment: "paid",
        attendance: "present"
    },


    /* =====================================
       ISLOM KARIMOV
       ===================================== */

    {
        id: 17,

        firstName: "Islom",

        lastName: "Karimov",

        group: "Python-102",

        phone: "+998 90 789 01 23",

        grade: 64,

        status: "inactive",

        payment: "debt",

        attendance: "absent"
    },


    {
        id: 18,
        firstName: "Laylo",
        lastName: "Murodova",
        group: "Design-102",
        phone: "+998 91 890 12 34",
        grade: 98,
        status: "active",
        payment: "paid",
        attendance: "present"
    },

    {
        id: 19,
        firstName: "Rustam",
        lastName: "Soliyev",
        group: "Web-102",
        phone: "+998 93 901 23 45",
        grade: 87,
        status: "active",
        payment: "paid",
        attendance: "present"
    },

    {
        id: 20,
        firstName: "Madina",
        lastName: "Toshpulatova",
        group: "Python-102",
        phone: "+998 94 012 34 56",
        grade: 93,
        status: "active",
        payment: "paid",
        attendance: "present"
    }

];


/* =========================================
   LOAD DATA
========================================= */

const saved =
    localStorage.getItem("veloraStudents");


let students;


if (saved) {

    students =
        JSON.parse(saved);

    students =
        students.map(student => ({

            ...student,

            payment:
                student.payment ||
                "paid",

            attendance:
                student.attendance ||
                "present"

        }));

} else {

    students =
        [...defaultStudents];

}


/* =========================================
   ISLOM KARIMOVNI DOIMO TO‘G‘RI HOLATDA
   SAQLASH
========================================= */

function checkIslomStatus() {

    const islom =
        students.find(
            student =>
                student.firstName === "Islom" &&
                student.lastName === "Karimov"
        );


    if (islom) {

        islom.status =
            "inactive";

        islom.payment =
            "debt";

        islom.attendance =
            "absent";

    }

}


/* =========================================
   SAVE DATA
========================================= */

function saveData() {

    checkIslomStatus();

    localStorage.setItem(
        "veloraStudents",
        JSON.stringify(students)
    );

}


/* =========================================
   RENDER
========================================= */

function renderStudents() {

    checkIslomStatus();


    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    const selectedGroup =
        groupFilter.value;


    const filtered =
        students.filter(student => {


            const fullName =
                `${student.firstName} ${student.lastName}`
                    .toLowerCase();


            const searchMatch =

                fullName.includes(search) ||

                student.group
                    .toLowerCase()
                    .includes(search) ||

                student.phone
                    .toLowerCase()
                    .includes(search);


            const groupMatch =

                selectedGroup === "all" ||

                student.group === selectedGroup;


            return (
                searchMatch &&
                groupMatch
            );

        });


    studentTable.innerHTML = "";


    if (filtered.length === 0) {

        emptyMessage.style.display =
            "block";

    } else {

        emptyMessage.style.display =
            "none";

    }


    filtered.forEach(student => {


        const row =
            document.createElement("tr");


        const initials =
            (
                student.firstName.charAt(0) +
                student.lastName.charAt(0)
            ).toUpperCase();


        /* GRADE */

        let gradeClass =
            "high";


        if (student.grade < 70) {

            gradeClass =
                "low";

        } else if (student.grade < 86) {

            gradeClass =
                "medium";

        }


        /* PAYMENT */

        const paymentHTML =

            student.payment === "debt"

            ?

            `
                <span class="payment debt">
                    💰 Qarzdor
                </span>
            `

            :

            `
                <span class="payment paid">
                    ✓ To‘langan
                </span>
            `;


        /* ATTENDANCE */

        const attendanceHTML =

            student.attendance === "absent"

            ?

            `
                <span class="attendance absent">
                    📅 Darsga qatnashmadi
                </span>
            `

            :

            `
                <span class="attendance present">
                    ✓ Qatnashdi
                </span>
            `;


        /* STATUS */

        const statusHTML =

            student.status === "active"

            ?

            `
                <span class="status active">
                    <span class="dot"></span>
                    Faol
                </span>
            `

            :

            `
                <span class="status inactive">
                    <span class="dot"></span>
                    Faol emas
                </span>
            `;


        /* ROW */

        row.innerHTML = `

            <td>

                <div class="student-info">

                    <div class="avatar">
                        ${initials}
                    </div>

                    <div>

                        <div class="student-name">
                            ${student.firstName}
                            ${student.lastName}
                        </div>

                        <div class="student-id">
                            ID: VL-${String(student.id).padStart(4, "0")}
                        </div>

                    </div>

                </div>

            </td>


            <td>

                <span class="group-tag">
                    ${student.group}
                </span>

            </td>


            <td>
                ${student.phone}
            </td>


            <td>

                <span class="grade ${gradeClass}">
                    ${student.grade}
                </span>

            </td>


            <td>
                ${paymentHTML}
            </td>


            <td>
                ${attendanceHTML}
            </td>


            <td>
                ${statusHTML}
            </td>


            <td>

                <div class="actions">

                    <button
                        class="action"
                        onclick="editStudent(${student.id})"
                        title="Tahrirlash"
                    >
                        ✏️
                    </button>


                    <button
                        class="action delete"
                        onclick="deleteStudent(${student.id})"
                        title="O‘chirish"
                    >
                        🗑️
                    </button>

                </div>

            </td>

        `;


        studentTable.appendChild(row);

    });


    updateStatistics();

}


/* =========================================
   STATISTICS
========================================= */

function updateStatistics() {

    totalStudents.textContent =
        students.length;


    const active =
        students.filter(
            student =>
                student.status === "active"
        ).length;


    activeStudents.textContent =
        active;


    const groups =
        new Set(
            students.map(
                student =>
                    student.group
            )
        );


    totalGroups.textContent =
        groups.size;


    if (students.length === 0) {

        averageGrade.textContent =
            "0";

    } else {


        const total =
            students.reduce(
                (sum, student) =>
                    sum +
                    Number(student.grade),
                0
            );


        averageGrade.textContent =
            (
                total /
                students.length
            ).toFixed(1);

    }

}


/* =========================================
   UPDATE GROUPS
========================================= */

function updateGroups() {

    const currentValue =
        groupFilter.value;


    const groups =
        [
            ...new Set(
                students.map(
                    student =>
                        student.group
                )
            )
        ].sort();


    groupFilter.innerHTML = `

        <option value="all">
            Barcha guruhlar
        </option>

    `;


    groups.forEach(groupName => {

        const option =
            document.createElement("option");


        option.value =
            groupName;


        option.textContent =
            groupName;


        groupFilter.appendChild(
            option
        );

    });


    if (
        groups.includes(currentValue)
    ) {

        groupFilter.value =
            currentValue;

    }

}


/* =========================================
   OPEN MODAL
========================================= */

function openModal() {

    modal.classList.add("show");

}


/* =========================================
   CLOSE MODAL
========================================= */

function closeModalWindow() {

    modal.classList.remove("show");

    studentForm.reset();

    studentId.value = "";

    modalTitle.textContent =
        "Yangi o‘quvchi";

}


/* =========================================
   ADD BUTTON
========================================= */

addStudentBtn.addEventListener(
    "click",
    function() {

        studentForm.reset();

        studentId.value = "";

        modalTitle.textContent =
            "Yangi o‘quvchi";

        openModal();

    }
);


/* =========================================
   CLOSE BUTTONS
========================================= */

closeModal.addEventListener(
    "click",
    closeModalWindow
);


cancelBtn.addEventListener(
    "click",
    closeModalWindow
);


/* =========================================
   OUTSIDE CLICK
========================================= */

modal.addEventListener(
    "click",
    function(event) {

        if (
            event.target === modal
        ) {

            closeModalWindow();

        }

    }
);


/* =========================================
   FORM SAVE
========================================= */

studentForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const id =
            studentId.value;


        const data = {

            firstName:
                firstName.value.trim(),

            lastName:
                lastName.value.trim(),

            group:
                group.value.trim(),

            phone:
                phone.value.trim(),

            grade:
                Number(
                    grade.value
                ),

            status:
                status.value,

            payment:
                payment.value,

            attendance:
                attendance.value

        };


        /* EDIT */

        if (id) {


            const index =
                students.findIndex(
                    student =>
                        student.id ===
                        Number(id)
                );


            if (index !== -1) {

                students[index] = {

                    id:
                        Number(id),

                    ...data

                };

            }

        }

        /* ADD */

        else {


            students.push({

                id:
                    Date.now(),

                ...data

            });

        }


        /*
           Islom Karimov bo‘lsa,
           uning maxsus holatini qaytaramiz.
        */

        checkIslomStatus();


        saveData();

        updateGroups();

        renderStudents();

        closeModalWindow();

    }
);


/* =========================================
   EDIT STUDENT
========================================= */

function editStudent(id) {


    const student =
        students.find(
            student =>
                student.id === id
        );


    if (!student) return;


    studentId.value =
        student.id;


    firstName.value =
        student.firstName;


    lastName.value =
        student.lastName;


    group.value =
        student.group;


    phone.value =
        student.phone;


    grade.value =
        student.grade;


    status.value =
        student.status;


    payment.value =
        student.payment;


    attendance.value =
        student.attendance;


    modalTitle.textContent =
        "O‘quvchini tahrirlash";


    openModal();

}


/* =========================================
   DELETE
========================================= */

function deleteStudent(id) {


    const student =
        students.find(
            student =>
                student.id === id
        );


    if (!student) return;


    const answer =
        confirm(
            `${student.firstName} ${student.lastName} ni o‘chirishni xohlaysizmi?`
        );


    if (!answer) return;


    students =
        students.filter(
            student =>
                student.id !== id
        );


    saveData();

    updateGroups();

    renderStudents();

}


/* =========================================
   SEARCH
========================================= */

searchInput.addEventListener(
    "input",
    function() {

        renderStudents();

    }
);


/* =========================================
   GROUP FILTER
========================================= */

groupFilter.addEventListener(
    "change",
    function() {

        renderStudents();

    }
);


/* =========================================
   ESC
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            modal.classList.contains("show")
        ) {

            closeModalWindow();

        }

    }
);


/* =========================================
   START
========================================= */

checkIslomStatus();

updateGroups();

renderStudents();

saveData();