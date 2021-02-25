const APIURL = "bd.json";

let cardUl_1 = document.querySelector(".card-ul-1");
let cardUl_2 = document.querySelector(".card-ul-2");
let cardUl_3 = document.querySelector(".card-ul-3");

getConnect(APIURL);

async function getConnect(url){
    const resp = await fetch(url);
    const respData = await resp.json();

    conclusionDB_1(respData);
    conclusionDB_2(respData);
    conclusionDB_3(respData);
}

function conclusionDB_1(students){
    students.forEach(student => {
        if(
        student.z1 == "н" || 
        student.z2 == "н" || 
        student.z3 == "н" || 
        student.z4 == "н" || 
        student.z5 == "н" || 
        student.e1 == "2" || 
        student.e2 == "2" || 
        student.e3 == "2" || 
        student.e4 == "2"){
            const conclusion1 = document.createElement("li");
            conclusion1.classList.add("conclusion1");
            conclusion1.innerHTML = `
            <div class="index">Группа студента: ${student.index}</div>
            <div class="surname">Фамилия и инициалы студента: ${student.surname}</div>`

            if(
                student.e1 == "2" || 
                student.e2 == "2" || 
                student.e3 == "2" || 
                student.e4 == "2"){
                conclusion1.innerHTML +=  `<div class="surname">Задолженности по экзаменам:</div>`
            }

            if(student.e1 == "2"){
                conclusion1.innerHTML += `<li>Первый экзамен: ${(student.e1) }</li>`
            }

            if(student.e2 == "2"){
                conclusion1.innerHTML += `<li>Второй экзамен: ${(student.e2) }</li>`
            }

            if(student.e3 == "2"){
                conclusion1.innerHTML += `<li>Третий экзамен: ${(student.e3) }</li>`
            }

            if(student.e4 == "2"){
                conclusion1.innerHTML += `<li>Четвертый экзамен: ${(student.e4) }</li>`
            }

            if(
            student.z1 == "н" || 
            student.z2 == "н" || 
            student.z3 == "н" || 
            student.z4 == "н" || 
            student.z5 == "н" ){
                conclusion1.innerHTML +=  `<div class="surname">Задолженности по зачетам:</div>`
            }

            if(student.z1 == "н"){
                conclusion1.innerHTML += `<li>Первый зачет: ${(student.z1) }</li>`
            }

            if(student.z2 == "н"){
                conclusion1.innerHTML += `<li>Второй зачет: ${(student.z2) }</li>`
            }

            if(student.z3 == "н"){
                conclusion1.innerHTML += `<li>Третий зачет: ${(student.z3) }</li>`
            }

            if(student.z4 == "н"){
                conclusion1.innerHTML += `<li>Четвертый зачет: ${(student.z4) }</li>`
            }

            if(student.z5 == "н"){
                conclusion1.innerHTML += `<li>Пятый зачет: ${(student.z5) }</li>`
            }

            cardUl_1.appendChild(conclusion1);
        }
           
    });
}

function conclusionDB_2(students){
    students.forEach(student => {
        if(
        student.z1 == "з" && 
        student.z2 == "з" && 
        student.z3 == "з" && 
        student.z4 == "з" && 
        student.z5 == "з" && 
        student.e1 > 3 && 
        student.e2 > 3 && 
        student.e3 > 3 && 
        student.e4 > 3){
            const conclusion2 = document.createElement("li");
            conclusion2.classList.add("conclusion2");
            conclusion2.innerHTML = `
            <div class="index">Группа студента: ${student.index}</div>
            <div class="surname">Фамилия и инициалы студента: ${student.surname}</div>
            <div class="surname">Результаты экзаменов:</div>
            <li>Первый экзамен: ${(student.e1) }</li>
            <li>Второй экзамен: ${(student.e2) }</li>
            <li>Третий экзамен: ${(student.e3) }</li>
            <li>Четвертый экзамен: ${(student.e4) }</li>
            <div class="surname">Все зачеты сданы!</div>`

            cardUl_2.appendChild(conclusion2);
        }
           
    });
}
function conclusionDB_3(students){
    students.forEach(student => {
            const conclusion3 = document.createElement("li");
            conclusion3.classList.add("conclusion3");
            conclusion3.innerHTML = `
            <div class="index">Группа студента: ${student.index}</div>
            <div class="surname">Фамилия и инициалы студента: ${student.surname}</div>
            <div class="surname">Результаты экзаменов:</div>
            <li>Средний балл: ${((student.e1 + student.e2 + student.e3 + student.e4) / 4) }</li>`

            cardUl_3.appendChild(conclusion3);
           
    });
}