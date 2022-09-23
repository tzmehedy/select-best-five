const addSelect=(data,button)=>{
    const selectedFive = document.getElementById('selected-Five');
    const selectedList=document.createElement('li');
    selectedList.classList.add('selected')
    selectedList.innerHTML=`${data}`;
    const selectedLength=document.querySelectorAll('.selected')
    if(selectedLength.length <= 4){
        selectedFive.appendChild(selectedList);
    }
    else{
        alert('You Are Already Selected Five Player')
        return;
    }
    button.setAttribute('disabled',true); 
}
const calculate=()=>{
    const perPlayerAmount=document.getElementById('per-Player-Amount').value;
    const selectedLength=document.querySelectorAll('.selected');
    const playerExpenses=document.getElementById('player-expenses');
    const playerExpensesTotal= parseFloat(perPlayerAmount)*selectedLength.length;
    playerExpenses.innerText=playerExpensesTotal;
}