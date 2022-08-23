function addElement(parent, type, array, attribute){
    array.forEach(ele => {
        let newElement = document.createElement(type);
        newElement.innerText = ele;
        newElement.setAttribute("class", attribute);
        parent.appendChild(newElement);
    });
}

let array = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."];

addElement(document.body.children[1].children[1], "li", array, "bio");


function currentTime(){
    let time = new Date();
    document.body.children[2].children[0].innerText = "I live in the United States of American, and it's currently"
    document.body.children[2].children[0].innerText += ` ${time}`;

    setTimeout(currentTime, 1000);
}
currentTime();

function countDown(){
    let targetDate = new Date('December 31, 2022 23:59:59');
    const [tSecond, tMinute, tHour, tDay, tMonth] = [targetDate.getSeconds(), targetDate.getMinutes(), targetDate.getHours(), targetDate.getDate(), targetDate.getMonth()];
    const [cSecond, cMinute, cHour, cDay, cMonth] = [new Date().getSeconds(), new Date().getMinutes(), new Date().getHours(), new Date().getDate(), new Date().getMonth()];

    let remainingTime = `We are ${tMonth - cMonth} months, ${tDay - cDay} days, ${tHour - cHour} hours, ${tMinute - cMinute} minutes, and ${tSecond - cSecond} seconds away from New Year 2023`;

    document.body.children[2].children[1].innerText = remainingTime;

    setTimeout(countDown, 1000);
}
countDown();
