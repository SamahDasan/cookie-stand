'use-strict'

const imgElement = document.createElement('img');
imgElement.setAttribute('src','salmon.png');

/*document.write (Math.floor(Math.random()*100));*/

//seattle
const parentElement1 = document.getElementById('article1');
const articleElement = document.createElement('article');
const ulElement = document.createElement('ul');
parentElement1.appendChild(ulElement);
const h1Element =document.createElement('h1');
parentElement1.appendChild(h1Element);

function generateRandomNumber(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min);
}


let houresArray = ['6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am'];
const Seattle = {
    shopName: 'Seattle',
    minCust: 32, 
    maxCust: 65, 
    avg: 6.3, 
    resultArray: [],
    info: function () {
        document.getElementById('head1').textContent=this.shopName;
        let numOfCookies; //let sum=0;
        for (i = 0; i <= houresArray.length; i++) {
            numOfCookies = generateRandomNumber(this.minCust, this.maxCust) * this.avg;
            this.resultArray.push(Math.ceil(numOfCookies));
           const liElement=document.createElement('li');
           ulElement.appendChild(liElement);
           liElement.textContent = houresArray[i]+':'+ this.resultArray[i];
           //sum=sum+resultArray[i];
            //  ulElement.ulElement='${houresArray[i]} :  ${this.resultArray[i]} months old';

        }
        /*let liElementsum=document.createElement('li');
        ulElement.appendChild(liElementsum);
        liElementsum.textContent= 'Total ' +' '+sum;*/
    }
}

//TOKYO
const parentElement2 = document.getElementById('article2');
const articleElement2 = document.createElement('article');
const ulElement2 = document.createElement('ul');
parentElement2.appendChild(ulElement2);
const h1Element2 =document.createElement('h1');
parentElement2.appendChild(h1Element2);

const Tokyo = {
    shopName: 'Tokyo',
    minCust: 3, 
    maxCust: 24, 
    avg: 1.2, 
    resultArray: [],
    info: function () {
        document.getElementById('head2').textContent=this.shopName;
        let numOfCookies;
        for (i = 0; i <= houresArray.length; i++) {
            numOfCookies = generateRandomNumber(this.minCust, this.maxCust) * this.avg;
            this.resultArray.push(Math.ceil(numOfCookies));
           const liElement2=document.createElement('li');
           ulElement2.appendChild(liElement2);
           liElement2.textContent = houresArray[i]+':'+ this.resultArray[i];
            //  ulElement.ulElement='${houresArray[i]} :  ${this.resultArray[i]} months old';

        }
    }
}

//Dubai
const parentElement3 = document.getElementById('article3');
const articleElement3 = document.createElement('article');
const ulElement3 = document.createElement('ul');
parentElement3.appendChild(ulElement3);
const h1Element3 =document.createElement('h1');
parentElement3.appendChild(h1Element3);

const Dubai = {
    shopName: 'Dubai',
    minCust: 11, 
    maxCust: 38, 
    avg: 3.7, 
    resultArray: [],
    info: function () {
        document.getElementById('head3').textContent=this.shopName;
        let numOfCookies;
        for (i = 0; i <= houresArray.length; i++) {
            numOfCookies = generateRandomNumber(this.minCust, this.maxCust) * this.avg;
            this.resultArray.push(Math.ceil(numOfCookies));
           const liElement3=document.createElement('li');
           ulElement3.appendChild(liElement3);
           liElement3.textContent = houresArray[i]+':'+ this.resultArray[i];
            //  ulElement.ulElement='${houresArray[i]} :  ${this.resultArray[i]} months old';

        }
    }
}

//Paris
const parentElement4 = document.getElementById('article4');
const articleElement4 = document.createElement('article');
const ulElement4 = document.createElement('ul');
parentElement4.appendChild(ulElement4);
const h1Element4 =document.createElement('h1');
parentElement4.appendChild(h1Element4);

const Paris = {
    shopName: 'Paris',
    minCust: 20, 
    maxCust: 38, 
    avg: 2.3, 
    resultArray: [],
    info: function () {
        document.getElementById('head4').textContent=this.shopName;
        let numOfCookies;
        for (i = 0; i <= houresArray.length; i++) {
            numOfCookies = generateRandomNumber(this.minCust, this.maxCust) * this.avg;
            this.resultArray.push(Math.ceil(numOfCookies));
           const liElement4=document.createElement('li');
           ulElement4.appendChild(liElement4);
           liElement4.textContent = houresArray[i]+':'+ this.resultArray[i];
            //  ulElement.ulElement='${houresArray[i]} :  ${this.resultArray[i]} months old';

        }
    }
}

//Lima
const parentElement5 = document.getElementById('article5');
const articleElement5 = document.createElement('article');
const ulElement5 = document.createElement('ul');
parentElement5.appendChild(ulElement5);
const h1Element5 =document.createElement('h1');
parentElement5.appendChild(h1Element5);

const Lima = {
    shopName: 'Lima',
    minCust: 2, 
    maxCust: 16, 
    avg: 4.6, 
    resultArray: [],
    info: function () {
        document.getElementById('head5').textContent=this.shopName;
        let numOfCookies;
        for (i = 0; i <= houresArray.length; i++) {
            numOfCookies = generateRandomNumber(this.minCust, this.maxCust) * this.avg;
            this.resultArray.push(Math.ceil(numOfCookies));
           const liElement5=document.createElement('li');
           ulElement5.appendChild(liElement5);
           liElement5.textContent = houresArray[i]+':'+ this.resultArray[i];
            //  ulElement.ulElement='${houresArray[i]} :  ${this.resultArray[i]} months old';

        }
    }
}


Seattle.info();
Tokyo.info();
Dubai.info();
Paris.info();
Lima.info();

console.log(Scattle);
console.log(Tokyo);
console.log(Dubai);
