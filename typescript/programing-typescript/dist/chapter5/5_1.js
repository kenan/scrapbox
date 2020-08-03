"use strict";
function chapter5_1() {
    class Game {
    }
    //  class Piece {}
    class Piece {
        constructor(color, file, rank, Rank) {
            this.color = color;
            this.position = new Posision(file, rank);
        }
    }
    class Position {
    }
    class King extends Piece {
    }
    class Queen extends Piece {
    }
    class Bishop extends Piece {
    }
    class Knight extends Piece {
    }
    class Rook extends Piece {
    }
    class Pawn extends Piece {
    }
    class Posision {
        constructor(file, rank) {
            this.file = file;
            this.rank = rank;
        }
    }
}
//# sourceMappingURL=5_1.js.map