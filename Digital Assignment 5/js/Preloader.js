"use strict";

BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar
		this.background = this.add.sprite(0, 0, 'preloaderBackground');
		this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
		//	As this is just a Project Template I've not provided these assets, swap them for your own.
		//Loads assets for MainMenu.
		this.load.image('title','assets/title.png');
		this.load.image('playButton', 'assets/Start.png');
		this.load.audio('select','assets/button select.mp3');
		this.load.audio('titleMusic','assets/Gerudo Valley.mp3');
		this.load.image('sky', 'assets/sky.png');
		//Loads assets for the NinjaGuess and GaveOver.
		this.load.spritesheet('ninja','assets/ninja.png',79,124);
		this.load.spritesheet('ninja attack','assets/ninja attack.png',150,124);
		this.load.audio('sword','assets/sword-gesture1.mp3');
		this.load.image('platform','assets/platform.png');
		this.load.image('block1','assets/Number_Blocks_01_Set_1_64x64_1.png');
		this.load.image('block0','assets/Number_Blocks_01_Set_1_64x64_0.png');
		this.load.audio('punch','assets/PUNCH.mp3');
		this.load.audio('win','assets/NES - The Legend of Zelda - Sound Effects/Sound Effect (20).wav');
	},

	create: function () {

		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		this.preloadBar.cropEnabled = false;

	},

	update: function () {

		//	You don't actually need to do this, but I find it gives a much smoother game experience.
		//	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
		//	You can jump right into the menu if you want and still play the music, but you'll have a few
		//	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
		//	it's best to wait for it to decode here first, then carry on.
		
		//	If you don't have any music in your game then put the game.state.start line into the create function and delete
		//	the update function completely.
		
		if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
		{
			this.ready = true;
			this.state.start('MainMenu');
		}

	}

};
