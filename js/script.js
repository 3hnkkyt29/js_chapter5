const menu = document.querySelector('#menu');
const lists = [
    'strawberry.jpg',
    'lime.jpg',
    'mango.jpg',
    'lemon.jpg',
    'fig.jpg',
    'apple.jpg',
    ];
// console.log(lists[1]);
// 5-4
/*
配列の書き方は
const 定数名 = [要素１, 要素２, 要素３, 要素４, 要素５];
*/

/*
22行目は
const content = `<div><img src="images/strawberry.jpg" alt=""></div>`;
って書くのと同じ
*/
const content = `<div><img src="images/${lists[0]}" alt=""></div>
<div><img src="images/${lists[1]}" alt=""></div>
<div><img src="images/${lists[2]}" alt=""></div>
<div><img src="images/${lists[3]}" alt=""></div>
<div><img src="images/${lists[4]}" alt=""></div>
<div><img src="images/${lists[5]}" alt=""></div>
`;

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

// 5-5
/*
for文＝ループ処理
for(初回に実行する処理; 繰り返し条件; 各繰り返し後の処理){
    繰り返し実行する処理
}
*/
for(let i = 1; i <= 10; i++){
    console.log(`${i}回目のこんにちは！`);
}