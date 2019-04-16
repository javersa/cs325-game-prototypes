"use strict";

BasicGame.Win = function (game) {
	this.player;
	this.character;
	this.select;
	this.music = null;
	this.tween1 = null;
	this.tween2 = null;
	this.isPlayer1;
	this.isPlayer2;
	this.text = null;
	this.char = null;
	this.replayButton = null;
	this.stageButton = null;
	this.characterSelectButton = null;
	this.menuButton = null;
	this.full;
};

BasicGame.Win.prototype = {
	create: function () {
		//Plays theme.
		this.music = this.add.audio('win');
		this.music.play();
		//Displays win title for a different player.
		if (this.player == 1){
			this.text = this.add.text(1000,200,"Player 1 Wins!",{font: "36px Constantia", fill: "red", align: "center"});
		}
		else if (this.player == 2){
			this.text = this.add.text(1000,200,"Player 2 Wins!",{font: "36px Constantia", fill: "blue", align: "center"});
		}
		//Moves title from off screen.
		this.tween1 = this.add.tween(this.text).to({x:200},0,null,true);
		//Creates character model.
		if (this.character == 1){
			this.char = this.add.sprite(1000,331,'char1');
		}
		else if (this.character == 2){
			this.char = this.add.sprite(1000,414,'char2');
		}
		else if (this.character == 3){
			this.char = this.add.sprite(1000,134,'char3');
		}
		else if (this.character == 4){
			this.char = this.add.sprite(1000,429,'char4');
		}
		//Triggers second tween.
		this.tween1.onComplete.add(this.otherTween,this);
		//Creates menu buttons.
		this.replayButton = this.add.button(100,350,'replay',this.replay,this);
		this.characterSelectButton = this.add.button(100,390,'characterSelect',this.characterSelect,this);
		this.stageButton = this.add.button(100,430,'stageSelect',this.stageSelect,this);
		this.menuButton = this.add.button(100,470,'return',this.return,this);
	},
	//Moves character model from off screen.
	otherTween: function (pointer){
		this.tween2 = this.add.tween(this.char).to({x:600},0,null,true);
	},
	//Button replays the game with same characters and stage, and meters are reset.
	replay: function (pointer){
		this.select.play(null,null,1,false,true);
		this.music.stop();
		this.game.state.states['Game1'].select = this.select;
		this.game.state.states['Game1'].music = this.music;
		this.game.state.states['Game1'].musicPlaying = false;
		this.game.state.states['Game2'].select = this.select;
		this.game.state.states['Game2'].music = this.music;

		this.game.state.states['Game1'].health1 = 2400;
		this.game.state.states['Game1'].health2 = 2400;
		this.game.state.states['Game1'].super1 = 0;
		this.game.state.states['Game1'].super2 = 0;

		this.game.state.states['Game2'].health1 = 2400;
		this.game.state.states['Game2'].health2 = 2400;
		this.game.state.states['Game2'].super1 = 0;
		this.game.state.states['Game2'].super2 = 0;

		this.game.state.states['Game1'].musicPlaying = false;

		this.game.state.states['Game1'].char3superplayer1Activated = false;
		this.game.state.states['Game1'].char3player1turn = 0;
		this.game.state.states['Game1'].char4superplayer1Activated = false;
		this.game.state.states['Game2'].char3superplayer2Activated = false;
		this.game.state.states['Game2'].char3player2turn = 0;
		this.game.state.states['Game2'].char4superplayer2Activated = false;

        if (this.isPlayer1 == 1){
            this.game.state.states['Game1'].isPlayer1 = 1;
            this.game.state.states['Game1'].reload1 = 6;
            this.game.state.states['Game2'].isPlayer1 = 1;
        }
        else if (this.isPlayer1 == 2){
            this.game.state.states['Game1'].isPlayer1 = 2;
            this.game.state.states['Game1'].reload1 = 1;
            this.game.state.states['Game2'].isPlayer1 = 2;
        }
        else if (this.isPlayer1 == 3){
            this.game.state.states['Game1'].isPlayer1 = 3;
            this.game.state.states['Game1'].reload1 = 6
            this.game.state.states['Game2'].isPlayer1 = 3;
        }
        else if (this.isPlayer1 == 4){
            this.game.state.states['Game1'].isPlayer1 = 4;
            this.game.state.states['Game1'].reload1 = 10;
            this.game.state.states['Game2'].isPlayer1 = 4;
        }
        if (this.isPlayer2 == 1){
            this.game.state.states['Game1'].isPlayer2 = 1;
            this.game.state.states['Game2'].isPlayer2 = 1;
            this.game.state.states['Game2'].reload2 = 6;
        }
        else if (this.isPlayer2 == 2){
            this.game.state.states['Game1'].isPlayer2 = 2;
            this.game.state.states['Game2'].isPlayer2 = 2;
            this.game.state.states['Game2'].reload2 = 1;
        }
        else if (this.isPlayer2 == 3){
            this.game.state.states['Game1'].isPlayer2 = 3;
            this.game.state.states['Game2'].isPlayer2 = 3;
            this.game.state.states['Game2'].reload2 = 6;
        }
        else if (this.isPlayer2 == 4){
            this.game.state.states['Game1'].isPlayer2 = 4;
            this.game.state.states['Game2'].isPlayer2 = 4;
            this.game.state.states['Game2'].reload2 = 10;
        }
		this.state.start('Game1');
	},
	//Button moves to character selection screen.
	characterSelect: function (pointer){
		this.select.play(null,null,1,false,true);
		this.music.stop();
		this.game.state.states['Character'].music.play(null,null,1,true,true);
		this.state.start('Character');
	},
	//Button moves to stage selection screen with same characters.
	stageSelect: function (pointer){
		this.select.play(null,null,1,false,true);
		this.music.stop();
		this.game.state.states['Character'].music.play(null,null,1,true,true);
        if (this.isPlayer1 == 1){
            this.game.state.states['Game1'].isPlayer1 = 1;
            this.game.state.states['Game1'].reload1 = 6;
            this.game.state.states['Game2'].isPlayer1 = 1;
        }
        else if (this.isPlayer1 == 2){
            this.game.state.states['Game1'].isPlayer1 = 2;
            this.game.state.states['Game1'].reload1 = 1;
            this.game.state.states['Game2'].isPlayer1 = 2;
        }
        else if (this.isPlayer1 == 3){
            this.game.state.states['Game1'].isPlayer1 = 3;
            this.game.state.states['Game1'].reload1 = 6
            this.game.state.states['Game2'].isPlayer1 = 3;
        }
        else if (this.isPlayer1 == 4){
            this.game.state.states['Game1'].isPlayer1 = 4;
            this.game.state.states['Game1'].reload1 = 10;
            this.game.state.states['Game2'].isPlayer1 = 4;
        }
        if (this.isPlayer2 == 1){
            this.game.state.states['Game1'].isPlayer2 = 1;
            this.game.state.states['Game2'].isPlayer2 = 1;
            this.game.state.states['Game2'].reload2 = 6;
        }
        else if (this.isPlayer2 == 2){
            this.game.state.states['Game1'].isPlayer2 = 2;
            this.game.state.states['Game2'].isPlayer2 = 2;
            this.game.state.states['Game2'].reload2 = 1;
        }
        else if (this.isPlayer2 == 3){
            this.game.state.states['Game1'].isPlayer2 = 3;
            this.game.state.states['Game2'].isPlayer2 = 3;
            this.game.state.states['Game2'].reload2 = 6;
        }
        else if (this.isPlayer2 == 4){
            this.game.state.states['Game1'].isPlayer2 = 4;
            this.game.state.states['Game2'].isPlayer2 = 4;
            this.game.state.states['Game2'].reload2 = 10;
        }
		this.state.start('Stage');
	},
	//Button returns to main menu.
	return: function (pointer){
		this.select.play(null,null,1,false,true);
		this.music.stop();
		this.state.start('MainMenu');
	}
};