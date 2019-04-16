"use strict";

BasicGame.Game2 = function (game) {
	this.game = game;
	this.select;
	this.music;
	this.musicPlaying;
	this.attackEffect = null;
	this.bar1;
	this.bar2;
	this.isStage;
	this.theme;
	this.isPlayer2;
	this.isPlayer1;
	this.player2 = null;
	this.player1 = null;
	this.playerName2 = null;
	this.playerName1 = null;
	this.health2;
	this.health1;
	this.healthMeter2;
	this.healthMeter1;
	this.super2;
	this.super1;
	this.superMeter2;
	this.melee = null;
	this.superM = null;
	this.range = null;
	this.superR = null;
	this.superDescript = null;
	this.reload2;
	this.reloadMeter2;
	this.reload1;
	this.meleeButton = null;
	this.rangeButton = null;
	this.superButton = null;
	this.restoreButton = null;
	this.subH = null;
	this.TimerH = null;
	this.char1super = null;
	this.char3superplayer2Activated;
	this.char3player2turn;
	this.char4superplayer2Activated;
	this.yes = null;
	this.full;
	//If true, player can't perform attack twice.
	this.no = null;
	this.tween = null;
};

BasicGame.Game2.prototype = {
	create: function () {
		//Attack sound effect.
		this.attackEffect = this.add.audio('beep');
		//Creates stage for main game.
		if (this.isStage == 1){
			this.add.sprite(0,0,'Stage1');
		}
		else if (this.isStage == 2){
			this.add.sprite(0,0,'Stage2');
		}
		else if (this.isStage == 3){
			this.add.sprite(0,0,'Stage3');
		}
		else if (this.isStage == 4){
			this.add.sprite(0,0,'Stage4');
		}
		//Moves theme for player 1 screen.
		this.game.state.states['Game1'].theme = this.theme;
		this.bar1 = this.add.sprite(800,-100,'bar1');
		//Creates player 1 character model with name.
		if (this.isPlayer1 == 1){
			this.player1 = this.add.sprite(this.world.centerX-201,this.world.centerY-235+36,'char1');
			this.playerName1 = this.add.text(815,6,"Convoy",{font: "24px Times New Roman", fill: "white", align: "center"});
			this.tween = this.add.tween(this.player1).to({x:this.world.centerX-201+20},4000,Phaser.Easing.Linear.None,true,0,1000,true);
		}
		else if (this.isPlayer1 == 2){
			this.player1 = this.add.sprite(this.world.centerX-202,this.world.centerY-193+36,'char2');
			this.playerName1 = this.add.text(815,6,"Absolute",{font: "24px Times New Roman", fill: "white", align: "center"});
			this.tween = this.add.tween(this.player1).to({x:this.world.centerX-202+20},4000,Phaser.Easing.Linear.None,true,0,1000,true);
		}
		else if (this.isPlayer1 == 3){
			this.player1 = this.add.sprite(this.world.centerX-166,this.world.centerY-333+36,'char3');
			this.playerName1 = this.add.text(815,6,"Longshot",{font: "24px Times New Roman", fill: "white", align: "center"});
			this.tween = this.add.tween(this.player1).to({x:this.world.centerX-166+20},4000,Phaser.Easing.Linear.None,true,0,1000,true);
		}
		else if (this.isPlayer1 == 4){
			this.player1 = this.add.sprite(this.world.centerX-84,this.world.centerY-186+36,'char4');
			this.playerName1 = this.add.text(815,6,"Killjoy",{font: "24px Times New Roman", fill: "white", align: "center"});
			this.tween = this.add.tween(this.player1).to({x:this.world.centerX-84+20},4000,Phaser.Easing.Linear.None,true,0,1000,true);
		}
		//Creates player 1 health meter.
		this.healthMeter1 = this.add.text(875,32,"Health: " + this.health1,{font: "18px Times New Roman", fill: "#A4FF95", align: "center"});
		//Player 1 health decreases if character 4's super is activated.
		if (this.char4superplayer2Activated == true){
			this.subH = this.health1 - 400;
			this.game.state.states['Game1'].health1 = this.subH;
			this.TimerH = this.time.events.loop(Phaser.Timer.QUARTER*0.1,this.updateCounterH,this);	
		}
		this.bar2 = this.add.sprite(0,800-200,'bar2');
		//Creates player 2 portrait with character stats.
		if (this.isPlayer2 == 1){
			this.player2 = this.add.sprite(1000-178-50,800-190,'sel1');
			this.playerName2 = this.add.text(15,800-200,"Convoy",{font: "24px Times New Roman", fill: "white", align: "center"});
			this.melee = 120;
			this.superM = 60;
			this.range = 180;
			this.superR = 600;
			this.superDescript = this.add.text(25,772,"Stun: Player 1 loses a turn.", {font: "24px Times New Roman", fill: "black", align: "center"});
		}
		else if (this.isPlayer2 == 2){
			this.player2 = this.add.sprite(1000-178-50,800-190,'sel2');
			this.playerName2 = this.add.text(15,800-200,"Absolute",{font: "24px Times New Roman", fill: "white", align: "center"});
			this.melee = 50;
			this.superM = 400;
			this.range = 800;
			this.superR = 30;
			this.superDescript = this.add.text(25,772,"Absorb: Steal 600+ health from Player 1.", {font: "24px Times New Roman", fill: "black", align: "center"});
		}
		else if (this.isPlayer2 == 3){
			this.player2 = this.add.sprite(1000-178-50,800-190,'sel3');
			this.playerName2 = this.add.text(15,800-200,"Longshot",{font: "24px Times New Roman", fill: "white", align: "center"});
			this.melee = 150;
			this.superM = 50;
			this.range = 160;
			this.superR = 700;
			this.superDescript = this.add.text(25,772,"Power Up: Boost melee and range damage times 2 for 3 turns.", {font: "24px Times New Roman", fill: "black", align: "center"});
		}
		else if (this.isPlayer2 == 4){
			this.player2 = this.add.sprite(1000-178-50,800-190,'sel4');
			this.playerName2 = this.add.text(15,800-200,"Killjoy",{font: "24px Times New Roman", fill: "white", align: "center"});
			this.melee = 60;
			this.superM = 80;
			this.range = 200;
			this.superR = 400;
			this.superDescript = this.add.text(25,772,"Poison: Player 1 lose 400+ health for next turn.", {font: "24px Times New Roman", fill: "black", align: "center"});
		}
		this.char1super = false;
		this.superDescript.visible = false;
		//Creates player 2 health,super,and reload meter.
		this.healthMeter2 = this.add.text(115,800-200,"Health: "+this.health2,{font: "24px Times New Roman", fill: "#A4FF95", align: "center"});
		this.superMeter2 = this.add.text(265,800-200,"Super: "+this.super2,{font: "24px Times New Roman", fill: "black", align: "center"});
		this.reloadMeter2 = this.add.text(385,800-200,"Reload: "+this.reload2+" (Restore will reset Reload)",{font: "24px Times New Roman", fill: "black", align: "center"});
		//Creates attack buttons.
		this.meleeButton = this.add.button(75,650,'Melee',this.meleeAttack,this);
		this.rangeButton = this.add.button(75,709,'Range',this.rangeAttack,this);
		this.superButton = this.add.button(328,650,'Super',this.superAttack,this);
		this.restoreButton = this.add.button(328,709,'Restore',this.restoreAttack,this);
		this.no = true;
	},
	update: function (){
		this.rangeButton.visible = true;
		this.superButton.visible = false;
		this.restoreButton.visible = false;
		//Range button disappears if reload is at 0.
		if (this.reload2 <= 0){
			this.rangeButton.visible = false;
		}
		//Super button and Restore button will appear if super meter is over 1800.
		if (this.super2 >= 1800){
			this.superButton.visible = true;
			this.restoreButton.visible = true;
		}
	},
	meleeAttack: function (pointer) {
		if (this.no == true){
		this.tween.pause();
		this.no = false;
		this.select.play(null,null,1,false,true);
		//Attack damage doubles if character 3 super is activated.
		if (this.char3superplayer2Activated == true){
			this.subH = this.health1 - (this.melee * 2);
			this.char3player2turn--;
			//After 3 turns, character 3 super is deactivated.
			if (this.char3player2turn == 0){
				this.char3superplayer2Activated = false;
			}
		}
		else{
			this.subH = this.health1 - this.melee;
		}
		//Super meter increases.
		this.super2 = this.super2 + this.superM;
		this.superMeter2.setText("Super: "+this.super2);
		//Moves health meter to player 1 screen.
		this.game.state.states['Game1'].health1 = this.subH;
		//Player 1 health decreases with timer.
		this.TimerH = this.time.events.loop(Phaser.Timer.QUARTER*0.1,this.updateCounterH,this);
		}
	},
	rangeAttack: function (pointer) {
		if (this.no == true){
		this.tween.pause();
		this.no = false;
		this.select.play(null,null,1,false,true);
		//Reload decreases.
		this.reload2--;
		this.reloadMeter2.setText("Reload: "+this.reload2);
		//Attack damage doubles if character 3 super is activated.
		if (this.char3superplayer2Activated == true){
			this.subH = this.health1 - (this.range * 2);
			this.char3player2turn--;
			//After 3 turns, character 3 super is deactivated.
			if (this.char3player2turn == 0){
				this.char3superplayer2Activated = false;
			}
		}
		else{
			this.subH = this.health1 - this.range;
		}
		//Super meter increases.
		this.super2 = this.super2 + this.superR;
		this.superMeter2.setText("Super: "+this.super2);
		//Moves health meter to player 1 screen.
		this.game.state.states['Game1'].health1 = this.subH;
		//Player 1 health decreases.
		this.TimerH = this.time.events.loop(Phaser.Timer.QUARTER*0.1,this.updateCounterH,this);
		}
	},
	superAttack: function (pointer){
		if (this.no == true){
		this.tween.pause();
		this.no = false;
		this.select.play(null,null,1,false,true);
		//Super description appears.
		this.superDescript.visible = true;
		if (this.isPlayer2 == 1){
			this.char1super = true;
			//Super meter empties.
			this.super2 = 0;
			this.superMeter2.setText("Super: "+this.super2);
			//Player 1 health decreases.
			this.subH = this.health1 - 200;
			this.game.state.states['Game1'].health1 = this.subH;
			this.TimerH = this.time.events.loop(Phaser.Timer.QUARTER*0.1,this.updateCounterH,this);
		}
		else if (this.isPlayer2 == 2){
			//Super meter empties.
			this.super2 = 0;
			this.superMeter2.setText("Super: "+this.super2);
			//Player 2 health increases.
			this.health2 = this.health2 + 600;
			this.healthMeter2.setText("Health: "+this.health2);
			//Player 1 health decreases.
			this.subH = this.health1 - 600;
			this.game.state.states['Game1'].health1 = this.subH;
			this.TimerH = this.time.events.loop(Phaser.Timer.QUARTER*0.1,this.updateCounterH,this);
		}
		else if (this.isPlayer2 == 3){
			//Super meter empties.
			this.super2 = 0;
			this.superMeter2.setText("Super: "+this.super2);
			this.char3superplayer2Activated = true;
			this.char3player2turn = 3;
			//Player 1 health decreases.
			this.subH = this.health1 - 200;
			this.game.state.states['Game1'].health1 = this.subH;
			this.TimerH = this.time.events.loop(Phaser.Timer.QUARTER*0.1,this.updateCounterH,this);
		}
		else if (this.isPlayer2 == 4){
			//Super meter empties.
			this.super2 = 0;
			this.superMeter2.setText("Super: "+this.super2);
			//Player 1 health decreases.
			this.subH = this.health1 - 200;
			this.game.state.states['Game1'].health1 = this.subH;
			this.yes = true;
			this.TimerH = this.time.events.loop(Phaser.Timer.QUARTER*0.1,this.updateCounterH,this);
		}
		}
	},
	restoreAttack: function (pointer) {
		if (this.no == true){
		this.tween.pause();
		this.no = false;
		this.select.play(null,null,1,false,true);
		//Based on character, reload meter will reset.
		if (this.isPlayer2 == 1){
			this.reload2 = 6;
		}
		else if (this.isPlayer2 == 2){
			this.reload2 = 1;
		}
		else if (this.isPlayer2 == 3){
			this.reload2 = 6;
		}
		else if (this.isPlayer2 == 4){
			this.reload2 = 10;
		}
		this.reloadMeter2.setText("Reload: "+this.reload2);
		//Super meter empties.
		this.super2 = 0;
		this.superMeter2.setText("Super: "+this.super2);
		this.state.start('Game1');
		}
	},
	updateCounterH: function (pointer) {
		this.health1--;
		if (this.health1 == this.subH){
			this.healthMeter1.setText("Health: "+this.health1);
			//Timer resets.
			this.time.events.remove(this.TimerH);
			//Will not move to player 1 screen if character 1 super is activated.
			if (this.char1super == true){
				this.char1super = false;
				this.no = true;
			}
			//Character 4 super deactivates.
			else if (this.char4superplayer2Activated == true){
				this.char4superplayer2Activated == false;
				this.yes = false;
				this.no = true;
			}
			else{
				//Character 4 super deactivates.
				if (this.yes == true){
					this.char4superplayer2Activated = true;
				}
				//Moves to player 1 screen.
				this.state.start('Game1');
			}
		}
		else{
			this.healthMeter1.setText("Health: "+this.health1);
			this.attackEffect.play(null,null,0.5,false,true);
			//Win screen appears.
			if (this.health1 <= 1){
				this.finish();
			}
		}
	},
	finish: function (pointer){
		this.theme.stop();
		//Character supers deactivated.
		this.yes = false;
		this.char1super = false;
		this.char3superplayer2Activated = false;
		this.char3player2turn = false;
		this.char4superplayer2Activated = false;
		//Variables to display player 2's victory.
		this.game.state.states['Win'].player = 2;
		this.game.state.states['Win'].isPlayer1 = this.isPlayer1;
		this.game.state.states['Win'].isPlayer2 = this.isPlayer2;
		this.game.state.states['Win'].character = this.isPlayer2;
		this.game.state.states['Win'].select = this.select;
		this.state.start('Win');
	}
};