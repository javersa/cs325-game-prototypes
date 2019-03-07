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
    this.player = null;
    this.ninja = null;
    this.ninjaA = null;
    this.alpha = null;
    this.platform = null;
    this.b0 = null;
    this.b1 = null;
    this.isRight = true;
};

BasicGame.NinjaGuess.prototype = {

    create: function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.add.spirte(0,0,'sky');
        this.platform = this.add.spirte(0,550,'platform');
        this.platform.enableBody = true;
        this.platform.immovable = true;

        this.alpha = this.add.spirte(this.game.world.centerX-100,412,'alpha');
        this.alpha.enableBody = true;

        this.player = this.add.group();
        this.ninja = this.player.create(this.game.world.centerX-40,412,'ninja');
        this.ninjaA = this.player.create(this.game.world.centerX-60,412,'ninja attack');
        this.game.physics.arcade.enable(this.player);
        this.player.collideWorldBounds = true;
        this.player.gravity.y = 300;
        this.ninja.animations.add('right',[6,7,8,9,10,11],30,true);
        this.ninja.animations.add('left',[0,1,2,3,4,5],30,true);
        this.ninjaA.animations.add('right',[6,7,8,9,10,11],6,false);
        this.ninjaA.animations.add('left',[0,1,2,3,4,5],6,false);
        this.ninjaA.visible = false;

        this.b0 = this.add.spirte(100,400,'block0');
        this.b0.enableBody = true;
        this.b0.immovable = true;
        this.b1 = this.add.spirte(599,400,'block1');
        this.b1.enableBody = true;
        this.b1.immovable = true;
    },

    update: function () {
        this.game.physics.arcade.collide(this.player,this.platform);
        this.game.physics.arcade.collide(this.ninja,b0);
        this.game.physics.arcade.collide(this.ninja,b1);
        this.game.physics.arcade.overlap(this.alpha,this.b0,this.select0,null,this);
        this.game.physics.arcade.overlap(this.alpha,this.b1,this.select1,null,this);
        if (this.input.keyboard.isDown(Phaser.Keyboard.A)){
            this.isRight = true;
            this.ninja.animations.play('left');
            this.player.x -= 4;
            this.alpha.x -= 4;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.D)){
            this.isRight = false;
            this.player.animations.play('right');
            this.player.x += 4;
            this.alpha.x += 4;
        }
        else{
            this.ninja.animations.stop();
            this.ninjaA.animations.stop();
            if (this.isRight == true){
                this.ninja.frame = 6;
            }
            else (this.isRight == false){
                this.ninja.frame = 0;
            }
        }
    },
    select0: function (){
        if (this.input.keyboard.isDown(Phaser.Keyboard.F)){
            this.ninjaA.animations.play('left');
        }
    }
    select1: function (){
        if (this.input.keyboard.isDown(Phaser.Keyboard.F)){
            this.ninjaA.animations.play('right');
        }
    }

    quitGame: function () {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        this.state.start('MainMenu');

    }

};
