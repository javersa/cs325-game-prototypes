"use strict";

BasicGame.Character = function (game) {
    this.game = game;
    this.title = null;
    this.style = null;
    this.select;
    this.music;
    this.C1L = null;
    this.C2L = null;
    this.C3L = null;
    this.C4L = null;
    this.C1R = null;
    this.C2R = null;
    this.C3R = null;
    this.C4R = null;
    this.text1L = null;
    this.text2L = null;
    this.text3L = null;
    this.text4L = null;
    this.text1R = null;
    this.text2R = null;
    this.text3R = null;
    this.text4R = null;
    this.slot1 = null;
    this.slot2 = null;
    this.slot3 = null;
    this.slot4 = null;
    this.player1 = null;
    this.player2 = null;
    this.stagebutton = null;
    this.player1selected = null;
    this.player2selected = null;
    this.full;
};

BasicGame.Character.prototype = {

    create: function () {
        //Loads physics into the game.
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.style = {font: "32px Times New Roman", fill: "white", align: "center"};
        //Creates character models and stats for player 1.
        this.title = this.add.text(16,16,"Drag the objects over the characters to select one:",this.style);
        this.C1L = this.add.sprite(0,800-469-100,'char1');
        this.text1L = this.add.text(20,700,"Convoy\nMelee: 120   Range: 180\nSuper: Stun",{font: "16px Times New Roman", fill: "white", align: "left"});
        this.C2L = this.add.sprite(0,800-386-100,'char2');
        this.text2L = this.add.text(20,700,"Absolute\nMelee:  50   Range: 800\nSuper: Absorb",{font: "16px Times New Roman", fill: "white", align: "left"});
        this.C3L = this.add.sprite(0,800-666-100,'char3');
        this.text3L = this.add.text(20,700,"Longshot\nMelee: 150   Range: 160\nSuper: Power Up",{font: "16px Times New Roman", fill: "white", align: "left"});
        this.C4L = this.add.sprite(0,800-371-100,'char4');
        this.text4L = this.add.text(20,700,"Killjoy\nMelee:  60   Range: 200\nSuper: Onslaught",{font: "16px Times New Roman", fill: "white", align: "left"});
        this.C1L.visible = false;
        this.C2L.visible = false;
        this.C3L.visible = false;
        this.C4L.visible = false;
        this.text1L.visible = false;
        this.text2L.visible = false;
        this.text3L.visible = false;
        this.text4L.visible = false;
        //Creates character models and stats for player 2.
        this.C1R = this.add.sprite(1000-401,800-469-100,'char1');
        this.text1R = this.add.text(820,700,"Convoy\nMelee: 120   Range: 180\nSuper: Stun",{font: "16px Times New Roman", fill: "white", align: "left"});
        this.C2R = this.add.sprite(1000-404,800-386-100,'char2');
        this.text2R = this.add.text(820,700,"Absolute\nMelee:  50   Range: 800\nSuper: Absorb",{font: "16px Times New Roman", fill: "white", align: "left"});
        this.C3R = this.add.sprite(1000-332,800-666-100,'char3');
        this.text3R = this.add.text(820,700,"Longshot\nMelee: 150   Range: 160\nSuper: Power Up",{font: "16px Times New Roman", fill: "white", align: "left"});
        this.C4R = this.add.sprite(1000-168,800-371-100,'char4');
        this.text4R = this.add.text(820,700,"Killjoy\nMelee:  60   Range: 200\nSuper: Onslaught",{font: "16px Times New Roman", fill: "white", align: "left"});
        this.C1R.visible = false;
        this.C2R.visible = false;
        this.C3R.visible = false;
        this.C4R.visible = false;
        this.text1R.visible = false;
        this.text2R.visible = false;
        this.text3R.visible = false;
        this.text4R.visible = false;
        //Creates character select slots.
        this.slot1 = this.add.sprite(this.world.centerX-178,100,'sel1');
        this.slot2 = this.add.sprite(this.world.centerX,100,'sel2');
        this.slot3 = this.add.sprite(this.world.centerX-178,100+279,'sel3');
        this.slot4 = this.add.sprite(this.world.centerX,100+279,'sel4');
        //Enables physics for slots.
        this.game.physics.enable(this.slot1, Phaser.Physics.ARCADE);
        this.game.physics.enable(this.slot2, Phaser.Physics.ARCADE);
        this.game.physics.enable(this.slot3, Phaser.Physics.ARCADE);
        this.game.physics.enable(this.slot4, Phaser.Physics.ARCADE);
        //Creates cursor with physics and the ability to drag for player 1.
        this.player1 = this.add.sprite(20,800-63-20,'Cursor1');
        this.game.physics.enable(this.player1,Phaser.Physics.ARCADE);
        this.player1.inputEnabled = true;
        this.player1.input.enableDrag();
        //Creates cursor with physics and the ability to drag for player 2.
        this.player2 = this.add.sprite(1000-65-20,800-66-20,'Cursor2');
        this.game.physics.enable(this.player2,Phaser.Physics.ARCADE);
        this.player2.inputEnabled = true;
        this.player2.input.enableDrag();
        //Creates button that will move to stage selection screen.
        this.stagebutton = this.add.button(this.world.centerX-145,800-100,'StageSelect',this.startGame,this);
        this.stagebutton.visible = false;
        this.player1selected = false;
        this.player2selected = false;
    },
    update: function () {
        //Stage button, characters, and stats remain invisible.
        this.stagebutton.visible = false;
        this.player1selected = false;
        this.player2selected = false;
        this.C1L.visible = false;
        this.C2L.visible = false;
        this.C3L.visible = false;
        this.C4L.visible = false;
        this.C1R.visible = false;
        this.C2R.visible = false;
        this.C3R.visible = false;
        this.C4R.visible = false;
        this.text1L.visible = false;
        this.text2L.visible = false;
        this.text3L.visible = false;
        this.text4L.visible = false;
        this.text1R.visible = false;
        this.text2R.visible = false;
        this.text3R.visible = false;
        this.text4R.visible = false;
        //Character 1 with stats for player 1 appears if cursor 1 is over character 1 slot.
        if (this.physics.arcade.overlap(this.player1,this.slot1,null,null,this)){
            this.C1L.visible = true;
            this.text1L.visible = true;
        }
        //Character 2 with stats for player 1 appears if cursor 1 is over character 2 slot.
        if (this.physics.arcade.overlap(this.player1,this.slot2,null,null,this)){
            this.C2L.visible = true;
            this.text2L.visible = true;
        }
        //Character 3 with stats for player 1 appears if cursor 1 is over character 3 slot.
        if (this.physics.arcade.overlap(this.player1,this.slot3,null,null,this)){
            this.C3L.visible = true;
            this.text3L.visible = true;
        }
        //Character 4 with stats for player 1 appears if cursor 1 is over character 4 slot.
        if (this.physics.arcade.overlap(this.player1,this.slot4,null,null,this)){
            this.C4L.visible = true;
            this.text4L.visible = true;
        }
        //Character 1 with stats for player 2 appears if cursor 2 is over character 1 slot.
        if (this.physics.arcade.overlap(this.player2,this.slot1,null,null,this)){
            this.C1R.visible = true;
            this.text1R.visible = true;
        }
        //Character 2 with stats for player 2 appears if cursor 2 is over character 2 slot.
        if (this.physics.arcade.overlap(this.player2,this.slot2,null,null,this)){
            this.C2R.visible = true;
            this.text2R.visible = true;
        }
        //Character 3 with stats for player 2 appears if cursor 2 is over character 3 slot.
        if (this.physics.arcade.overlap(this.player2,this.slot3,null,null,this)){
            this.C3R.visible = true;
            this.text3R.visible = true;
        }
        //Character 4 with stats for player 2 appears if cursor 2 is over character 4 slot.
        if (this.physics.arcade.overlap(this.player2,this.slot4,null,null,this)){
            this.C4R.visible = true;
            this.text4R.visible = true;
        }
        //Player 1 is activated if a character is selected.
        if (this.C1L.visible == true || this.C2L.visible == true || this.C3L.visible == true || this.C4L.visible == true){
            this.player1selected = true;
        }
        //Player 2 is activated if a character is selected.
        if (this.C1R.visible == true || this.C2R.visible == true || this.C3R.visible == true || this.C4R.visible == true){
            this.player2selected = true;
        }
        //Stage button appears if Player 1 and Player 2 is activated.
        if (this.player1selected == true && this.player2selected == true){
            this.stagebutton.visible = true;
        }
    },
    startGame: function (pointer) {
        this.select.play(null,null,1,false,true);
        this.select.volume = 0.2;
        //Variables move to stage selected.
        this.game.state.states['Stage'].style = this.style;
        this.game.state.states['Stage'].select = this.select;
        this.game.state.states['Stage'].music = this.music;
        //Variables for character supers move to main game.
        this.game.state.states['Game1'].char3superplayer1Activated = false;
        this.game.state.states['Game1'].char3player1turn = 0;
        this.game.state.states['Game1'].char4superplayer1Activated = false;
        this.game.state.states['Game2'].char3superplayer2Activated = false;
        this.game.state.states['Game2'].char3player2turn = 0;
        this.game.state.states['Game2'].char4superplayer2Activated = false;
        //Moves number that represents a character selected for player 1 and its reload number.
        if (this.C1L.visible == true){
            this.game.state.states['Game1'].isPlayer1 = 1;
            this.game.state.states['Game1'].reload1 = 6;
            this.game.state.states['Game2'].isPlayer1 = 1;
        }
        else if (this.C2L.visible == true){
            this.game.state.states['Game1'].isPlayer1 = 2;
            this.game.state.states['Game1'].reload1 = 1;
            this.game.state.states['Game2'].isPlayer1 = 2;
        }
        else if (this.C3L.visible == true){
            this.game.state.states['Game1'].isPlayer1 = 3;
            this.game.state.states['Game1'].reload1 = 6
            this.game.state.states['Game2'].isPlayer1 = 3;
        }
        else if (this.C4L.visible == true){
            this.game.state.states['Game1'].isPlayer1 = 4;
            this.game.state.states['Game1'].reload1 = 5;
            this.game.state.states['Game2'].isPlayer1 = 4;
        }
        //Moves number that represents a character selected for player 2 and its reload number.
        if (this.C1R.visible == true){
            this.game.state.states['Game1'].isPlayer2 = 1;
            this.game.state.states['Game2'].isPlayer2 = 1;
            this.game.state.states['Game2'].reload2 = 6;
        }
        else if (this.C2R.visible == true){
            this.game.state.states['Game1'].isPlayer2 = 2;
            this.game.state.states['Game2'].isPlayer2 = 2;
            this.game.state.states['Game2'].reload2 = 1;
        }
        else if (this.C3R.visible == true){
            this.game.state.states['Game1'].isPlayer2 = 3;
            this.game.state.states['Game2'].isPlayer2 = 3;
            this.game.state.states['Game2'].reload2 = 6;
        }
        else if (this.C4R.visible == true){
            this.game.state.states['Game1'].isPlayer2 = 4;
            this.game.state.states['Game2'].isPlayer2 = 4;
            this.game.state.states['Game2'].reload2 = 5;
        }
        this.state.start('Stage');
    }
};
