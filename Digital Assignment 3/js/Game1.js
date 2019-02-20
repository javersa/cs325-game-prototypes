"use strict";

BasicGame.Game1 = function (game) {

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
    this.main = null;
    this.player = null;
    this.angel = null;
    this.speech = null;
    this.key = null;
    this.door1 = null;
    this.select = null;

};

BasicGame.Game1.prototype = {

    create: function () {
        //Adds arcade physics to the game.
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        //Adds background image.
        this.game.add.sprite(0,0,'sky');
        //Adds Angel image.
        this.angel = this.add.sprite(this.game.world.centerX-300,25,'angel');
        //Creates dialect from the Angel.
        this.speech = this.add.text(20,0,"Brave Warrior, you must collect the \n key to enter Heaven's Door.");
        //Adds door image to the game.
        this.door1 = this.add.sprite(736,this.game.world.centerY,'door');
        this.door1.visible = false;
        //Adds key image to the game.
        this.key = this.add.sprite(0,400,'key');
        //Adds item select sound effect.
        this.select = this.add.audio('select');
        //Plays Mario background music.
        this.main = this.add.audio('mainMusic');
        this.main.play(null,null,true,true);
        //Adds character to game.
        this.player = this.add.sprite(this.game.world.centerX,this.game.world.centerY,'player');
        //Enables physics on the player.
        this.game.physics.arcade.enable(this.player);
        //Player will not be able to move outside of the borders of the game.
        this.player.body.collideWorldBounds = true;
        //Up movement animation for player.
        this.player.animations.add('back',[0,1,2,3],16,true);
        //Left movement animation for player.
        this.player.animations.add('left',[4,5,6,7],16,true);
        //Right movement animation for player.
        this.player.animations.add('right',[8,9,10,11],16,true);
        //Down movement animation for player.
        this.player.animations.add('forward',[12,13,14,15],16,true);
        //Player will be able to connect with door.
        this.game.physics.arcade.enable([this.player,this.door1], Phaser.Physics.ARCADE);
        //Player will be able to connect with key.
        this.game.physics.arcade.enable([this.player,this.key], Phaser.Physics.ARCADE);
    },

    update: function () {
        //If player connects with door, the game changes.
        this.game.physics.arcade.overlap(this.player,this.door1,this.doorRight,null,this);
        //If player connects with key, the door becomes visible.
        this.game.physics.arcade.overlap(this.player,this.key,this.collectKey,null,this);
        //If player presses 'A' key, player moves left and animation plays.
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.A))
        {
            this.player.animations.play('left');
            this.player.x -= 4;
        }
        //If player presses 'D' key, player moves right and animation plays.
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D))
        {
            this.player.animations.play('right');
            this.player.x += 4;
        }
        //If player presses 'W' key, player moves up and animation plays.
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.W))
        {
            this.player.animations.play('back');
            this.player.y -= 4;
        }
        //If player presses 'S' key, player moves down and animation plays.
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S))
        {
            this.player.animations.play('forward');
            this.player.y += 4;
        }
        //Animations stop.
        else
        {
            this.player.animations.stop();
        }
    },
    //If character collects key item, item select sound plays and door appears.
    collectKey: function () {
        this.select.play(null,null,1,false,true);
        this.key.kill();
        this.door1.visible = true;
    },
    doorRight: function () {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.
        this.main.stop();

        //  Then let's go back to the main menu.
        this.state.start('Game2');

    }

};
