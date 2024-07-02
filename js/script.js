var p = document.getElementById('text');

//タイピングする文字列をここで用意しておく
var textLists = [
    'Hello World!!',
    'This is simple App',
    'How are you?',
    'Hello MIL',
    'I love MIL!',
    'Good morning',
    'I am Japanese',
    '123-456-789'
];

// p.textContent = textLists[0];

var checkTexts = [];

createText();

function createText() {
    //文字列をランダムに取得
    var rnd = Math.floor(Math.random() * textLists.length);

    //前の文字列を削除してから次の文字列を表示
    p.textContent = '';
    
    //文字列を1文字ずつに分解して、それぞれにspanタグを挿入
    // checkTexts = textLists[0].split('')
    // console.log(checkTexts);
    checkTexts = textLists[rnd].split('').map(function(value) {
        var span = document.createElement('span');

        span.textContent = value;
        p.appendChild(span);

        return span;
    });
}

// console.log(checkTexts);


document.addEventListener('keydown', keyDown);


function keyDown(e) {
    // console.log(e.key);

    //キーボードからの入力は「e.key」に格納
    // if(e.key === checkTexts[0]) {
    //     console.log('OK');
    // }
    if(e.key === checkTexts[0].textContent) {
        checkTexts[0].className = 'red';

        //0番目の配列要素を削除して、次の1文字を比較対象にする
        checkTexts.shift();

        //配列要素が空っぽになったら次の問題を出す
        if(!checkTexts.length) createText();
    }
}
