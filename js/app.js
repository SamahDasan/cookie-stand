'use strict'


const parentDiv = document.getElementById('parentDiv');
const table = document.createElement('table');
parentDiv.appendChild(table);

let total = 0;
let timeArr=['06:AM','07:AM','08:AM','09:AM','10:AM','11:AM','12:AM','01:PM','02:PM','03:PM','04:PM','05:PM','06:PM','07:PM'];
function Shop (shopName,minCust,maxCust,avg){
    this.shopName=shopName;
    this.minCust=minCust;
    this.maxCust=maxCust;
    this.avg=avg; 
    this.CustArr=[];
    this.hoursTotal=0;
    this.randomCust=function(){
        for(let i=0;i<timeArr.length;i++)
        this.CustArr.push(randomNumber(this.minCust,this.maxCust));
    }

};

Shop.prototype.randomCustomer=function(){
    for (i=0;i<timeArr.length;i++){
    let total=Math.ceil(randomNumber(this.minCust,this.maxCust)*this.avg);
    this.CustArr.push(total);
     this.hoursTotal +=total;
    }
}

Shop.prototype.header=function(){
const trheader = document.createElement('tr');
table.appendChild(trheader);
const td1= document.createElement('td');
trheader.appendChild(td1);
td1.textContent='Cities';
for (let i=0;i<timeArr.length;i++){
const td2 = document.createElement('td2');
trheader.appendChild(td2);
td2.textContent=timeArr[i];
}
const td3 =document.createElement('td');
trheader.appendChild(td3);
td3.textContent='Daily Total';
}


Shop.prototype.render=function(){
const tr = document.createElement('tr');
table.appendChild(tr);
const td1= document.createElement('td');
tr.appendChild(td1);
td1.textContent=this.shopName;
for ( let i=0;i<timeArr.length;i++){
const td2 = document.createElement('td');
tr.appendChild(td2);
td2.textContent=this.CustArr[i];
}
const td3 =document.createElement('td');
tr.appendChild(td3);
td3.textContent=this.hoursTotal;
}


const tableFooter=function(){
const tr =document.createElement('tr');
table.appendChild(tr);
const th1=document.createElement('th');
tr.appendChild(th1);
th1.textContent='Total';
for (let i=0;i<timeArr.length;i++)
{
    const th2=document.createElement('th');
    tr.appendChild(th2);
    th2.textContent=Seattle.CustArr[i]+Tokyo.CustArr[i]+CustArr[i]+Dubai.CustArr[i]+Lima.CustArr[i];
}
const th3 = document.createElement('th');
tr.appendChild(th3);
th3.textContent= Seattle.hoursTotal+Tokyo.hoursTotal+Paris.hoursTotal+Dubai.hoursTotal+Lima.hoursTotal;
}




const Seattle= new Shop(23,40,3.2);
Seattle.header();
Seattle.render();

const Tokyo=new Shop(11,25,4.5);
Tokyo.header();
Tokyo.render();

const Paris =new Shop(7,5,2.5);
Paris.header();
Paris.render();

const Dubai= new Shop(23,40,3.2);
Dubai.header();
Dubai.render();

const Lima =new Shop(7,5,2.5);
Lima.header();
Lima.render();

tableFooter();