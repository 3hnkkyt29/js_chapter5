const menu = document.querySelector('#menu');
const content = `<div><img src="images/strawberry.jpg" alt=""></div>`;
// menu.textContent = content;
menu.insertAdjacentHTML('beforeend', content);
/*
要素.insertAdjacentHTML(`挿入位置`, 挿入内容);
挿入位置は以下の4つ
beforebegin...要素の直前に挿入
afterbegin...要素内部の、最初の子要素の前に挿入
beforeend...要素内部の、最初の子要素の後に挿入
afterend...要素の直後に挿入
すなわち
　*befirbegin*
　<div>
　*afterbegin*
　HTMLを挿入したい！
　*beforeend*
　</div>
　*afterend*
*/