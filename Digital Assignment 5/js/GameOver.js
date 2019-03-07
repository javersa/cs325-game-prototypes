"use strict";

BasicGame.GameOver = function (game) {

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
    this.ninja = null;
    this.count;
    this.Text = null;
    this.restart = null;
    this.tween = null;
    this.win = null;
    this.select = null;
};

BasicGame.GameOver.prototype = {

    create: function () {
        //Creates ninja animation.
        this.ninja = this.add.sprite(800,250,'ninja');
        this.ninja.animations.add('left',[5,4,3,2,1,0],12,true);
        this.ninja.animations.play('left');
        //Moves animation across the screen.
        //Code borrowed from Phaser.
        this.tween = this.add.tween(this.ninja).to({ x: -79 }, 0, null, true);
        this.tween.onComplete.add(this.tweenLoop,this);
        //Creates text that reads the number of guesses answered correctly.
        this.Text = this.add.text(25,100,"Your high score is " + this.count + ". \nPlease Start to continue back to the main menu.",{
            align: "center",
            font: "40px Times New Roman",
        });
        this.Text.addColor('white',0);
        //Creates button to return player back to the MainMenu.
        this.restart = this.add.button(303, 400, 'playButton', this.startGame, this);
        //Plays sound effect when state opens up.
        this.win = this.add.audio('win');
        this.win.play(null,null,1,false,true);
        this.select = this.add.audio('select');
    },
    //Loops the movement of the animation across the screen.
    tweenLoop: function () {
        this.ninja.destroy();
        this.ninja = this.add.sprite(800,250,'ninja');
        this.ninja.animations.add('left',[5,4,3,2,1,0],12,true);
        this.ninja.animations.play('left');
        this.tween = this.add.tween(this.ninja).to({ x: -79 }, 0, null, true);
        this.tween.onComplete.add(this.tweenLoop,this);
    },
    //Returns player back to the MainMenu.
    startGame: function () {
        this.select.play(null,null,1,false,true);
        this.count = 0;
        this.state.start('MainMenu');
    }

};
