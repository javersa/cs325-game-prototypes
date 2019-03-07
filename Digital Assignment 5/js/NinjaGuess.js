"use strict";

BasicGame.NinjaGuess = function (game) {

    //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:
    /*
    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)
    
    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.
    */
    
    // For optional clarity, you can initialize
    // member variables here. Otherwise, you will do it in create().
    this.game = game;
    this.player = null;
    this.ninja = null;
    this.ninjaA = null;
    this.platform = null;
    this.b0 = null;
    this.b1 = null;
    this.isRight = null;
    this.Text = null;
    this.numberText = null;
    this.randomNumber = null;
    this.count = 0;
    this.answer = -1;
    this.yes = null;
    this.no = null;
    this.slash = null;
};

BasicGame.NinjaGuess.prototype = {

    create: function () {
        //Loads physics into the game.
        this.physics.startSystem(Phaser.Physics.ARCADE);
        //Creates background.
        this.add.sprite(0,0,'sky');
        //Creates a description of the game's objective.
        this.Text = this.add.text(16,16,"Guess a number between 0 and 1 \nas many times as you can.",{
            align: "left",
            font: "40px Times New Roman",
        });
        //Text that reads off the number of times the player guesses correctly.
        this.numberText = this.add.text(125,175,"Score: " + this.count,{
            align: "center",
            font: "80px Times New Roman",
        });
        //Allows player to move on a platform.
        this.platform = this.add.sprite(0,550,'platform');
        this.physics.arcade.enable(this.platform);
        this.platform.body.immovable = true;
        //Creates zero symbol for player to guess zero.
        this.b0 = this.add.sprite(100,450,'block0');
        this.physics.arcade.enable(this.b0);
        this.b0.body.immovable = true;
        //Creates one symbol for player to guess one.
        this.b1 = this.add.sprite(599,450,'block1');
        this.physics.arcade.enable(this.b1);
        this.b1.body.immovable = true;
        //Creates ninja character for player to control, includes physics, animations, and sound effects.
        this.player = this.add.group();
        this.physics.enable(this.player,Phaser.Physics.ARCADE);
        this.ninja = this.player.create(this.game.world.centerX-40,430,'ninja');
        this.ninjaA = this.player.create(this.game.world.centerX-40,430,'ninja attack');
        this.physics.enable(this.ninja,Phaser.Physics.ARCADE);
        this.physics.enable(this.ninjaA,Phaser.Physics.ARCADE);
        this.ninja.animations.add('right',[6,7,8,9,10,11],12,true);
        this.ninja.animations.add('left',[5,4,3,2,1,0],12,true);
        this.ninjaA.animations.add('right',[6,7,8,9,10,11],12,false);
        this.ninjaA.animations.add('left',[5,4,3,2,1,0],12,false);
        this.ninjaA.visible = false;
        this.slash = this.add.audio('sword');
        this.hit = this.add.audio('punch');
    },
    update: function () {
        //Allows player to connect with platform.
        this.physics.arcade.collide(this.ninja,this.platform);
        this.physics.arcade.collide(this.ninjaA,this.platform);
        //Generates a number between 0 and 1, where the variable "yes" will be the correct number.
        this.randomNumber = Math.floor(Math.random() * 2);
        if (this.randomNumber == 1){
            this.yes = 1;
            this.no = 0;
        }
        else if (this.randomNumber == 0){
            this.yes = 0;
            this.no = 1;
        }
        //Player will move left and left animation plays.
        if (this.input.keyboard.isDown(Phaser.Keyboard.A)){
            this.ninja.visible = true;
            this.ninjaA.visible = false;
            this.isRight = true;
            this.ninja.animations.play('left');
            this.ninja.x -= 8;
            this.ninjaA.x -= 8;
        }
        //Player will move right and right animation plays.
        else if(this.input.keyboard.isDown(Phaser.Keyboard.D)){
            this.ninja.visible = true;
            this.ninjaA.visible = false;
            this.isRight = false;
            this.ninja.animations.play('right');
            this.ninja.x += 8;
            this.ninjaA.x += 8;
        }
        //Player will play the attack animation.
        //justPressed borrowed from online.
        else if(this.input.keyboard.justPressed(Phaser.Keyboard.F)){
            //Plays attack sound effect.
            this.slash.play(null,null,1,false,true);
            //If the ninja is over the 0 and if player the enter F, the player will guess 0.
            if (this.physics.arcade.overlap(this.player,this.b0) == true){
                this.hit.play(null,null,1,false,true);
                this.answer = 0;
            }
            //If the ninja is over the 1 and if player the enter F, the player will guess 1.
            else if (this.physics.arcade.overlap(this.player,this.b1) == true){
                this.hit.play(null,null,1,false,true);
                this.answer = 1;
            }
            //Attack animation resets.
            this.ninjaA.animations.stop();
            this.ninjaA.visible = true;
            this.ninja.visible = false;
            //If the ninja is facing the left, left attack animation will play.
            if (this.isRight == true){
                this.ninjaA.animations.play('left');
            }
            //If the ninja is facing the right, right attack animation will play.
            else if (this.isRight == false){
                this.ninjaA.animations.play('right');
            }
        }
        else {
            //Running animation resets.
            this.ninja.animations.stop();
            //Resets the random number.
            this.randomNumber = -1;
            //The player answers correctly.
            if (this.yes == this.answer){
                //Adds to the number of guesses answered correctly.
                this.count += 1;
                //Allows the player to answer again.
                this.answer = -1;
                //Stores the number of guesses answered correctly to the GameOver state.
                //Code borrowed from online.
                this.game.state.states['GameOver'].count = this.count;
                //Adds new count to the text.
                this.numberText.setText("Score: " + this.count);
            }
            //The player answers incorrectly.
            else if (this.no == this.answer){
                //Allows the player to answer again.
                this.answer = -1;
                //Stores zeros guesses answered correctly to the GameOver state.
                if (this.count == 0)
                    this.game.state.states['GameOver'].count = this.count;
                //Resets number of guesses.
                this.count = 0;
                //Moves to the GameOver state.
                this.state.start('GameOver',true,false,this.count);
            }
        }
    }

};
