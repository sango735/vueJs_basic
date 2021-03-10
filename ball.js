//画面内で黒丸を動かす為のクラス定義
const movable = function(x,y) {
  this.pos = {
    x: x,
    y: y
  };

  this.move = (x,y) => {
    this.pos.x += x;
    this.pos.y += y;
  };
}

let ball = [];
//黒丸のオブジェクトのインスタンスを生成
for (let count = 0; count<= 100; count++){
  ball[count] = new movable (
    Math.floor(Math.random() * window.innerWidth),
    Math.floor(Math.random() * window.innerHeight)
  );
}

//黒丸をブラウザ上へ表示する
//上記のfor文の中に含めても結果は同じだが、処理ごとに記述を分けたい為切り分け
for (count = 0; count<= 100; count++){
  document.write('<div class = "ball" style = "top:' + 
  ball[count].pos.y + 'px; left:' + ball[count].pos.x + 'px;">●</div>');
}