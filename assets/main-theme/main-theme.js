// 长矩形动画
rect_gen = function ($DOM) {
  // let vw = window.innerWidth / 100;

  // 初始化矩阵列表
  let x = 36;
  let y = 6;
  let rect_array = Array(x)
    .fill(0)
    .map((x) => Array(y).fill(0));
  let gr = () => {
    // 随机状态生成
    if (Math.floor(Math.random() * 3) === 0) return 0;
    else if (Math.floor(Math.random() * 5) === 0) return 2;
    else return 1;
  };
  const color = ["transparent", "#e6eef4", "#d9dee8"];
  for (let i in rect_array) {
    rect_array[i] = [gr(), gr(), gr(), gr(), gr(), gr(), gr()];
  }

  // 初始绘图
  for (let i in rect_array) {
    for (let j in rect_array[i]) {
      let btm = 3 * j * Math.cos(36 * 6.28) - 3 * i * Math.sin(36 * 6.28) - 15;
      let left = 3 * j * Math.sin(36 * 6.28) + 3 * i * Math.cos(36 * 6.28);
      let $rect = $(
        `<div id='ani${i}_${j}' style='width:2vw; height:2vw; min-width:30px; min-height:30px; background-color: ${
          color[rect_array[i][j]]
        }; position:fixed; bottom: ${btm}vw; left:${left}vw; z-index: -5; transform:rotate(-8deg);'></div>`
      );
      $DOM.append($rect);
    }
  }

  // 更新绘图
  let update = (i, j, state) => {
    rect_array[i][j] = state;
    $("#ani" + i + "_" + j).animate(
      {
        backgroundColor: color[rect_array[i][j]],
      },
      // 1000 * (Math.random() + 1)
      800
    );
  };
  setInterval(() => {
    if ($("div.animation").is(":visible")) {
      let i = Math.floor((x - 1) * Math.random());
      let j = Math.floor((y - 1) * Math.random());
      update(i, j, rect_array[i][j + 1]);
      update(i, j + 1, rect_array[i + 1][j + 1]);
      update(i + 1, j + 1, rect_array[i + 1][j]);
      update(i + 1, j, rect_array[i][j]);
    }
  }, 800);

  // setInterval(() => {
  //   vw = window.innerWidth / 100;
  //   if (vw > 13) {
  //     $("#animation").fadeIn(300);
  //   } else {
  //     $("#animation").fadeOut(300);
  //   }
  // }, 100);
};
