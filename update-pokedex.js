const fs = require('fs');

// 读取原始数据
const data = JSON.parse(fs.readFileSync('pokemon-data/pokedex.json', 'utf8'));

// 更新数据 - 添加图片路径和属性字段
const updatedData = data.map(pokemon => {
    return {
        ...pokemon,
        image: `pokemon-data/images/${pokemon.index}-${pokemon.name}.png`,
        types: []
    };
});

// 写回文件
fs.writeFileSync('pokemon-data/pokedex.json', JSON.stringify(updatedData, null, 2), 'utf8');
console.log('更新完成！共处理', updatedData.length, '个宝可梦');
