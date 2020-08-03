function chapter5_1 () {
  class Game {}

//  class Piece {}

  class Piece {
    protected position: Posision
    constructor(
      private readonly color: Color,
      file: File,
      rank, Rank
    ) {
      this.position = new Posision(file, rank)
    }
  }

  class Position {}

  class King extends Piece {}
  class Queen extends Piece {}
  class Bishop extends Piece {}
  class Knight extends Piece {}
  class Roosssssssssssssssssssk extends Piece {}
  class Pawn extends Piece {}
  
  type Color = 'Black' | 'White'
  type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
  type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

  class Posision {
    constructor(
      private file: File,
      private rank: Rank
    ) {}
  }
}