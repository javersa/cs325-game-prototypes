"use strict";

BasicGame.Preloader = function (game) {

	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar
		this.preloadBar = this.add.sprite(this.world.centerX - 100, this.world.centerY, 'preloaderBar');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
		//	As this is just a Project Template I've not provided these assets, swap them for your own.
		this.load.image('title','assets/title.png');
		//character models
		this.load.image('char1','assets/Character1.png');
		this.load.image('char2','assets/Character2.png');
		this.load.image('char3','assets/Character3.png');
		this.load.image('char4','assets/Character4.png');
		//character portraits
		this.load.image('sel1','assets/Select1.png');
		this.load.image('sel2','assets/Select2.png');
		this.load.image('sel3','assets/Select3.png');
		this.load.image('sel4','assets/Select4.png');
		//stage portraits
		this.load.image('slot1','assets/Slot1.png');
		this.load.image('slot2','assets/Slot2.png');
		this.load.image('slot3','assets/Slot3.png');
		this.load.image('slot4','assets/Slot4.png');
		//stages
		this.load.image('Stage1','assets/Stage1.png');
		this.load.image('Stage2','assets/Stage2.png');
		this.load.image('Stage3','assets/Stage3.png');
		this.load.image('Stage4','assets/Stage4.png');
		//battle themes
		this.load.audio('theme1','assets/10_Bloody Tears.mp3');
		this.load.audio('theme2','assets/3-22. Rivers in the Desert.mp3');
		this.load.audio('theme3','assets/Gerudo Valley.mp3');
		this.load.audio('theme4','assets/33. Guile Stage.mp3');
		//player displays
		this.load.image('bar1','assets/Player1.png');
		this.load.image('bar2','assets/Player2.png');
		//cursors
		this.load.image('Cursor1','assets/Player1Select.png');
		this.load.image('Cursor2','assets/Player2Select.png');
		this.load.image('Cursor','assets/StageSelect.png');
		//attack buttons
		this.load.image('Melee','assets/Melee.png');
		this.load.image('Range','assets/Range.png');
		this.load.image('Restore','assets/Restore.png');
		this.load.image('Super','assets/Super.png');
		//menu buttons
		this.load.image('Start','assets/StartButton.png');
		this.load.image('Fullscreen','assets/Fullscreen.png');
		this.load.image('StageSelect','assets/StageButton.png');
		this.load.image('Begin','assets/Begin!.png');
		//item select sound
		this.load.audio('select','assets/button select.mp3');
		//menu theme
		this.load.audio('titleMusic','assets/101 Prologue (Prologue).mp3');
		//state buttons
		this.load.image('replay','assets/replayButton.png');
		this.load.image('characterSelect','assets/WinCharacterSelect.png');
		this.load.image('stageSelect','assets/WinStageSelect.png');
		this.load.image('return','assets/WinReturn.png');
		//victory theme
		this.load.audio('win','assets/Final Fantasy VI - Victory Fanfare.mp3');
		this.load.audio('beep','assets/Mega Man 2 SFX (18).wav')
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
