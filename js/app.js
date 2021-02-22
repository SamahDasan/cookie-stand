'use-strict'

const parentElement1 = document.createElement('article');
parentElement1 = document.getElementById('article1');
const tableElement = document.createElement('table');
tableElement=document.getElementById('table1');
parentElement1.appendChild(tableElement);

const headersleElement=document.createElement('tr');
tableElement.appendChild(headersElement);
theadersElement1=document.getElementById('headers');
const thElement1=document.createElement('th');thElement1=document.getElementById('header1');
headersleElement.appendChild(thElement1);thElement1.textContent='06.00';
const thElement2=document.createElement('th');thElement2=document.getElementById('header2');
headersleElement.appendChild(thElement2);thElement2.textContent='07.00'
const thElement3=document.createElement('th');thElement3=document.getElementById('header3');
headersleElement.appendChild(thElement3);thElement3.textContent='08.00'
const thElement4=document.createElement('th');thElement4=document.getElementById('header4');
headersleElement.appendChild(thElement4);thElement4.textContent='00.09'
const thElement5=document.createElement('th');thElement5=document.getElementById('header5');
headersleElement.appendChild(thElement5);thElement5.textContent='00.10';
const thElement6=document.createElement('th');thElement6=document.getElementById('header6');
headersleElement.appendChild(thElement6);thElement6.textContent='00.11';
const thElement7=document.createElement('th');thElement7=document.getElementById('header7');
headersleElement.appendChild(thElement7);thElement7.textContent='00.12';
const thElement8=document.createElement('th');thElement8=document.getElementById('header8');
headersleElement.appendChild(thElement8);thElement8.textContent='00.01';
const thElement9=document.createElement('th');thElement9=document.getElementById('header9');
headersleElement.appendChild(thElement9);thElement9.textContent='00.02';
const thElement10=document.createElement('th');thElement10=document.getElementById('header10');
headersleElement.appendChild(thElement10);thElement10.textContent='00.03';
const thElement11=document.createElement('th');thElement11=document.getElementById('header11');
headersleElement.appendChild(thElement11);thElement11.textContent='00.04';
const thElement12=document.createElement('th');thElement12=document.getElementById('header12');
headersleElement.appendChild(thElement12);thElement12.textContent='00.05';
const thElement13=document.createElement('th');thElement13=document.getElementById('header13');
headersleElement.appendChild(thElement13);thElement13.textContent='00.06';
const thElement14=document.createElement('th');thElement14=document.getElementById('header14');
headersleElement.appendChild(thElement14);thElement14.textContent='00.07';
function generateRandomNumber(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min);
}

/*
let houresArray = ['6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am'];
for(i=0;i<=houresArray.length;i++)
{    thElement[i] =houseArray[i];
    thElement.textContent=houresArray[i];
}  ;

function Shop (shopName,minCust,maxCust,avg){
    this.shopName=shopName;
    this.minCust=minCust; 
    this.maxCust=maxCust ; 
    this.avg=avg; 
    const resultArray=new array();
    total=0;};
    Shop.prototype. render= function () {
        let numOfCookies; 
        for (i = 0; i < houresArray.length; i++) {
            numOfCookies = generateRandomNumber(this.minCust, this.maxCust) * this.avg;
            this.resultArray.push(Math.ceil(numOfCookies));
            this.total +=this.resultArray[i];

           const tdElement=document.createElement('td');
           trElement.appendChild(tdElement);
           tdElement.textContent = houresArray[i]+':'+ this.resultArray[i];
           
           //sum=sum+resultArray[i];
            //  ulElement.ulElement='${houresArray[i]} :  ${this.resultArray[i]} months old';
        }
        const trElement=document.createElement('tr');
        tableElement.appendChild(trElement);
};

const Seattle = new Shop('Seattle',23,65,6.3);
Seattle.render();*/