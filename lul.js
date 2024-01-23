// var cellw = 50;
// var cellh = 44;
// var W = 500;
// var H = 330;

// var config = {
//     type: Phaser.AUTO,
//     width: W,
//     height: H,
//     parent: 'isaac_gen',
//     scene: {
//         preload: preload,
//         create: create,
//         update: update
//     }
// };

// var game = new Phaser.Game(config);

// function preload ()
// {
//     if(window.baseUrl)
//         this.load.setBaseURL(baseUrl);

//     this.load.image('cell', 'cell.png');
//     this.load.image('boss', 'boss.png');
//     this.load.image('reward', 'reward.png');
//     this.load.image('coin', 'coin.png');
//     this.load.image('secret', 'secret.png');
// }

// var startText;
// var started = false;
// var placedSpecial;
// var images = [];
// var floorplan;
// var floorplanCount;
// var cellQueue;
// var endrooms;
// var maxrooms = 15;
// var minrooms = 7;
// var bossl;

// function create ()
// {
//     startText = this.add.text(W/2, H/2, 'Click to Start', { fontSize: '32px', fill: '#FFF' });
//     startText.x -= startText.width / 2;

//     this.input.on('pointerdown', start, this);
// }

// function img(scene, i, name)
// {
//     var x = i % 10;
//     var y = (i - x) / 10;
//     var img = scene.add.image(W/2 + cellw * (x - 5), H/2 + cellh * (y - 4), name);
//     images.push(img);
//     return img;
// }

// function poprandomendroom()
// {
//     var index = Math.floor(Math.random() * endrooms.length);
//     var i = endrooms[index];
//     endrooms.splice(index, 1);
//     return i;
// }

// function picksecretroom()
// {
//     for(var e=0;e<900;e++)
//     {
//         var x = Math.floor(Math.random() * 9) + 1;
//         var y = Math.floor(Math.random() * 8) + 2;
//         var i = y*10 + x;

//         if(floorplan[i])
//             continue;

//         if (bossl == i-1 || bossl == i+1 || bossl == i+10 || bossl == i-10)
//             continue;

//         if(ncount(i) >= 3)
//             return i;

//         if(e > 300 && ncount >= 2)
//             return i;

//         if(e > 600 && ncount >= 1)
//             return i;
//     }
// }


// function update()
// {
//     if(started){
//         if(cellQueue.length > 0)
//         {
//             var i = cellQueue.shift();
//             var x = i % 10;
//             var created = false;
//             if(x > 1) created = created | visit(this, i - 1);
//             if(x < 9) created = created | visit(this, i + 1);
//             if(i > 20) created = created | visit(this, i - 10);
//             if(i < 70) created = created | visit(this, i + 10);
//             if(!created) {
//                 endrooms.push(i);
//             }
//         }
//         else if(!placedSpecial) {

//             if(floorplanCount < minrooms) {
//                 start.apply(this);
//                 return;
//             }

//             placedSpecial = true;
//             bossl = endrooms.pop();
//             var cellImage = img(this, bossl, 'boss');
//             cellImage.x += 1;
            
//             var rewardl = poprandomendroom();
//             var cellImage = img(this, rewardl, 'reward');

//             var coinl = poprandomendroom();
//             img(this, coinl, 'coin');

//             var secretl = picksecretroom();
//             img(this, secretl, 'cell');
//             img(this, secretl, 'secret');

//             if (!rewardl || !coinl || !secretl) {
//                 start.apply(this);
//                 return;
//             }
//         }
//     }
// }

// function start()
// {
//     started = true;
//     placedSpecial = false;
//     if(startText) {
//         startText.destroy();
//         startText = null;
//     }
//     images.forEach(image => {
//         image.destroy();
//     });
//     images = [];
//     floorplan = [];
//     for(var i =0;i<=100;i++) floorplan[i] = 0;
//     floorplanCount = 0;
//     cellQueue = [];
//     endrooms = [];
//     // Our grid is one row lower than isaacs as referencing negative indices isn't a good idea in JS
//     visit(this, 45);
// }

// function ncount(i)
// {
//     return floorplan[i-10] + floorplan[i-1] + floorplan[i+1] + floorplan[i+10];
// }

// function visit(scene, i)
// {
//     if(floorplan[i])
//         return false;

//     var neighbours = ncount(i);

//     if (neighbours > 1)
//         return false;

//     if (floorplanCount >= maxrooms)
//         return false;

//     if(Math.random() < 0.5 && i != 45)
//         return false;

//     cellQueue.push(i);
//     floorplan[i] = 1;
//     floorplanCount += 1;

//     img(scene, i, 'cell')
//     return true;
// }

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }
// getRandomArbitrary(1,9)

// console.log(getRandomArbitrary(1,9))