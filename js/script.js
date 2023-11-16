const char = createKnight('Claudine');
const monster = createLitteMonster();


stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
)