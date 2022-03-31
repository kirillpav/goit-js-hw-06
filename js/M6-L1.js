// const li3 = document.body.childNodes[1].childNodes[1].childNodes[5];
​
// const li4 = li3.nextSibling.nextSibling
​
​
// console.log(li3);
// console.log(li4);
​
​
// const node = document.querySelector('#root li:nth-child(2)');
// const arrNode = document.querySelectorAll('#root li');
​
// console.log(node);
// console.log([...arrNode]);
​
​
/*-------------------*/
​
// const divNode = document.querySelector('#root');
​
// console.log(divNode.classList.contains('test1'));
// divNode.classList.add('test1');
// divNode.classList.remove('test');
// divNode.classList.toggle('ok');
// divNode.classList.toggle('ok');
// divNode.classList.replace('test1', 'test2');
​
// console.log(divNode.classList);
​
// console.log(document.querySelector('img').src);
// console.log(document.querySelector('input').value);
// console.log(document.querySelector('input').name);
// console.log(document.querySelector('input').checked);
​
// console.log([...document.querySelector('#root > *:last-child').children]);
​
// const firstLiNode = document.querySelector('#root ul li:nth-child(3)');
// const ulNode = document.querySelector('#root ul');
​
​
// console.log(firstLiNode.textContent);
// console.log(ulNode.textContent.trim().replaceAll(' ', ''));
​
/*---------------------*/
​
// const liNode = document.querySelector('#root ul li:nth-child(3)');
​
// font-size
// background-color
// liNode.style.fontSize = '35px';
// liNode.style.backgroundColor = 'green';
// liNode.style.color = "red";
​
/*------------------*/
​
// const ulNode = document.querySelector('ul');
​
// console.log(ulNode.hasAttribute('test'));
​
// console.log(ulNode.getAttribute('test1'));
​
// ulNode.setAttribute('test15', 'aleop');
​
// ulNode.removeAttribute('test15');
// ulNode.removeAttribute('test1');
​
// console.log(ulNode.attributes[0].value);
​
// console.log(ulNode);
​
​
/*----------------*/
​
// const aNode = document.querySelector('a');
​
// console.log(aNode.href);
// console.log(aNode.getAttribute('href'));
​
/*--------------*/
​
// const h1Node = document.querySelector('h1');
​
// console.log(h1Node.getAttribute('data-test'));
// console.log(h1Node.dataset.test);
// console.log(h1Node.dataset.action);
​
// h1Node.dataset.newAttr = '555';
​
/*--------------------*/
​
// const h1Node = document.querySelector('ul');
// const selectNode = document.querySelector('select');
​
// console.log(h1Node.textContent);
// console.log(h1Node.innerHTML);
// console.log(h1Node.outerHTML);
​
// selectNode.outerHTML = '<p>hello world!!!</p>';
// selectNode.innerHTML = '<option>hello world!!!</option>';
​
/*------------------------*/
​
// const p = document.createElement('p');
​
// const h1 = document.querySelector('h1');
​
// p.textContent = 'hello world!!!';
// p.style.color = 'red';
// p.style.fontSize = '50px';
// p.style.fontWeight = '900';
​
// const p2 = p.cloneNode(true);
// const p3 = p.cloneNode(true);
// const p4 = p.cloneNode(true);
​
// document.body.prepend(p);
// document.body.append(p2);
// h1.after(p3);
// h1.before(p4);
​
// p2.remove();
// p3.remove();
// p4.remove();
​
/*------------------------*/
​
// const p = document.createElement('p');
// p.textContent = 'hello world!!!';
// p.style.color = 'red';
// p.style.fontSize = '50px';
// p.style.fontWeight = '900';
​
// const rootNode = document.querySelector('#root');
​
// rootNode.insertAdjacentHTML('afterbegin', '<span>TEST</span>');
// rootNode.insertAdjacentHTML('afterend', '<span>TEST</span>');
// rootNode.insertAdjacentHTML('beforebegin', '<span>TEST</span>');
// rootNode.insertAdjacentHTML('beforeend', '<span>TEST</span>');
​
// rootNode.insertAdjacentText('afterend', '<span>TEST</span>');
// rootNode.insertAdjacentElement('beforeend', p);
​
​
/*------------------------*/
​