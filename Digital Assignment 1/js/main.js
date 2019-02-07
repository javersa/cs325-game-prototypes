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
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        game.load.image('sky', 'assets/sky.png');//Borrowed from phaser_tutorial_02/part9.html
        game.load.image('ground', 'assets/platform.png');//Borrowed from phaser_tutorial_02/part9.html
        game.load.image('number0','assets/Number_Blocks_01_Set_1_64x64_0.png',64,64);
        game.load.image('number1','assets/Number_Blocks_01_Set_1_64x64_1.png',64,64);
        game.load.spritesheet('ninja run right', 'assets/runRight.png',79,124);
        game.load.spritesheet('ninja run left', 'assets/runLeft.png',79,124);
    }
    
    //Variables needed to create your playable character.
    var player;
    var playerRight;
    var playerLeft;

    //Variables needed to create a platform.
    var platforms;

    //Variables for numbers.
    var numbers;
    var num0;
    var num1;

    //Variable needed to create controls.
    var cursors;

    //Variables needed for text on screen.
    var startText;
    var subTitleText;
    var subTitleText2;
    var winText;
    var loseText;
    var reloadText

    //Generates a random number between 0 and 1.
    var randomNumber = Math.floor(Math.random() * 2);

    function create() {
        //Enables physics for all objects.
        game.physics.startSystem(Phaser.Physics.ARCADE);//Borrowed from phaser_tutorial_02/part9.html

        //Adds a simple background.
        game.add.sprite(0,0,'sky').scale.setTo(3,3);//Borrowed from phaser_tutorial_02/part9.html
        //Creates a group that will be the game's platform and ground.

        platforms = game.add.group();//Borrowed from phaser_tutorial_02/part9.html
        //Enables physics for objects on platforms.
        platforms.enableBody = true;//Borrowed from phaser_tutorial_02/part9.html
        //Adds individual block into the platforms group.
        var ground = platforms.create(0,game.world.height - 64, 'ground');//Borrowed from phaser_tutorial_02/part9.html
        //Scaled to fit the width of the game.
        ground.scale.setTo(2, 2);//Borrowed from phaser_tutorial_02/part9.html
        //Platform will not move.
        ground.body.immovable = true;//Borrowed from phaser_tutorial_02/part9.html

        //Creates a character.
        player = game.add.group();
        //Creates a sprite that will have the character face the right.
        playerRight = player.create(game.world.centerX-40,412,'ninja run right');
        //Creates a sprite that will have the character face the left.
        playerLeft = player.create(game.world.centerX-40,412,'ninja run left');
        //Enables arcade physics for character left to right.
        game.physics.arcade.enable(player);
        //Player will begin face right.
        playerLeft.visible = false;
        //The character left to right will have contact with the platform.
        playerRight.body.collideWorldBounds = true;
        playerLeft.body.collideWorldBounds = true;
        //The character will have a gravitational pull and bounce.
        playerRight.body.gravity.y = 300;
        playerLeft.body.gravity.y = 300;
        playerRight.body.bounce.y = 0.2;
        playerLeft.body.bounce.y = 0.2;
        //Creates an animation where the character moves to the right.
        playerRight.animations.add('right', [0,1,2,3,4,5], 30, true);
        //Creates an animation where the character moves to the left.
        playerLeft.animations.add('left', [5,4,3,2,1,0], 30, true);

        //Creates a group of 1 and 0 images.
        numbers = game.add.group();
        //1's and 0's will have physics.
        numbers.enableBody = true;
        //Adds 0 image to group with bounce and gravity.
        num0 = numbers.create(100,200,'number0');
        num0.body.gravity.y = 300;
        num0.body.bounce.y = 0.2;
        //Adds 1 image to group with bounce and gravity.
        num1 = numbers.create(599,200,'number1');
        num1.body.gravity.y = 300;
        num1.body.bounce.y = 0.2;

        //Creates the controls for left and right movements.
        cursors = game.input.keyboard.createCursorKeys();//Borrowed from phaser_tutorial_02/part9.html

        //Creates text the will represent the title screen.
        startText = game.add.text(50, 200, 'NINJA GUESS', { fontSize: '86px', fill: 'red' });
        //Creates text that explains the rules of the game.
        subTitleText = game.add.text(100,game.world.centerY, 'Guess a number between 0 and 1.', { fontSize: '32px', fill: 'black'});
        //Creates text that explains how to start the game.
        subTitleText2 = game.add.text(100,game.world.centerY + 32, 'Press the LEFT or RIGHT curser to begin!', { fontSize: '32px', fill: 'black'});
        //Creates text that will be displayed if the player guesses correctly.
        winText = game.add.text(50, 200, 'YOU WIN!!!', { fontSize: '86px', fill: 'red' });
        //Creates text that will be displayed if the player guesses incorrectly.
        loseText = game.add.text(50, 200, 'YOU LOSE!!', { fontSize: '86px', fill: 'red' });
        //Creates text that will ask the player to reload the page to play the game again.
        reloadText = game.add.text(100,game.world.centerY, 'Please reload the page to play again.', { fontSize: '32px', fill: 'black'});
        //The win/lose/reload text will be invisible.
        winText.visible = false;
        loseText.visible = false;
        reloadText.visible = false;
    }
    
    function update() {

        //Character and objects will connect with platform.
        var hitPlatform = game.physics.arcade.collide(playerRight, platforms);
        var hitPlatform = game.physics.arcade.collide(playerLeft, platforms);
        game.physics.arcade.collide(numbers, platforms);
        

        //Resets the character's movements from left to right.
        playerRight.body.velocity.x = 0;
        playerLeft.body.velocity.x = 0;

        //If the player presses or holds the left curser, the character will move to the left.
        if (cursors.left.isDown)//Borrowed from phaser_tutorial_02/part9.html
        {
            //Text will disappear.
            startText.visible = false;
            subTitleText.visible = false;
            subTitleText2.visible = false;

            //The character will be facing the left.
            playerRight.visible = false;
            playerLeft.visible = true;
            game.world.bringToTop(playerLeft);

            //The character images (both aligned) will move to the left.
            playerRight.body.velocity.x = -600;
            playerLeft.body.velocity.x = -600;

            //The character left movement animation will play.
            playerLeft.animations.play('left');
        }
        //If the player presses or holds the left curser, the character will move to the right.
        else if (cursors.right.isDown)//Borrowed from phaser_tutorial_02/part9.html
        {
            //Text will disappear.
            startText.visible = false;
            subTitleText.visible = false;
            subTitleText2.visible = false;

            //The character will be facing the right.
            playerRight.visible = true;
            playerLeft.visible = false;
            game.world.bringToTop(playerRight);

            //The character images (both aligned) will move to the right.
            playerRight.body.velocity.x = 600;
            playerLeft.body.velocity.x = 600;

            //The character right movement animation will play.
            playerRight.animations.play('right');
        }
        //If the player does not press either curser, the character will not move.
        else//Borrowed from phaser_tutorial_02/part9.html
        {
            //After the player removes his/her finger off either curser, the animations will stop.
            playerRight.animations.stop();
            playerLeft.animations.stop();

            //The character images will return to their beginning frames.
            playerRight.frame = 0;
            playerLeft.frame = 5;
        }

        //If the character interacts with the 0 image, a message will pop up.
        if(game.physics.arcade.overlap(player, num0))
        {   
            //The 0 image will be removed.
            num0.kill();
            //If the 0 image matches the random number generated, text will pop up displaying a win message.
            if(randomNumber == 0)
            {
                winText.visible = true;
                game.world.bringToTop(winText);
            }
            //If the 0 image does not match the random number generated, text will pop up displaying a lose message.
            else if(randomNumber == 1)
            {
                loseText.visible = true;
                game.world.bringToTop(loseText);

            }
            //Message will pop up asking the player to play again.
            reloadText.visible = true;
        }
        //If the character interacts with the 1 image, a message will pop up.
        else if(game.physics.arcade.overlap(player, num1))
        {
            //The 1 image will be removed.
            num1.kill();
            //If the 1 image does not match the random number generated, text will pop up displaying a lose message.
            if(randomNumber == 0)
            {
                loseText.visible = true;
                game.world.bringToTop(loseText);
            }
            //If the 1 image matches the random number generated, text will pop up displaying a win message.
            else if(randomNumber == 1)
            {
                winText.visible = true;
                game.world.bringToTop(winText);

            }
            //Message will pop up asking the player to play again.
            reloadText.visible = true;
        }
    }

};