const headerUserNameELement=document.querySelector('.user');
const userNameELement=document.querySelector.apply('.user-name');
const localUserName=localStorage.getItem('userName');
const setUserNameInnerHtml=(name)=>{
  headerUserNameELement.innerHTML='${name}<span>님</span>';
  userNameELement.innerHTML ='${name}<span>님</span>';
};
if (localUserName) {
  setUserNameInnerHtml(localUserName);
}
userNameELement.onclick=()=>{
  const userName = prompt('이름을 입력해주세요');
  localStorage.setItem('userName', userName);
  setUserNameInnerHtml(userName);
};


