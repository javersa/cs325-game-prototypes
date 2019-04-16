"use strict";

BasicGame.Stage = function (game) {
	this.game = game;
	this.title = null;
	this.style;
	this.select;
	this.music;
	this.slot1 = null;
	this.stage1 = null;
	this.text1 = null;
	this.slot2 = null;
	this.stage2 = null;
	this.text2 = null;
	this.slot3 = null;
	this.stage3 = null;
	this.text3 = null;
	this.slot4 = null;
	this.stage4 = null;
	this.text4 = null;
	this.begin = null;
	this.cursor = null;
	this.full;
};

BasicGame.Stage.prototype = {
	create: function () {
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.title = this.add.text(16,16,"Select a Stage:",this.style);
		//Creates stage portraits.
        this.stage1 = this.add.sprite(50,100,'slot1');
        this.stage2 = this.add.sprite(50,100,'slot2');
        this.stage3 = this.add.sprite(50,100,'slot3');
        this.stage4 = this.add.sprite(50,100,'slot4');
        this.stage1.visible = false;
        this.stage2.visible = false;
        this.stage3.visible = false;
        this.stage4.visible = false;
        //Creates stage titles.
        this.text1 = this.add.text(20,400,"Style Palace",this.style);
        this.text2 = this.add.text(20,400,"Style Palace: Thrown Room",this.style);
        this.text3 = this.add.text(20,400,"The Fields",this.style);
        this.text4 = this.add.text(20,400,"The City Streets",this.style);
        this.text1.visible = false;
        this.text2.visible = false;
        this.text3.visible = false;
        this.text4.visible = false;
        //Creates slots for stage selection.
		this.slot1 = this.add.sprite(450,25,'slot1');
		this.slot2 = this.add.sprite(450+275,25,'slot2');
		this.slot3 = this.add.sprite(450,25+213,'slot3');
		this.slot4 = this.add.sprite(450+275,25+213,'slot4');
		//Enable physics for slots.
        this.game.physics.enable(this.slot1, Phaser.Physics.ARCADE);
        this.game.physics.enable(this.slot2, Phaser.Physics.ARCADE);
        this.game.physics.enable(this.slot3, Phaser.Physics.ARCADE);
        this.game.physics.enable(this.slot4, Phaser.Physics.ARCADE);
        //Creates button to activate main game.
        this.begin = this.add.button(this.world.centerX-88,800-100,'Begin',this.startGame,this);
        this.begin.visible = false;
        //Creates cursor with physics and the ability to be drag for stage selection.
        this.cursor = this.add.sprite(1000-100,800-100,'Cursor');
        this.game.physics.enable(this.cursor,Phaser.Physics.ARCADE);
        this.cursor.inputEnabled = true;
        this.cursor.input.enableDrag();
	},
	update: function () {
		//Game button, stage portrait, stage titles remain invisible.
		this.begin.visible = false;
        this.stage1.visible = false;
        this.stage2.visible = false;
        this.stage3.visible = false;
        this.stage4.visible = false;
        this.text1.visible = false;
        this.text2.visible = false;
        this.text3.visible = false;
        this.text4.visible = false;
        //Stage portrait 1 and title appear if cursor is over slot 1.
		if (this.physics.arcade.overlap(this.cursor,this.slot1,null,null,this)){
			this.stage1.visible = true;
			this.text1.visible = true;
		}
		//Stage portrait 2 and title appear if cursor is over slot 2.
		if (this.physics.arcade.overlap(this.cursor,this.slot2,null,null,this)){
			this.stage2.visible = true;
			this.text2.visible = true;
		}
		//Stage portrait 3 and title appear if cursor is over slot 3.
		if (this.physics.arcade.overlap(this.cursor,this.slot3,null,null,this)){
			this.stage3.visible = true;
			this.text3.visible = true;
		}
		//Stage portrait 4 and title appear if cursor is over slot 4.
		if (this.physics.arcade.overlap(this.cursor,this.slot4,null,null,this)){
			this.stage4.visible = true;
			this.text4.visible = true;
		}
		//If a stage is selected, game button will appear.
		if (this.stage1.visible == true || this.stage2.visible == true || this.stage3.visible == true || this.stage4.visible == true){
			this.begin.visible = true;
		}
	},
	startGame: function (pointer) {
		this.select.play(null,null,1,false,true);
		this.music.stop();
		//Moves variables to main game.
		this.game.state.states['Game1'].select = this.select;
		this.game.state.states['Game1'].music = this.music;
		this.game.state.states['Game1'].musicPlaying = false;
		this.game.state.states['Game2'].select = this.select;
		this.game.state.states['Game2'].music = this.music;
		//Moves stage variable for main game.
		if (this.stage1.visible == true){
            this.game.state.states['Game1'].isStage = 1;
            this.game.state.states['Game2'].isStage = 1;
		}
		if (this.stage2.visible == true){
            this.game.state.states['Game1'].isStage = 2;
            this.game.state.states['Game2'].isStage = 2;
		}
		if (this.stage3.visible == true){
            this.game.state.states['Game1'].isStage = 3;
            this.game.state.states['Game2'].isStage = 3;
		}
		if (this.stage4.visible == true){
            this.game.state.states['Game1'].isStage = 4;
            this.game.state.states['Game2'].isStage = 4;
		}
		//Moves player 1 and 2 health and super meters to main game.
		this.game.state.states['Game1'].health1 = 2400;
		this.game.state.states['Game1'].health2 = 2400;
		this.game.state.states['Game1'].super1 = 0;
		this.game.state.states['Game1'].super2 = 0;
		this.game.state.states['Game2'].health1 = 2400;
		this.game.state.states['Game2'].health2 = 2400;
		this.game.state.states['Game2'].super1 = 0;
		this.game.state.states['Game2'].super2 = 0;
		this.game.state.states['Game1'].musicPlaying = false;
		this.state.start('Game1');
	}

};