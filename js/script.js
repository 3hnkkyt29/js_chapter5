const menu = document.querySelector('#menu');

// 5-8
// const strawberry = {
//     name: 'イチゴ',
//     img:'strawberry.jpg',
//     price:450,
// };
// console.log(strawberry.name);
// console.log(strawberry['img']);

// const lists = [
//     'strawberry.jpg',
//     'lime.jpg',
//     'mango.jpg',
//     'lemon.jpg',
//     'fig.jpg',
//     'apple.jpg',
//     ];

// 5-10
const lists = [
    {
        name: 'イチゴ',
        img: 'strawberry.jpg',
        price: 450,
    },
    {
        name: 'ライム',
        img: 'lime.jpg',
        price: 400,
    },
    {
        name: 'マンゴー',
        img: 'mango.jpg',
        price: 500,
    },
    {
        name: 'レモン',
        img: 'lemon.jpg',
        price: 400,
    },
    {
        name: 'イチジク',
        img: 'fig.jpg',
        price: 500,
    },
    {
        name: 'リンゴ',
        img: 'apple.jpg',
        price: 400,
    },
    ];
    // console.log(lists[0].name);
    // 画像が出なくなる

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
// const content = `<div><img src="images/${lists[0]}" alt=""></div>
// <div><img src="images/${lists[1]}" alt=""></div>
// <div><img src="images/${lists[2]}" alt=""></div>
// <div><img src="images/${lists[3]}" alt=""></div>
// <div><img src="images/${lists[4]}" alt=""></div>
// <div><img src="images/${lists[5]}" alt=""></div>
// `;

// // menu.textContent = content;
// menu.insertAdjacentHTML('beforeend', content);
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
// 5-5
// for(let i = 1; i <= 10; i++){
//     console.log(`${i}回目のこんにちは！`);
// }

// 5-6
// for (let i = 0; i < 6; i++){
//     const content = `<div><img src="images/${lists[i]}" alt=""></div>`;
//     menu.insertAdjustHTML('beforeend', content);
// }
// ↑これを入れると画像が消える、、
// Adjacentをスペルミスしてた、、

for(let i = 0; i < lists.length; i++){
    const name = lists[i].name;
    const price = lists[i].price;
    const img = lists[i].img;
    
    const content = `<div><img src="images/${img}" alt=""><h2>${name}</h2><p>${price}円</p></div>`;
    menu.insertAdjacentHTML('beforeend', content);
}

// 5-7
/*
「let」で再代入ができる
例
let letName = 'ユウタ';
console.log(letname);
→「ユウタ」が出力される
let letName = 'ユウタ';
letName = 'フウガ';
console.log(letname);
→「フウガ」が出力されて「ユウタ」は削除される
*/

// 5-8
/*
const 定数名 = {
    キー : 値
};
プロパティが複数ある場合は、値の後に「,」をつける
*/

