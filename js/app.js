'use-strict'

const parentElement1 = document.createElement('article');
parentElement1 = document.getElementById('article1');

let total = 0;
let timeArr=['00.06','00.07','00.08','00.09','00.10','00.11','00.12','00.01','00.02','00.03','00.04','00.05','00.06','00.07'];
function Shop (shopName,minCust,maxCust,avg){
    this.shopName=shopName;
    this.minCust=minCust;
    this.maxCust=maxCust;
    this.avg=avg; 
    this.CustArr-[];
    this.hoursTotal=0;
    this.randomCust=function(){
        for(let i=0;i<timeArr.length;i++)
        this.CustArr.push(randomNumber(this.minCust,this.maxCust));
    };

};

Shop.prototype.randomCustomer=function(){
    for (i=0;i<timeArr.length;i++){
    let total=Math.ceil(randomNumber(this.minCust,this.maxCust)*this.avg ;
    this.CustArr.push(total);
     this.hoursTotal +=total;
    }
}


Shop.prototype.render=function(){
const tableElement=document.getElementById('table1');
const tr = document.creatrElement('tr');
tableElement.appendChild(tr);
const td1= document.createElement('td');
tr.appendChild(td1);
td1.textContent=this.ahopName;
for (let i=0;i<timeArr.length;i++){
const td2 = document.createElement(td2);
tr.appendChild(td2);
td2.textContent=this.CustArr[i];
}
const td3 =document.createElement('td');
tr.appendChild(td3);
td3.textContent=this.hoursTotal;
};

const tableHeader=function(){}


const tableFooter=function(){
const tr =document.createElement('tr');
tableElement.appendChild(tr);

const th1=document.createElement('th');
tr.appendChild(th1);
this.textContent='Total';

for (let i=0;i<hoursArr.length;i++)
{
    const th2=document.createElement('th');
    tr.appendChild(th2);
    th2.textContent=Seattle.CustArr[i]+Tokyo.CustArr[i]+parseInt.CustArr[i]+Dubai.CustArr[i]+Lima.CustArr[i];
}
const th3 = document.createElement('th');
tr.appendChild(th3);
th3.textContent= Seattle.hoursTotal+Tokyo.hoursTotal+Paris.hoursTotal+Dubai.hoursTotal+Lima.hoursTotal;
}

tableFooter();

