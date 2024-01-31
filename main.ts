controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (bob.vy == 0) {
        bob.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.gameOver(false)
})
let bob: Sprite = null
scene.setBackgroundColor(6)
bob = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 1 1 1 1 . . . . 
    . . . . . . . . 1 1 1 1 . . . . 
    . . . . . . . . 1 1 f f . . . . 
    . . . . . . . . 1 1 f f . . . . 
    . . . . . . . . 1 1 1 1 1 f f 5 
    . . . . . . . . 1 1 1 f . . . . 
    . . . . . . . . 1 1 1 1 . . . . 
    . . . . . . . . 1 1 1 1 . . . . 
    . . . . . . . . . 1 1 . . . . . 
    . . . . . . . . . 1 1 . . . . . 
    . . . . . . . . . 1 1 . . . . . 
    . . . . . . . . . 1 1 . . . . . 
    . . . . . . . . . 2 2 1 2 . . . 
    . . . . . . . . . f f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(bob, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
bob.ay = 350
scene.cameraFollowSprite(bob)
game.onUpdate(function () {
    bob.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 1 1 1 1 . . . . 
        . . . . . . . . 1 1 1 1 . . . . 
        . . . . . . . . 1 1 f f . . . . 
        . . . . . . . . 1 1 f f . . . . 
        . . . . . . . . 1 1 1 1 1 f f 5 
        . . . . . . . . 1 1 1 f . . . . 
        . . . . . . . . 1 1 1 1 . . . . 
        . . . . . . . . 1 1 1 1 . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . . . . 2 2 1 2 . . . 
        . . . . . . . . . f f f f . . . 
        `)
    if (bob.vx < 0) {
        bob.image.flipX()
    }
    if (bob.vy < 0) {
        bob.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 1 1 1 1 . . . . 
            . . . . . . . . 1 1 1 1 . . . . 
            . . . . . . . . 1 1 f f . . . . 
            . . . . . . . . 1 1 f f . . . . 
            . . . . . . . . 1 1 1 1 . . . . 
            . . . . . . . . 1 1 1 f 1 f f 5 
            . . . . . . . . 1 1 1 1 . . . . 
            . . . . . . . . 1 1 1 1 . . . . 
            . . . . . . . . 1 1 1 1 1 1 . . 
            . . . . . . . . 1 1 1 1 1 1 . . 
            . . . . . . . f 2 1 . . 1 1 . . 
            . . . . . . . . f 2 . . 2 2 1 2 
            . . . . . . . . . f 1 . f f f f 
            . . . . . . . . . . f . . . . . 
            `)
    } else if (bob.vy < 0) {
        bob.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 1 1 1 . . . . . 
            . . . . . . . 1 1 1 1 . . . . . 
            . . . . . . . 1 1 f f . . . . . 
            . . . . . . . 1 1 f f . . . . . 
            . . . . . . . 1 1 1 1 1 f f 5 . 
            . . . . . . . 1 1 1 f . . . . . 
            . . . . . . . 1 1 1 1 . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . f 2 f 2 1 1 1 . . . . . . 
            . . . f 2 f 2 1 1 1 . . . . . . 
            . . . f 1 f 1 . . . . . . . . . 
            . . . f 2 f 2 . . . . . . . . . 
            `)
    } else if (bob.x % 2 == 0) {
        bob.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 1 1 1 1 . . . . 
            . . . . . . . . 1 1 1 1 . . . . 
            . . . . . . . . 1 1 f f . . . . 
            . . . . . . . . 1 1 f f . . . . 
            . . . . . . . . 1 1 1 1 1 f f 5 
            . . . . . . . . 1 1 1 f . . . . 
            . . . . . . . . 1 1 1 1 . . . . 
            . . . . . . . . 1 1 1 1 . . . . 
            . . . . . . . . . 1 1 . . . . . 
            . . . . . . . . . 1 1 . . . . . 
            . . . . . f 2 1 1 1 1 . . . . . 
            . . . . . f 2 1 1 1 1 . . . . . 
            . . . . . f 1 . . 2 2 1 2 . . . 
            . . . . . f 2 . . f f f f . . . 
            `)
    } else {
    	
    }
})
