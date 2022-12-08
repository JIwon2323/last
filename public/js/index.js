const reg3 = /^\w{5,12}@[a-z]{2,10}[\.][a-z]{2,3}[\.]?[a-z]{0,2}$/;
const headerUserNameELement=document.querySelector('.user');
const localUserName=localStorage.getItem('userName');
const userNameElement=document.querySelector('#name');

const setUserNameInnerHtml=(name)=>{
  headerUserNameELement.innerHTML='${name}<span>님</span>';
  userNameElement.textContent=name;
};
if (localUserName) {
  setUserNameInnerHtml(localUserName);
}
userNameElement.onclick=()=>{
  const userName = prompt('이름을 입력해주세요');
  localStorage.setItem('userName', userName);
  setUserNameInnerHtml(userName);
};

const localUserEmail=localStorage.getItem('userEmail');
const userEmailElement=document.querySelector('#email');

// eslint-disable-next-line no-unused-vars
const setUserEmailInnerHtml=(email)=>{
  userEmailElement.textContent=email;
};
if (localUserEmail) {
  setUserEmailInnerHtml(localUserEmail);
}

userEmailElement.onclick=()=>{
  const userEmail=prompt('메일을 입력해주세요');
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (reg3.test(userEmail)) {
      break;
    }
    alert('메일형식이 잘못되었습니다.');
    // eslint-disable-next-line no-const-assign
    userEmail=prompt('메일주소는');
  }
  localStorage.setItem('userEmail', userEmail);
  setUserEmailInnerHtml(userEmail);
};
// const localStudentID=localStorage.getItem('StudentID');
// const StudentIDElement=document.querySelector('#StudentID');

// // eslint-disable-next-line no-unused-vars
// const setStudentIDInnerHtml=(StudentID)=>{
//   StudentIDElement.textContent=StudentID;
// };
// if (localStudentID) {
//   setUserEmailInnerHtml(localStudentID);
// }
// userEmailElement.onclick=()=>{
//   const StudentID=prompt('학번 입력해주세요');
//   localStorage.setItem('StudentID', StudentID);
//   setUserEmailInnerHtml(StudentID);
// };

