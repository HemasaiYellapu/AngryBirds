var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["88d06720-d8a6-401f-a06a-21ec91d04d21","8a303f0c-c66b-4670-9ec1-b88f86393291","1682196c-8ce8-401b-bf55-48e60646c4b0","3b235030-bc74-4d1d-af65-36939fc3dc81","3f81ba90-0e6d-417c-b45d-638e26613201","55a18ff7-a59c-480e-b42b-366f754a8732","7073c87d-baaa-4108-ba95-7732ee6fd880"],"propsByKey":{"88d06720-d8a6-401f-a06a-21ec91d04d21":{"name":"bg.png_1","sourceUrl":"assets/v3/animations/vM27H9OMqx5XLdEXgdHDn6g4P9agHcWI6-3lWgUdhWE/88d06720-d8a6-401f-a06a-21ec91d04d21.png","frameSize":{"x":1200,"y":750},"frameCount":1,"looping":true,"frameDelay":4,"version":"zGM4LWpWaWks0rfG.y4pDW8ovzAtsJX1","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":750},"rootRelativePath":"assets/v3/animations/vM27H9OMqx5XLdEXgdHDn6g4P9agHcWI6-3lWgUdhWE/88d06720-d8a6-401f-a06a-21ec91d04d21.png"},"8a303f0c-c66b-4670-9ec1-b88f86393291":{"name":"enemy.png_1","sourceUrl":"assets/v3/animations/vM27H9OMqx5XLdEXgdHDn6g4P9agHcWI6-3lWgUdhWE/8a303f0c-c66b-4670-9ec1-b88f86393291.png","frameSize":{"x":78,"y":154},"frameCount":1,"looping":true,"frameDelay":4,"version":"sBgpTItAP.Fd90pRJZS8TaKqXFKuxkjj","loadedFromSource":true,"saved":true,"sourceSize":{"x":78,"y":154},"rootRelativePath":"assets/v3/animations/vM27H9OMqx5XLdEXgdHDn6g4P9agHcWI6-3lWgUdhWE/8a303f0c-c66b-4670-9ec1-b88f86393291.png"},"1682196c-8ce8-401b-bf55-48e60646c4b0":{"name":"sling.png_1","sourceUrl":"assets/v3/animations/vM27H9OMqx5XLdEXgdHDn6g4P9agHcWI6-3lWgUdhWE/1682196c-8ce8-401b-bf55-48e60646c4b0.png","frameSize":{"x":132,"y":383},"frameCount":1,"looping":true,"frameDelay":4,"version":"eXI4fgWFjRYRX6KPKohLudwLeeuzARQ_","loadedFromSource":true,"saved":true,"sourceSize":{"x":132,"y":383},"rootRelativePath":"assets/v3/animations/vM27H9OMqx5XLdEXgdHDn6g4P9agHcWI6-3lWgUdhWE/1682196c-8ce8-401b-bf55-48e60646c4b0.png"},"3b235030-bc74-4d1d-af65-36939fc3dc81":{"name":"images.jpeg_1","sourceUrl":null,"frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":"6Z6NkTkUqpI9eWtrtClpXC6psIwtOaAW","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/3b235030-bc74-4d1d-af65-36939fc3dc81.png"},"3f81ba90-0e6d-417c-b45d-638e26613201":{"name":"wood1.png_1","sourceUrl":"assets/v3/animations/vM27H9OMqx5XLdEXgdHDn6g4P9agHcWI6-3lWgUdhWE/3f81ba90-0e6d-417c-b45d-638e26613201.png","frameSize":{"x":81,"y":81},"frameCount":1,"looping":true,"frameDelay":4,"version":"Umm66UyZbGP5kfTJZc3ja_3CAPASwQb4","loadedFromSource":true,"saved":true,"sourceSize":{"x":81,"y":81},"rootRelativePath":"assets/v3/animations/vM27H9OMqx5XLdEXgdHDn6g4P9agHcWI6-3lWgUdhWE/3f81ba90-0e6d-417c-b45d-638e26613201.png"},"55a18ff7-a59c-480e-b42b-366f754a8732":{"name":"wood2.png_1","sourceUrl":"assets/v3/animations/vM27H9OMqx5XLdEXgdHDn6g4P9agHcWI6-3lWgUdhWE/55a18ff7-a59c-480e-b42b-366f754a8732.png","frameSize":{"x":202,"y":19},"frameCount":1,"looping":true,"frameDelay":4,"version":".BgWOFGcoyJl1_YK21pRoPH6etZKWPKB","loadedFromSource":true,"saved":true,"sourceSize":{"x":202,"y":19},"rootRelativePath":"assets/v3/animations/vM27H9OMqx5XLdEXgdHDn6g4P9agHcWI6-3lWgUdhWE/55a18ff7-a59c-480e-b42b-366f754a8732.png"},"7073c87d-baaa-4108-ba95-7732ee6fd880":{"name":"bg.jpeg_1","sourceUrl":"assets/v3/animations/vM27H9OMqx5XLdEXgdHDn6g4P9agHcWI6-3lWgUdhWE/7073c87d-baaa-4108-ba95-7732ee6fd880.png","frameSize":{"x":600,"y":600},"frameCount":1,"looping":true,"frameDelay":4,"version":"OzYLJmnXe_MYwSAqYtAiAabmi28_Mvpq","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/v3/animations/vM27H9OMqx5XLdEXgdHDn6g4P9agHcWI6-3lWgUdhWE/7073c87d-baaa-4108-ba95-7732ee6fd880.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bird = createSprite(55, 175, 20, 20);
bird.setAnimation("images.jpeg_1");
bird.scale = 0.2;

var platform = createSprite(0, 350, 200, 180);
platform.shapeColor = "red";

var ground = createSprite(200, 400, 400, 10);
ground.shapeColor = "brown";

var box1 = createSprite(260, 370, 50, 500);
box1.setAnimation("wood1.png_1");
box1.scale = 0.6;

var box2 = createSprite(360, 370, 50, 500);
box2.setAnimation("wood1.png_1");
box2.scale = 0.6;

var box3 = createSprite(260, 320, 50, 500);
box3.setAnimation("wood1.png_1");
box3.scale = 0.6;

var box4 = createSprite(360, 320, 50, 500);
box4.setAnimation("wood1.png_1");
box4.scale = 0.6;

var sling = createSprite(55, 225);
sling.setAnimation("sling.png_1");
sling.scale = 0.2;

var log1 = createSprite(306, 350, 100, 10);
log1.setAnimation("wood2.png_1");
log1.scale = 0.5;

var log2 = createSprite(306, 300, 100, 10);
log2.setAnimation("wood2.png_1");
log2.scale = 0.5;

var pig1 = createSprite(310, 330,10,10);
pig1.setAnimation("enemy.png_1");
pig1.scale = 0.3;

var pig2 = createSprite(310, 390,10,10);
pig2.setAnimation("enemy.png_1");
pig2.scale = 0.3;

var score=0;
 var gamestate=1;
 
function draw() {
  background("white")
  textSize(15);
  text("Score: " + score,300,40);
  textSize(20);
  
  if (gamestate === 1) {
    textSize(20);
    text("Hold Space To Use Mouse",150,200);
    bird.x = 55;
    bird.y = 170;
  }
  
  if (keyDown("space")) {
    bird.x = World.mouseX;
    bird.y = World.mouseY;
  }
  if (bird.isTouching(box1)) {
    box1.destroy();
  }
  
  if (bird.isTouching(box2)) {
    box2.destroy();
  }
  
  if (bird.isTouching(box3)) {
    box3.destroy();
  }
  
  if (bird.isTouching(box4)) {
    box4.destroy();
  }
  if (bird.isTouching(log1)) {
    log1.destroy();
  }
  if (bird.isTouching(log2)) {
    log2.destroy();
  }
  if ((bird.isTouching(pig1))) {
    score=score+100;
    pig1.destroy();
  }
  if ((bird.isTouching(pig2))) {
    score=score+100;
    pig2.destroy();
  }
  
  if (score===200) {
    textSize(20);
    text("You Win",200,80);
  }
  
  drawSprites();
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
