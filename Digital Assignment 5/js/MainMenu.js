"use strict";

BasicGame.MainMenu = function (game) {

	this.select = null;
	this.playButton = null;
	this.music = null;
	this.ninja1 = null;
	this.ninja2 = null;

};

BasicGame.MainMenu.prototype = {

	create: function () {

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)
		//Creates background
		this.add.sprite(0,0,'sky');
		this.add.sprite(153,200,'title');
		//Creates instructions on how the controls work.
		this.add.text(16,16,"Press A - move left\nPress D - move right\nPress F - Attack",{
			align: "left",
            font: "20px Times New Roman",
        });
        //Plays background music
   		this.music = this.add.audio('titleMusic');
		this.music.play();
		//Creates animation for MainMenu.
		this.ninja1 = this.add.sprite(0,154,'ninja');
		this.ninja2 = this.add.sprite(721,154,'ninja');
		this.ninja1.animations.add('left',[0,1,2,3,4,5],12,true);
		this.ninja2.animations.add('right',[6,7,8,9,10,11],12,true);
		//Creates button to start game and play sound effect.
		this.select = this.add.audio('select');
		this.playButton = this.add.button( 303, 400, 'playButton', this.startGame, this);

	},

	update: function () {

		//	Do some nice funky main menu effect here
		//Plays the animations.
		this.ninja1.animations.play('left');
		this.ninja2.animations.play('right');
	},

	startGame: function (pointer) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		this.music.stop();
		this.select.play(null,null,1,false,true);
		//	And start the actual game
		this.state.start('NinjaGuess');

	}

};
