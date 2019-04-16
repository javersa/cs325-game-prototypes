"use strict";

BasicGame.MainMenu = function (game) {
	this.game = game;
	this.select = null;
	this.playButton = null;
	this.fullscreenButton = null;
	this.full = null;
	this.music = null;
};

BasicGame.MainMenu.prototype = {

	create: function () {

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)
		this.add.sprite(0,200,'title');
        //Plays background music
   		this.music = this.add.audio('titleMusic');
		this.music.play(null,null,1,true,true);
		//Creates button to start game and play sound effect.
		this.select = this.add.audio('select');
		this.playButton = this.add.button(this.world.centerX,600,'Start',this.startGame,this);
		this.fullscreenButton = this.add.button(this.world.centerX,600+57,'Fullscreen',this.fullScreen,this);
	},
	fullScreen: function (pointer) {
		this.select.play(null,null,1,false,true);
		this.full = this.game.scale.startFullScreen();
		this.game.state.states['Character'].full = this.full;
	},
	startGame: function (pointer) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		this.select.play(null,null,1,false,true);
		this.game.state.states['Character'].select = this.select;
		this.game.state.states['Character'].music = this.music;
		//	And start the actual game
		this.state.start('Character');

	}

};
