(function(){
    "use strict";

    QUnit.module("Board", {
        beforeEach: function() {
            $.mockjax.clear();
            sessionStorage.clear();

            this.$fixture = $("#qunit-fixture");
            this.$chooserPanel = $("#color-chooser");
            this.$board = this.$fixture.find("#bingo");

            this.getBoardUrl = "/fake/get/board/url";
            this.selectGoalUrl = "/fake/select/goal/url";

            this.boardData = [
                {"name": "goal 1", "slot": "slot1", "colors": "blank"},
                {"name": "goal 2", "slot": "slot2", "colors": "blank"},
                {"name": "goal 3", "slot": "slot3", "colors": "blank"},
                {"name": "goal 4", "slot": "slot4", "colors": "blank"},
                {"name": "goal 5", "slot": "slot5", "colors": "blank"},
                {"name": "goal 6", "slot": "slot6", "colors": "blank"},
                {"name": "goal 7", "slot": "slot7", "colors": "blank"},
                {"name": "goal 8", "slot": "slot8", "colors": "blank"},
                {"name": "goal 9", "slot": "slot9", "colors": "blank"},
                {"name": "goal 10", "slot": "slot10", "colors": "blank"},
                {"name": "goal 11", "slot": "slot11", "colors": "blank"},
                {"name": "goal 12", "slot": "slot12", "colors": "blank"},
                {"name": "goal 13", "slot": "slot13", "colors": "blank"},
                {"name": "goal 14", "slot": "slot14", "colors": "blank"},
                {"name": "goal 15", "slot": "slot15", "colors": "blank"},
                {"name": "goal 16", "slot": "slot16", "colors": "blank"},
                {"name": "goal 17", "slot": "slot17", "colors": "blank"},
                {"name": "goal 18", "slot": "slot18", "colors": "blank"},
                {"name": "goal 19", "slot": "slot19", "colors": "blank"},
                {"name": "goal 20", "slot": "slot20", "colors": "blank"},
                {"name": "goal 21", "slot": "slot21", "colors": "blank"},
                {"name": "goal 22", "slot": "slot22", "colors": "blank"},
                {"name": "goal 23", "slot": "slot23", "colors": "blank"},
                {"name": "goal 24", "slot": "slot24", "colors": "blank"},
                {"name": "goal 25", "slot": "slot25", "colors": "blank"}];

            window.sessionStorage.setItem("room", "some_room_id");
        }
    });

    QUnit.test("loads board", function(assert) {
        var player = {is_spectator: false, color: "blue"};
        var colorChooser = new ColorChooser($("#color-chooser"), player, "");
        var board = new Board(this.$board, player, colorChooser, this.getBoardUrl, this.selectGoalUrl);

        assert.expect(25);
        var done = assert.async();
        $.mockjax({
            url: this.getBoardUrl,
            responseText: this.boardData,
            onAfterSuccess: function() {
                for (var i = 0; i < 25; i++) {
                    var square = board.squares[i];
                    var expectedText = "goal " + (i + 1);
                    assert.strictEqual(square.$square.text(), expectedText);
                }
                done();
            }
        });

        board.reloadBoard();
    });

    QUnit.test("applies color to square on click", function(assert) {
        var player = {is_spectator: false, color: "blue"};
        var colorChooser = new ColorChooser($("#color-chooser"), player, "");
        var board = new Board(this.$board, player, colorChooser, this.getBoardUrl, this.selectGoalUrl);

        $.mockjax({
            url: this.selectGoalUrl,
            data: assert.dataJsonEquals({room: "some_room_id", slot: "7", color: "blue", remove_color: false}),
            onAfterSuccess: assert.async()
        });

        board.setJson(this.boardData);
        board.$board.find("#slot7").click();
    });

    QUnit.test("clears color on click when already colored", function(assert) {
        var player = {is_spectator: false, color: "blue"};
        var colorChooser = new ColorChooser($("#color-chooser"), player, "");
        var board = new Board(this.$board, player, colorChooser, this.getBoardUrl, this.selectGoalUrl);

        $.mockjax({
            url: this.selectGoalUrl,
            data: assert.dataJsonEquals({room: "some_room_id", slot: "6", color: "blue", remove_color: true}),
            onAfterSuccess: assert.async()
        });

        this.boardData[5].colors = "blue";
        board.setJson(this.boardData);
        board.$board.find("#slot6").click();
    });

    QUnit.test("adds second color when not in lockout", function(assert) {
        var player = {is_spectator: false, color: "blue"};
        var colorChooser = new ColorChooser($("#color-chooser"), player, "");
        var board = new Board(this.$board, player, colorChooser, this.getBoardUrl, this.selectGoalUrl);

        $.mockjax({
            url: this.selectGoalUrl,
            data: assert.dataJsonEquals({room: "some_room_id", slot: "6", color: "blue", remove_color: false}),
            onAfterSuccess: assert.async()
        });

        ROOM_SETTINGS = {lockout_mode: "Non-Lockout"};
        this.boardData[5].colors = "green";
        board.setJson(this.boardData);
        board.$board.find("#slot6").click();
    });

    QUnit.test("does not add second color when in lockout", function(assert) {
        var player = {is_spectator: false, color: "blue"};
        var colorChooser = new ColorChooser($("#color-chooser"), player, "");
        var board = new Board(this.$board, player, colorChooser, this.getBoardUrl, this.selectGoalUrl);

        // set up a select handler to fail the test if it's called
        $.mockjax({
            url: this.selectGoalUrl,
            response: function(r) {
                assert.notOk(true, "select called with: " + JSON.stringify(r));
            }
        });

        ROOM_SETTINGS = {lockout_mode: "Lockout"};
        this.boardData[5].colors = "green";
        board.setJson(this.boardData);
        board.$board.find("#slot6").click();

        // wait a bit  to see if the handler fires
        assert.expect(0);
        setTimeout(assert.async(), 100);
    });
})();
