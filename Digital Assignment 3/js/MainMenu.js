"use strict";

BasicGame.MainMenu = function (game) {

	this.music = null;
	this.playButton = null;
	this.angel1 = null;

};

BasicGame.MainMenu.prototype = {

	create: function () {

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)

		//Plays Gerudo Valley Music.
		this.music = this.add.audio('titleMusic');
		this.music.play();

		//Add background image.
		this.add.sprite(0, 0, 'sky');

		//Add Title
		this.add.sprite(100, 0, 'title');
		//Adds play button to start the game.
		this.playButton = this.add.button( 303, 400, 'start', this.startGame, this);
		//Add Angel image.
		this.angel1 = this.add.sprite(this.game.world.centerX, this.game.world.centerY,'angel');

	},

	update: function () {
		//Angel flys around in a circle.
		this.angel1.angle -= 3;
	},

	startGame: function (pointer) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		this.music.stop();

		//	And start the actual game
		this.state.start('Game1');

	}

};
