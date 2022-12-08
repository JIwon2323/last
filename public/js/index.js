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


