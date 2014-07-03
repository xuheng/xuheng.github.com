function SCN() {
    this.wall_L = new Image;
    this.wall_R = new Image;
    this.bk = new Image;
    this.Wall_speed=5;

    this.init();
}
(function () {
    var canvas = Core.$G("J_Ninja"),
        cxt = canvas.getContext('2d');

    SCN.prototype = {
        /*
         * 场景初始化
         * */
        init:function () {
            var me = this;
            me.createBackground();
            me.wallMove();
        },
        /*
        * 创建背景
        * */
        createBackground:function () {
            var bk = this.bk;
            bk.onload = function () {
                cxt.drawImage(bk, 0, 0, bk.width, bk.height);
            };
            bk.src = "images/bk.png";
        },
        /*
         * 左右墙移动
         * */
        wallMove:function () {
            var me = this,
                wall_L = me.wall_L,
                wall_R = me.wall_R;

            function move(wall, startX) {
                var dis;
                setInterval(function () {
                    dis += me.Wall_speed;
                    if (dis < wall.height) {
                        cxt.clearRect(startX, 0, wall.width, wall.height);
                        cxt.drawImage(wall, startX, dis, wall.width, wall.height);
                        cxt.drawImage(wall, 0, wall.height - dis, wall.width, dis, startX, 0, wall.width, dis);
                    } else {
                        dis = 0;
                    }
                }, 30);
            }

            wall_L.onload = function () {
                move(this, 0);
            };
            wall_R.onload = function () {
                move(this, me.bk.width - wall_R.width);
            };
            wall_L.src = "images/wall_l.png";
            wall_R.src = "images/wall_r.png";
        }
    };
})();
var scn = new SCN;