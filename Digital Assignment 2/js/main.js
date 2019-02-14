"use strict";

window.onload = function() {
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    var game = new Phaser.Game( 1002, 476, Phaser.AUTO, 'game', { preload: preload, create: create, update: update} );
    
    function preload() {
        game.load.image('background','assets/streets of rage 3 background.png',1002,476);

        //Loads assets for Ryu's character model.
        game.load.image('Ryu','assets/Ryu Assets/ryuButton.png',234,300);
        game.load.spritesheet('RyuRight','assets/Ryu Assets/ryuRightIdle.png',152,270);
        game.load.spritesheet('RyuRightLight','assets/Ryu Assets/ryuRightLight.png',166,300);
        game.load.spritesheet('RyuRightHeavy','assets/Ryu Assets/ryuRightHeavy.png',130,357);
        game.load.image('RyuRightBlock','assets/Ryu Assets/ryuRightBlock.png',147,270);
        game.load.spritesheet('RyuRightSuper','assets/Ryu Assets/ryuRightSuper.png',220,381);
        game.load.spritesheet('RyuLeft','assets/Ryu Assets/ryuLeftIdle.png',152,270);
        game.load.spritesheet('RyuLeftLight','assets/Ryu Assets/ryuLeftLight.png',166,300);
        game.load.spritesheet('RyuLeftHeavy','assets/Ryu Assets/ryuLeftHeavy.png',130,357);
        game.load.image('RyuLeftBlock','assets/Ryu Assets/ryuLeftBlock.png',147,270);
        game.load.spritesheet('RyuLeftSuper','assets/Ryu Assets/ryuLeftSuper.png',220,381);
        //Loads assets for Jotoro's character model.
        game.load.image('Jojo','assets/Jojo Assets/JojoButton.png',300,300);
        game.load.spritesheet('JojoRight','assets/Jojo Assets/JojoRight.png',200,375);
        game.load.spritesheet('JojoRightLight','assets/Jojo Assets/JojoRightLight.png',167,96);
        game.load.spritesheet('JojoRightHeavy','assets/Jojo Assets/JojoRightHeavy.png',363,219);
        game.load.image('JojoRightBlock','assets/Jojo Assets/JojoRightBlock.png',312,327);
        game.load.spritesheet('JojoLeft','assets/Jojo Assets/JojoLeft.png',200,375);
        game.load.spritesheet('JojoLeftLight','assets/Jojo Assets/JojoLeftLight.png',167,96);
        game.load.spritesheet('JojoLeftHeavy','assets/Jojo Assets/JojoLeftHeavy.png',363,219);
        game.load.image('JojoLeftBlock','assets/Jojo Assets/JojoLeftBlock.png',312,327);
        game.load.spritesheet('JojoSuper','assets/Jojo Assets/JojoSuper.png',650,380);
        //Loads assets for Scorpion's character model.
        game.load.image('Scorpion','assets/Scorpion Assets/ScorpionButton.png',257,300);
        game.load.spritesheet('ScorpionRight','assets/Scorpion Assets/ScorpionRight.png',178,318);
        game.load.spritesheet('ScorpionRightLight','assets/Scorpion Assets/ScorpionRightLight.png',219,321);
        game.load.spritesheet('ScorpionRightHeavy','assets/Scorpion Assets/ScorpionRightHeavy.png',239,310);
        game.load.image('ScorpionRightBlock','assets/Scorpion Assets/ScorpionBlockRight.png',150,318);
        game.load.spritesheet('ScorpionRightSuper','assets/Scorpion Assets/ScorpionRightSuper.png',171,369);
        game.load.spritesheet('ScorpionLeft','assets/Scorpion Assets/ScorpionLeft.png',178,318);
        game.load.spritesheet('ScorpionLeftLight','assets/Scorpion Assets/ScorpionLeftLight.png',219,321);
        game.load.spritesheet('ScorpionLeftHeavy','assets/Scorpion Assets/ScorpionLeftHeavy.png',239,310);
        game.load.image('ScorpionLeftBlock','assets/Scorpion Assets/ScorpionBlockLeft.png',150,318);
        game.load.spritesheet('ScorpionLeftSuper','assets/Scorpion Assets/ScorpionLeftSuper.png',171,369);
        //Loads assets for Goku's character model.
        game.load.image('Goku','assets/Goku Assets/GokuButton.png',353,300);
        game.load.spritesheet('GokuRight','assets/Goku Assets/GokuRight.png',311,275);
        game.load.spritesheet('GokuRightLight','assets/Goku Assets/GokuRightLight.png',233,360);
        game.load.spritesheet('GokuRightHeavy','assets/Goku Assets/GokuRightHeavy.png',265,515);
        game.load.image('GokuRightBlock','assets/Goku Assets/GokuRightBlock.png',185,325);
        game.load.spritesheet('GokuRightSuper','assets/Goku Assets/GokuRightSuper.png',323,380);
        game.load.spritesheet('GokuLeft','assets/Goku Assets/GokuLeft.png',311,275);
        game.load.spritesheet('GokuLeftLight','assets/Goku Assets/GokuLeftLight.png',233,360);
        game.load.spritesheet('GokuLeftHeavy','assets/Goku Assets/GokuLeftHeavy.png',265,515);
        game.load.image('GokuLeftBlock','assets/Goku Assets/GokuLeftBlock.png',185,325);
        game.load.spritesheet('GokuLeftSuper','assets/Goku Assets/GokuLeftSuper.png',323,380);
        //Loads pictures that will be used as buttons for menus.
        game.load.image('start','assets/Buttons/Start.png',250,96)
        game.load.image('light Attack','assets/Buttons/Light Attack.png',200,100);
        game.load.image('heavy Attack','assets/Buttons/Heavy Attack.png',200,100);
        game.load.image('block','assets/Buttons/Block.png',200,57);
        game.load.image('super Attack','assets/Buttons/Super Attack.png',200,44);
        game.load.image('continue','assets/Buttons/Continue.png',164,50);
        //Loads background music and sound effects for buttons and character.
        game.load.audio('select','assets/button select.mp3');
        game.load.audio('persona','assets/3-22. Rivers in the Desert.mp3');
        game.load.audio('punch','assets/PUNCH.mp3');
        game.load.audio('shoryuken','assets/Ryu Assets/shoryuken.mp3');
        game.load.audio('tatsumaki-senpu-kyaku','assets/Ryu Assets/tatsumaki-senpu-kyaku.mp3');
        game.load.audio('ora','assets/Jojo Assets/oraoraoraoraora-sound-effect.mp3');
        game.load.audio('get over here','assets/Scorpion Assets/scorpion-get_over_here.mp3');
        game.load.audio('kamehameha','assets/Goku Assets/kamehameha.swf.mp3');
        //Loads unclickable pictures.
        game.load.image('title','assets/Buttons/Title.png',890,275);
        game.load.image('meter','assets/Buttons/meter Background.png', 280,142);
    }
    //Variables for background image, title, life meters, select sound effect and background music.
    var background,title,meter1,meter2,itemSelect,backgroundMusic;
    //Variables for player 1 and player 2, and their actions.
    var pR,pRL,pRH,pRB,pRS,pL,pLL,pLH,pLB,pLS,soundL1,soundH1,soundS1,soundL2,soundH2,soundS2;
    //Variables for the different characters and their actions.
    var ryuR,ryuRL,ryuRH,ryuRB,ryuRS,ryuL,ryuLL,ryuLH,ryuLB,ryuLS,ryuSoundL,ryuSoundH,ryuSoundS;
    var jojoR,jojoRL,jojoRH,jojoRB,jojoRS,jojoL,jojoLL,jojoLH,jojoLB,jojoLS,jojoSoundL,jojoSoundH,jojoSoundS;
    var scoR,scoRL,scoRH,scoRB,scoRS,scoL,scoLL,scoLH,scoLB,scoLS,scoSoundL,scoSoundH,scoSoundS;
    var gokuR,gokuRL,gokuRH,gokuRB,gokuRS,gokuL,gokuLL,gokuLH,gokuLB,gokuLS,gokuSoundL,gokuSoundH,gokuSoundS;
    //Character select variables.
    var ryuButton,jojoButton,scorpionButton,gokuButton;
    //Variable used to only select one character.
    var characterPicked;
    //Used for actions specific for Jotoro.
    var isJojoR = false;
    var isJojoL = false;
    //Used for actions specific for Goku.
    var isGokuR = false;
    var isGokuL = false;
    //Used for character's block move.
    var isBlockR = false;
    var isBlockL = false;
    //Used to switch between players.
    var isContinue = true;
    //Used for characters' supers.
    var isSuperR = false;
    var isSuperL = false;
    //Used for menu buttons.
    var buttonL,buttonH,buttonB,buttonS,buttonC3,buttonC4,buttonC1,buttonC2,buttonStart;
    //Used to determine the player's turn.
    var player1,player2;
    //Used for the meters for each player.
    var player1LifeMeter = 200;
    var player2LifeMeter = 200;
    var player1SuperMeter = 0;
    var player2SuperMeter = 0;
    //Variables for the different text on screen.
    var player1LifeText;
    var player1SuperText;
    var player2LifeText;
    var player2SuperText;
    var player1SelectText;
    var player2SelectText;
    var player1TurnText;
    var player2TurnText;
    var winText;

    function create() {
        //Player 1 goes first.
        player1 = true;
        player2 = false;
        //Select any character.
        characterPicked = false;
        //Creates select sound effect.
        itemSelect = game.add.audio('select');
        //Creates and loops background music.
        backgroundMusic = game.add.audio('persona');
        backgroundMusic.play(null,null,1,true,true);
        //Creates Streets of Rage 3 background image.
        background = game.add.sprite(0,0,'background');
        //Creates image to see the meters more clearly.
        meter1 = game.add.sprite(0,-50,'meter');
        meter2 = game.add.sprite(722,-50,'meter');
        meter1.visible = false;
        meter2.visible = false;
        //Creates title image.
        title = game.add.sprite(56,0,'title');
        //Creates button to start the game.
        buttonStart = game.add.button(game.world.centerX-125,300,'start',menu,this);
        //Creates the life meter for player 1.
        player1LifeText = game.add.text(16,16,"Player 1: " + player1LifeMeter,{
            align: "center",
            fill: "#ffffff"
        });
        player1LifeText.addColor('red',0);
        //Creates the life meter for player 2.
        player2LifeText = game.add.text(827,16,"Player 2: " + player2LifeMeter,{
            align: "center",
            fill: "#ffffff"
        });
        player2LifeText.addColor('blue',0);
        //Creates the super meter for player 1.
        player1SuperText = game.add.text(16,40,"Super: " + player1SuperMeter,{
            align: "center",
            fill: "#ffffff"
        });
        player1SuperText.addColor('red',0);
        //Creates the super meter for player 2.
        player2SuperText = game.add.text(827,40,"Super: " + player2SuperMeter,{
            align: "center",
            fill: "#ffffff"
        });
        player2SuperText.addColor('blue',0);
        //Meters are invisible until start button is pressed.
        player1LifeText.visible = false;
        player2LifeText.visible = false;
        player1SuperText.visible = false;
        player2SuperText.visible = false;
            //Creates light attack, heavy attack, block attack, super attack, animations, and sound effects for Ryu left and right.
            ryuR = game.add.sprite(0,476-300,'RyuRight');
            ryuRL = game.add.sprite(0,476-330,'RyuRightLight');
            ryuRH = game.add.sprite(0,476-387,'RyuRightHeavy');
            ryuRB = game.add.sprite(0,476-300,'RyuRightBlock');
            ryuRS = game.add.sprite(0,476-411,'RyuRightSuper');
            ryuR.visible = false;
            ryuRL.visible = false;
            ryuRH.visible = false;
            ryuRB.visible = false;
            ryuRS.visible = false;
            ryuR.animations.add('right',[0,1,2,3],4,true);
            ryuRL.animations.add('right',[0,1,2,0,1,2,0,1,2],9,false);
            ryuRH.animations.add('right',[0,1,2,3,4,5,6],7,false);
            ryuRS.animations.add('right',[0,2,3,4,5,6,7,8],9,false);
            ryuL = game.add.sprite(1002-152,476-300,'RyuLeft');
            ryuLL = game.add.sprite(1002-166,476-330,'RyuLeftLight');
            ryuLH = game.add.sprite(1002-130,476-387,'RyuLeftHeavy');
            ryuLB = game.add.sprite(1002-147,476-300,'RyuLeftBlock');
            ryuLS = game.add.sprite(1002-220,476-411,'RyuLeftSuper');
            ryuL.visible = false;
            ryuLL.visible = false;
            ryuLH.visible = false;
            ryuLB.visible = false;
            ryuLS.visible = false;
            ryuL.animations.add('left',[3,2,1,0],4,true);
            ryuLL.animations.add('left',[2,1,0,2,1,0,2,1,0],9,false);
            ryuLH.animations.add('left',[6,5,4,3,2,1,0],7,false);
            ryuLS.animations.add('left',[8,7,6,5,4,3,2,1,0],9,false);        
            ryuSoundL = game.add.audio('punch');
            ryuSoundH = game.add.audio('shoryuken');
            ryuSoundS = game.add.audio('tatsumaki-senpu-kyaku');
            //Creates light attack, heavy attack, block attack, super attack, animations, and sound effects for Jotoro left and right.
            jojoR = game.add.sprite(0,101,'JojoRight');
            jojoRL = game.add.sprite(242,171,'JojoRightLight');
            jojoRH = game.add.sprite(242,101,'JojoRightHeavy');
            jojoRB = game.add.sprite(0,101,'JojoRightBlock');
            jojoRS = game.add.sprite(game.world.centerX-325,game.world.centerY-190,'JojoSuper');
            jojoR.visible = false;
            jojoRL.visible = false;
            jojoRH.visible = false;
            jojoRB.visible = false;
            jojoRS.visible = false;
            jojoR.animations.add('right',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],8,true);
            jojoRL.animations.add('right',[0,1,2,0,1,2,0,1,2],9,false);
            jojoRH.animations.add('right',[0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2],9,false);
            jojoRS.animations.add('right',[0,1,2,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5],9,false);        
            jojoL = game.add.sprite(760,101,'JojoLeft');
            jojoLL = game.add.sprite(496,171,'JojoLeftLight');
            jojoLH = game.add.sprite(397,101,'JojoLeftHeavy');
            jojoLB = game.add.sprite(760,101,'JojoLeftBlock');
            jojoLS = game.add.sprite(game.world.centerX-325,game.world.centerY-190,'JojoSuper');
            jojoL.visible = false;
            jojoLL.visible = false;
            jojoLH.visible = false;
            jojoLB.visible = false;
            jojoLS.visible = false;
            jojoL.animations.add('left',[15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0],8,true);
            jojoLL.animations.add('left',[2,1,0,2,1,0,2,1,0],9,false);
            jojoLH.animations.add('left',[2,1,0,2,1,0,2,1,0,2,1,0,2,1,0,2,1,0,2,1,0,2,1,0,2,1,0,2,1,0,2,1,0],9,false);
            jojoLS.animations.add('left',[0,1,2,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5],9,false);        
            jojoSoundL = game.add.audio('punch');
            jojoSoundH = game.add.audio('ora');
            jojoSoundS = game.add.audio('ora');
            //Creates light attack, heavy attack, block attack, super attack, animations, and sound effects for Scorpion left and right.
            scoR = game.add.sprite(0,158,'ScorpionRight');
            scoRL = game.add.sprite(0,158,'ScorpionRightLight');
            scoRH = game.add.sprite(0,158,'ScorpionRightHeavy');
            scoRB = game.add.sprite(0,158,'ScorpionRightBlock');
            scoRS = game.add.sprite(0,93,'ScorpionRightSuper');
            scoR.visible = false;
            scoRL.visible = false;
            scoRH.visible = false;
            scoRB.visible = false;
            scoRS.visible = false;
            scoR.animations.add('right',[0,1,2,3,4,5,6],14,true);
            scoRL.animations.add('right',[0,1,2,0,1,2,0,1,2],9,false);
            scoRH.animations.add('right',[0,1,2,3,4],5,false);
            scoRS.animations.add('right',[0,1,2,3,4,5,6,7],8,false);        
            scoL = game.add.sprite(823,158,'ScorpionLeft');
            scoLL = game.add.sprite(823,158,'ScorpionLeftLight');
            scoLH = game.add.sprite(823,158,'ScorpionLeftHeavy');
            scoLB = game.add.sprite(823,158,'ScorpionLeftBlock');
            scoLS = game.add.sprite(823,93,'ScorpionLeftSuper');
            scoL.visible = false;
            scoLL.visible = false;
            scoLH.visible = false;
            scoLB.visible = false;
            scoLS.visible = false;
            scoL.animations.add('left',[6,5,4,3,2,1,0],14,true);
            scoLL.animations.add('left',[2,1,0,2,1,0,2,1,0],9,false);
            scoLH.animations.add('left',[4,3,2,1,0],5,false);
            scoLS.animations.add('left',[7,6,5,4,3,2,1,0],8,false);        
            scoSoundL = game.add.audio('punch');
            scoSoundH = game.add.audio('get over here');
            scoSoundS = game.add.audio('punch');
            //Creates light attack, heavy attack, block attack, super attack, animations, and sound effects for Goku left and right.
            gokuR = game.add.sprite(0,161,'GokuRight');
            gokuRL = game.add.sprite(0,161,'GokuRightLight');
            gokuRH = game.add.sprite(0,-9,'GokuRightHeavy');
            gokuRB = game.add.sprite(0,161,'GokuRightBlock');
            gokuRS = game.add.sprite(0,131,'GokuRightSuper');
            gokuR.visible = false;
            gokuRL.visible = false;
            gokuRH.visible = false;
            gokuRB.visible = false;
            gokuRS.visible = false;
            gokuR.animations.add('right',[0,1,2,3],4,true);
            gokuRL.animations.add('right',[0,0,1,0,0,1,0,0,1],3,false);
            gokuRH.animations.add('right',[0,1,2,3,4,5],6,false);
            gokuRS.animations.add('right',[0,1,2,3,4,5,6,7,8],10,false);
            gokuL = game.add.sprite(691,161,'GokuLeft');
            gokuLL = game.add.sprite(691,161,'GokuLeftLight');
            gokuLH = game.add.sprite(736,-9,'GokuLeftHeavy');
            gokuLB = game.add.sprite(691,161,'GokuLeftBlock');
            gokuLS = game.add.sprite(691,131,'GokuLeftSuper');
            gokuL.visible = false;
            gokuLL.visible = false;
            gokuLH.visible = false;
            gokuLB.visible = false;
            gokuLS.visible = false;
            gokuL.animations.add('left',[0,1,2,3],4,true);
            gokuLL.animations.add('left',[1,0,0,1,0,0,1,0,0],3,false);
            gokuLH.animations.add('left',[5,4,3,2,1,0],6,false);
            gokuLS.animations.add('left',[8,7,6,5,4,3,2,1,0],10,false);    
            gokuSoundL = game.add.audio('punch');
            gokuSoundH = game.add.audio('punch');
            gokuSoundS = game.add.audio('kamehameha');
    }
    //Creates the character select menu for the game.
    function menu() {
        //Plays when menu is created.
        itemSelect.play(null,null,1,false,true);
        //Starting screen disapears.
        title.visible = false;
        buttonStart.visible = false;
        //Player meters appear.
        meter1.visible = true;
        meter2.visible = true;
        player1LifeText.visible = true;
        player2LifeText.visible = true;
        player1SuperText.visible = true;
        player2SuperText.visible = true;
        //Creates character select buttons for the menu.
        ryuButton = game.add.button(368,0,'Ryu',ryuCreate,this);
        jojoButton = game.add.button(518,0,'Jojo',jojoCreate,this);
        scorpionButton = game.add.button(368,150,'Scorpion',scorpionCreate,this);
        gokuButton = game.add.button(497,150,'Goku',gokuCreate,this);
        //Creates button that when pressed, switch to the character selection for player.
        buttonC1 = game.add.button(game.world.centerX-82,376,'continue',player1Select,this);
        //Creates text for player 1.
        player1SelectText = game.add.text(game.world.centerX-82,300,"Player 1 Select");
        player1SelectText.addColor('red',0);
        //Creates button that when pressed, begins the actual game.
        buttonC2 = game.add.button(game.world.centerX-82,376,'continue',player2Select,this);
        buttonC2.visible = false;
        //Creates text for player 2.
        player2SelectText = game.add.text(game.world.centerX-82,300,"Player 2 Select");
        player2SelectText.addColor('blue',0);
        player2SelectText.visible = false;
    }
    //Initializes the player variables for Ryu.
    function ryuCreate() {
        itemSelect.play(null,null,1,false,true);
        //If true, Ryu can no longer be picked.
        if (characterPicked == false)
        {
        //Initializes the player 1 variables for Ryu.
        if (player1 == true && player2 == false)
        {
            pR = ryuR;
            pRL = ryuRL;
            pRH = ryuRH;
            pRB = ryuRB;
            pRS = ryuRS;
            pR.visible = true;
            pR.animations.play('right');
            pRL.visible = false;
            pRH.visible = false;
            pRB.visible = false;
            pRS.visible = false;
            soundL1 = ryuSoundL;
            soundH1 = ryuSoundH;
            soundS1 = ryuSoundS;
        }
        //Initializes the player 2 variables for Ryu.
        if (player1 == false && player2 == true)
        {
            pL = ryuL;
            pLL = ryuLL;
            pLH = ryuLH;
            pLB = ryuLB;
            pLS = ryuLS;
            pL.visible = true;
            pL.animations.play('left');
            pLL.visible = false;
            pLH.visible = false;
            pLB.visible = false;
            pLS.visible = false;
            soundL2 = ryuSoundL;
            soundH2 = ryuSoundH;
            soundS2 = ryuSoundS;
        }
        characterPicked = true;
        }
    }
    //Initializes the player variables for Jotoro.
    function jojoCreate() {
        itemSelect.play(null,null,1,false,true);
        //If true, Jotoro can no longer be picked.
        if (characterPicked == false)
        {
        //Initializes player 1 variables for Jotoro.
        if (player1 == true && player2 == false)
        {
            pR = jojoR;
            pRL = jojoRL;
            pRH = jojoRH;
            pRB = jojoRB;
            pRS = jojoRS;
            pR.visible = true;
            pR.animations.play('right');
            pRL.visible = false;
            pRH.visible = false;
            pRB.visible = false;
            pRS.visible = false;
            soundL1 = jojoSoundL;
            soundH1 = jojoSoundH;
            soundS1 = jojoSoundS;
            isJojoR = true;
        }
        //Initializes player 2 variables for Jotoro.
        if (player1 == false && player2 == true)
        {
            pL = jojoL;
            pLL = jojoLL;
            pLH = jojoLH;
            pLB = jojoLB;
            pLS = jojoLS;
            pL.visible = true;
            pL.animations.play('left');
            pLL.visible = false;
            pLH.visible = false;
            pLB.visible = false;
            pLS.visible = false;
            soundL2 = jojoSoundL;
            soundH2 = jojoSoundH;
            soundS2 = jojoSoundS;
            isJojoL = true;
        }
        characterPicked = true;
        }
    }
    //Initializes player variables for Scorpion.
    function scorpionCreate() {
        itemSelect.play(null,null,1,false,true);
        //If true, Scorpion can no longer be picked.
        if (characterPicked == false)
        {
        //Intializes player 1 variables for Scorpion.
        if (player1 == true && player2 == false)
        {
            pR = scoR;
            pRL = scoRL;
            pRH = scoRH;
            pRB = scoRB;
            pRS = scoRS;
            pR.visible = true;
            pR.animations.play('right');
            pRL.visible = false;
            pRH.visible = false;
            pRB.visible = false;
            pRS.visible = false;
            soundL1 = scoSoundL;
            soundH1 = scoSoundH;
            soundS1 = scoSoundS;
        }
        //Initializes player 2 variables for Scorpion.
        if (player1 == false && player2 == true)
        {
            pL = scoL;
            pLL = scoLL;
            pLH = scoLH;
            pLB = scoLB;
            pLS = scoLS;
            pL.visible = true;
            pL.animations.play('left');
            pLL.visible = false;
            pLH.visible = false;
            pLB.visible = false;
            pLS.visible = false;
            soundL2 = scoSoundL;
            soundH2 = scoSoundH;
            soundS2 = scoSoundS;
        }
        characterPicked = true;
        }
    }
    //Initializes player variables for Goku.
    function gokuCreate() {
        itemSelect.play(null,null,1,false,true);
        //If true, Goku can no longer be picked.
        if (characterPicked = true)
        {
        //Initializes player 1 variables for Goku.
        if (player1 == true && player2 == false)
        {
            pR = gokuR;
            pRL = gokuRL;
            pRH = gokuRH;
            pRB = gokuRB;
            pRS = gokuRS;
            pR.visible = true;
            pR.animations.play('right');
            pRL.visible = false;
            pRH.visible = false;
            pRB.visible = false;
            pRS.visible = false;
            soundL1 = gokuSoundL;
            soundH1 = gokuSoundH;
            soundS1 = gokuSoundS;
            isGokuR = true;
        }
        //Initializes player 2 variables for Goku.
        if (player1 == false && player2 == true)
        {
            pL = gokuL;
            pLL = gokuLL;
            pLH = gokuLH;
            pLB = gokuLB;
            pLS = gokuLS;
            pL.visible = true;
            pL.animations.play('left');
            pLL.visible = false;
            pLH.visible = false;
            pLB.visible = false;
            pLS.visible = false;
            soundL2 = gokuSoundL;
            soundH2 = gokuSoundH;
            soundS2 = gokuSoundS;
            isGokuL = true;
        }
        characterPicked = true;
        }
    }
    //Player 1 has selected his/her character.
    function player1Select() {
        itemSelect.play(null,null,1,false,true);
        //Switches to player 2.
        buttonC1.visible =! buttonC1.visible;
        buttonC2.visible =! buttonC2.visible;
        player1SelectText.visible =! player1SelectText.visible;
        player2SelectText.visible =! player2SelectText.visible;
        player1 = false;
        player2 = true;
        characterPicked = false;
    }
    //Player 2 has selected his/her character.
    function player2Select() {
        itemSelect.play(null,null,1,false,true);
        //Character select menu disappear.
        buttonC2.visible =! buttonC2.visible;
        player2SelectText.visible =! player2SelectText.visible;
        ryuButton.visible = false;
        jojoButton.visible = false;
        scorpionButton.visible = false;
        gokuButton.visible = false;
        //Player 1's turn.
        player1 = true;
        player2 = false;
        //Player action buttons for light attack, heavy attack, block, and super attack are created.
        buttonL = game.add.button(301,0,'light Attack',lightAttack,this);
        buttonH = game.add.button(501,0,'heavy Attack',heavyAttack,this);
        buttonB = game.add.button(301,100,'block',blockAttack,this);
        buttonS = game.add.button(501,100,'super Attack',superAttack,this);
        buttonS.visible = false;
        //Text is created to signify the player's turn.
        player1TurnText = game.add.text(game.world.centerX-82,300,"Player 1's Turn");
        player1TurnText.addColor('red',0);
        player2TurnText = game.add.text(game.world.centerX-82,300,"Player 2's Turn");
        player2TurnText.addColor('blue',0);
        player2TurnText.visible =! player2TurnText.visible;
        //Button is created to switch between players.
        buttonC = game.add.button(game.world.centerX-82,376,'continue',continueAttack,this);

    }
    //Player deals 20 damage to other player.
    function lightAttack() {
        //If false, the player cannot do another action.
        if (isContinue == true)
        {
        //Player 1's action.
        if (player1 == true && player2 == false)
        {
            //If player 2 is not blocking, that player is receives 20 damage and 20+ increase in super meter.
            if (isBlockL == false)
            {
                player2LifeMeter = player2LifeMeter - 20;
                player2SuperMeter = player2SuperMeter + 20;
                //Meter texts change.
                player2LifeText.setText("Player 2: " + player2LifeMeter);
                player2SuperText.setText("Super: " + player2SuperMeter);
            }
            //If the 2 player is blocking, player 1 receives 20+ increase in super meter.
            else
            {
                player1SuperMeter = player1SuperMeter + 20;
                //Meter text change.
                player1SuperText.setText("Super: " + player1SuperMeter);
            }
            //Idle animation stops.
            pR.animations.stop(null,true);
            //Jotoro's idle sprite remains visible.
            if (isJojoR == true)
                pR.visible = true;
            else
                pR.visible = false;
            pRL.visible =! pRL.visible;
            //Goku's sound effect.
            if (isGokuR == true)
                makeSound();
            //Light attack animation and sound plays.
            else
                game.time.events.repeat(Phaser.Timer.SECOND * 0.32,3,makeSound,this);
            pRL.animations.play('right');
            pR.animations.play('right');
            isBlockL = false;
        }
        //Player 2's action.
        if (player1 == false && player2 == true)
        {
            //If player 1 is not blocking, that player is receives 20 damage and 20+ increase in super meter.
            if (isBlockR == false)
            {
                player1LifeMeter = player1LifeMeter - 20;
                player1SuperMeter = player1SuperMeter + 20;
                //Meter texts change.
                player1LifeText.setText("Player 1: " + player1LifeMeter);
                player1SuperText.setText("Super: " + player1SuperMeter);
            }
            //If the 1 player is blocking, player 2 receives 20+ increase in super meter.
            else
            {
                player2SuperMeter = player2SuperMeter + 20;
                //Meter text change.
                player2SuperText.setText("Super: " + player2SuperMeter);
            }
            //Idle animation stops.
            pL.animations.stop(null,true);
            //Jotoro's idle sprite remains visible.
            if (isJojoL == true)
                pL.visible = true;
            else
                pL.visible = false;
            pLL.visible =! pLL.visible;
            //Goku's sound effect.
            if (isGokuL == true)
                makeSound();
            //Attack animation and sound plays.
            else
                game.time.events.repeat(Phaser.Timer.SECOND * 0.32,3,makeSound,this);
            pLL.animations.play('left');
            pL.animations.play('left');
            isBlockR = false;
        }
        player1 =! player1;
        player2 =! player2;
        isContinue = false;
        }
    }
    //Player deals 40 damage to other player.
    function heavyAttack() {
        //If false, the player can't do another action.
        if (isContinue == true)
        {
        //Player 1.
        if (player1 == true && player2 == false)
        {   //Player 2 not blocking, 40 damage and 40+ super increase.
            if (isBlockL == false)
            {
                player2LifeMeter = player2LifeMeter - 40;
                player2SuperMeter = player2SuperMeter + 40;
                //Meter texts change.
                player2LifeText.setText("Player 2: " + player2LifeMeter);
                player2SuperText.setText("Super: " + player2SuperMeter);
            }
            //Player 2 blocking, player 1 40+ super increase.
            else
            {
                player1SuperMeter = player1SuperMeter + 40;
                //Meter text change.
                player1SuperText.setText("Super: " + player1SuperMeter);
            }
            //Idle animation stops.
            pR.animations.stop(null,true);
            //Jojo idle sprite remains.
            if (isJojoR == true)
                pR.visible = true;
            else
                pR.visible =! pR.visible;
            pRH.visible =! pRH.visible;
            //Plays sound and heavy animation.
            makeSound();
            pRH.animations.play('right');
            pR.animations.play('right');
            isBlockL = false;
        }
        //Player 2.
        if (player1 == false && player2 == true)
        {
            //Player 2 not blocking, 40 damage and 40+ super increase.
            if (isBlockR == false)
            {
                player1LifeMeter = player1LifeMeter - 40;
                player1SuperMeter = player1SuperMeter + 40;
                //Meter texts change.
                player1LifeText.setText("Player 1: " + player1LifeMeter);
                player1SuperText.setText("Super: " + player1SuperMeter);
            }
            //Player 2 blocking, player 1 40+ super increase.
            else
            {
                player2SuperMeter = player2SuperMeter + 40;
                //Meter text change.
                player2SuperText.setText("Super: " + player2SuperMeter);
            }
            //Idle animation stops.
            pL.animations.stop(null,true);
            //Jojo idle sprite remains.
            if (isJojoL == true)
                pL.visible = true;
            else
                pL.visible =! pL.visible;
            pLH.visible =! pLH.visible;
            //Plays sound and heavy animation.
            makeSound();
            pLH.animations.play('left');
            pL.animations.play('left');
            isBlockR = false;
        }
        player1 =! player1;
        player2 =! player2;
        isContinue == false;
        }
    }
    //Player block action for upcoming attack.
    function blockAttack() {
        itemSelect.play(null,null,1,false,true);
        //If false, player can't do another action.
        if (isContinue == true)
        {
        //Player 1 block action.
        if (player1 == true && player2 == false)
        {
            isBlockR = true;
            pR.visible =! pR.visible;
            pRB.visible =! pRB.visible;
        }
        //Player 2 block action.
        if (player1 == false && player2 == true)
        {
            isBlockL = true;
            pL.visible =! pL.visible;
            pLB.visible =! pLB.visible;
        }
        player1 =! player1;
        player2 =! player2;
        isContinue == false;
        }
    }
    //Player deals 80 damage to other player.
    function superAttack() {
        //If false, player can't do another action.
        if (isContinue == true)
        {
        //Player 1.
        if (player1 == true && player2 == false)
        {
            //Player 2 80 damage and 80+ increase in super meter.
            player2LifeMeter = player2LifeMeter - 80;
            player2SuperMeter = player2SuperMeter + 80;
            //Meter texts change.
            player2LifeText.setText("Player 2: " + player2LifeMeter);
            player2SuperText.setText("Super: " + player2SuperMeter);
            isBlockL = false;
            //Idle animation stops.
            pR.animations.stop(null,true);
            //Switches to super action.
            pR.visible =! pR.visible;
            pRS.visible =! pRS.visible;
            //Plays sound and super action.
            makeSound();
            pRS.animations.play('right');
            pR.animations.play('right');
            //Meter and text change.
            player1SuperMeter = 0;
            player1SuperText.setText("Player 1: " + player1SuperMeter);
            isSuperR = false;

        }
        //Player 2
        if (player1 == false && player2 == true)
        {
            //Player 1 80 damage and 80+ increase in super meter.
            player1LifeMeter = player1LifeMeter - 80;
            player1SuperMeter = player1SuperMeter + 80;
            //Meter texts change.
            player1LifeText.setText("Player 1: " + player1LifeMeter);
            player1SuperText.setText("Super: " + player1SuperMeter);
            isBlockR = false;
            //Idle animation stops.
            pL.animations.stop(null,true);
            //Switches to super action.
            pL.visible =! pL.visible;
            pLS.visible =! pLS.visible;
            //Plays sound and super action.
            makeSound();
            pLS.animations.play('left');
            pL.animations.play('left');
            //Meter and text change.
            player2SuperMeter = 0;
            player2SuperText.setText("Player 2: " + player2SuperMeter);
            isSuperL = false;
        }
        //Button action disappears.
        buttonS.visible = false;
        player1 =! player1;
        player2 =! player2;
        //Blocks disappear.
        isBlockR = false;
        isBlockL = false;
        }
    }
    //Action switches between players.
    function continueAttack() {
        itemSelect.play(null,null,1,false,true);
        //Player 1 idle animation appears.
        if (player1 == false && player2 == true)
        {
            pR.visible = true;
            pRL.visible = false;
            pRH.visible = false;
            pRB.visible = false;
            pRS.visible = false;
        }
        //Player 2 idle animation appears.
        if (player1 == true && player2 == false)
        {
            pL.visible = true;
            pLL.visible = false;
            pLH.visible = false;
            pLB.visible = false;
            pLS.visible = false;
        }
        //Signifies player's turn.
        player1TurnText.visible =! player1TurnText.visible;
        player2TurnText.visible =! player2TurnText.visible;
        //Other player can do 1 action.
        isContinue = true;
    }
    //Makes the different sound effects.
    function makeSound() {
        //Light attack sound for player 1.
        if (pRL.visible == true){
            soundL1.play(null,null,1,false,true);
        }
        //Heavy attack sound for player 1.
        if (pRH.visible == true){
            soundH1.play(null,null,1,false,true);
        }
        //Super attack sound for player 1.
        if (pRS.visible == true){
            soundS1.play(null,null,1,false,true);
        }
        //Light attack sound for player 2.
        if (pLL.visible == true){
            soundL2.play(null,null,1,false,true);
        }
        //Heavy attack sound for player 2.
        if (pLH.visible == true){
            soundH2.play(null,null,1,false,true);
        }
        //Super attack sound for player 2.
        if (pLS.visible == true){
            soundS2.play(null,null,1,false,true);
        }
    }
    //Updates the life and super meters.
    function update() {
        //If player 1's super meter is greater than or equal to 100, the super attack button appears.
        if (player1SuperMeter >= 100)
        {
            //If it is player 1's turn, the super attack button will appear.
            if (player1 == true && player2 == false)
            {
                buttonS.visible = true;
            }
            //If it is player 2's turn, the super attack button will disappear.
            if (player1 == false && player2 == true)
            {
                buttonS.visible = false;
            }
            isSuperR = true;
        }
        //If player 2's super meter is greater than or equal to 100, the super attack button appears.
        if (player2SuperMeter >= 100)
        {
            //If it is player 1's turn, the super attack button will disappear.
            if (player1 == true && player2 == false)
            {
                buttonS.visible = false;
            }
            //If it is player 2's turn, the super attack button will appear.
            if (player1 == false && player2 == true)
            {
                buttonS.visible = true;
            }
            isSuperL = true;
        }
        if (player1LifeMeter < 0 || player2LifeMeter < 0)
        {
            //If player 1 loses his/her life points, text will appear to signify his/her win.
            if (player1LifeMeter < 0)
            {
                winText = game.add.text(50,game.world.centerY,"Player 2 Wins",{
                    align: "center",
                    font: "130px Ariel"
                });
                winText.addColor('blue',0);
            }
            //If player 2 loses his/her life points, text will appear to signify his/her win.
            if (player2LifeMeter < 0)
            {
                winText = game.add.text(50,game.world.centerY,"Player 1 Wins",{
                    align: "center",
                    font: "130px Ariel"
                });
                winText.addColor('red',0);
            }
            game.world.bringToTop(winText);
        }
    }
};