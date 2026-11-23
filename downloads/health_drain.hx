function onDadHit(direction:Int) {
    var currentHealth:Float = PlayState.instance.health;

    if (currentHealth > 0.1) {
        PlayState.instance.health = currentHealth - 0.020;
    }
}