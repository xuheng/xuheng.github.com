function Person() {
    this.playerFace = new Image;
    this.playerFly = new Image;

    this.startY = 400;//初始Y坐标
    this.init();
}
(function () {
    var canvas = Core.$G("J_Ninja"),
        cxt = canvas.getContext('2d');

    Person.prototype = {
        /*
         * 初始化人物
         * */
        init:function () {
            var me = this;
            me.run(true);
            Core.addHandler(canvas, "click", function () {
                me.fly();
            });
        },
        /*
         * 让人物移动
         * */
        run:function (isLeft) {
            var me = this,
                playerFace = me.playerFace;

            playerFace.onload = function () {
                me.startX = isLeft ? scn.wall_L.width : (scn.bk.width - scn.wall_L.width - playerFace.width / 4);
                me.width = parseInt(playerFace.width / 4);
                me.height = playerFace.height;
                me._animation(this);
            };

            me.playerFace.src = isLeft ? 'images/player_l.png' : 'images/player_r.png';

        },
        /*
         * 根据图片大小顺序播放
         * */
        _animation:function (img, fn) {
            var me = this,
                interval = 0;
            clearInterval(me.timer);
            me.timer = setInterval(function () {
                interval < (me.width * 3) ? (interval += me.width) : (interval = 0);

                cxt.clearRect(me.startX, me.startY, me.width, me.height);  //清空局部
                cxt.drawImage(scn.bk, me.startX, me.startY, me.width, me.height, me.startX, me.startY, me.width, me.height);  //绘制场景
                cxt.drawImage(img, interval, 0, me.width, me.height, me.startX, me.startY, me.width, me.height);    //绘制人物

                if (fn) {
                    return fn(me.timer);
                }
            }, 60);
        },
        /*
         * 碰撞检测
         * */
        _checkHit:function (isRight) {
            if(isRight){
                if (this.startX+ this.playerFly.width / 4 >= scn.bk.width - scn.wall_L.width) {
                    return true;
                } else {
                    return false;
                }
            }else{
                if (this.startX <= scn.wall_L.width) {
                    return true;
                } else {
                    return false;
                }
            }

        },
        /*
         * 让人物旋转
         * */
        fly:function () {
            var me = this,
                playerFly = me.playerFly;
            if (arguments.callee.toRight) {
                playerFly.onload = function () {
                    me.width = parseInt(playerFly.width / 4);
                    me.height = playerFly.height;
                    me.startX-=80;
                    me._animation(this, function () {
                        if (me._checkHit(false)) {
                            clearInterval(me.timer);
                            cxt.clearRect(me.startX, me.startY, me.width, me.height);  //清空局部
                            cxt.drawImage(scn.bk, me.startX, me.startY, me.width, me.height, me.startX, me.startY, me.width, me.height);  //绘制场景
                            me.run(true);
                        }
                        else {
                            cxt.clearRect(me.startX+me.width, me.startY, 10, me.height);  //清空局部
                            cxt.drawImage(scn.bk, me.startX+me.width, me.startY, 10, me.height, me.startX+me.width, me.startY, 10, me.height);  //绘制场景

                            cxt.clearRect(me.startX, me.startY, 10, me.height);  //清空局部
                            cxt.drawImage(scn.bk, me.startX, me.startY, 10, me.height, me.startX, me.startY, 10, me.height);  //绘制场景
                            me.startX -= 10;
                        }

                    });
                };
                me.playerFly.src = 'images/fly_r.png';
                arguments.callee.toRight=false;
            } else {
                playerFly.onload = function () {
                    me.width = parseInt(playerFly.width / 4);
                    me.height = playerFly.height;
                    me._animation(this, function () {
                        if (me._checkHit(true)) {
                            clearInterval(me.timer);
                            cxt.clearRect(me.startX, me.startY, me.width, me.height);  //清空局部
                            cxt.drawImage(scn.bk, me.startX, me.startY, me.width, me.height, me.startX, me.startY, me.width, me.height);  //绘制场景
                            me.run(false);
                        }
                        else {
                            cxt.clearRect(me.startX, me.startY, 10, me.height);  //清空局部
                            cxt.drawImage(scn.bk, me.startX, me.startY, 10, me.height, me.startX, me.startY, 10, me.height);  //绘制场景
                            me.startX += 10;
                        }

                    });
                };
                me.playerFly.src = 'images/fly_l.png';
                arguments.callee.toRight=true;
            }

        }
    };
})();
var player = new Person;