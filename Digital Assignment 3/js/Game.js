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
    this.sky = null;
    this.main = null;
    this.forward = null;
    this.left = null;
    this.right = null;
    this.back = null;
    this.angel = null;
    this.door = null;

};

BasicGame.Game1.prototype = {

    create: function () {
        this.sky = this.add.sprite(0,0,'titlePage');
        this.main = this.add.audio('mainMusic');
        this.main.play(null,null,true,true);

        this.back = this.add.sprite(game.world.centerX,600,'back');
        this.back.animations.add('back',[0,1,2,3],4,true);

        this.left = this.add.sprite(game.world.centerX,600,'left');
        this.left.animations.add('left',[0,1,2,3],4,true);
        this.left.visible = false;

        this.right = this.add.sprite(game.world.centerX,600,'right');
        this.right.animations.add('right',[0,1,2,3],4,true);
        this.right.visible = false;
        
        this.forward = this.add.sprite(game.world.centerX,600,'forward');
        this.forward.animations.add('forward',[0,1,2,3],4,true);
        this.forward.visible = false;



    },

    update: function () {
    },

    quitGame: function () {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        this.state.start('MainMenu');

    }

};
