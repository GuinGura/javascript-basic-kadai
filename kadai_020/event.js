//ボタン要素を取得する
const pushBtn =  document.getElementById('btn');

//テキスト要素を取得し定数に代入する
const parentList = document.getElementById('text');

//ボタンをクリックしたときのイベント処理
pushBtn.addEventListener('click', () => {
    //新しくHTML要素を作り、子要素として代入する
    const childList = document.createElement('h2');
    //テキスト要素に「ボタンをクリックしました」を代入する
    text.textContent = 'ボタンをクリックしました';
});