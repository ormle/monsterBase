import Monster from "../models/monster.model.js"

export const getMonstersFromRepository = async (query) => {
    try {
        const monsters = await Monster.find(query);
        return monsters;
    } catch (e) {
        throw Error("Error while fetching monsters");
    }
}

export const updateMonstersInRepository = async (query, update) => {
    try {
        const monster = await Monster.findOneAndUpdate(
            { ...query },
            { ...update },
            { new: true }
        ).lean();
        return monster;
    }catch (e) {
        throw Error("Error while updating monster");
    }
}

export const deleteMonsterFromRepository = async (query) => {
    try {
        const monster = await Monster.findOneAndDelete({ ...query });
        return monster;
    } catch (e) {
        throw Error("Error while deleting monster");
    }
}

export const createMonstersInRepository = async (payload) => {
    try{
        
        const newMonster = new Monster(payload);
        const savedMonster = await newMonster.save();
        console.log(savedMonster);
        return savedMonster;
    } catch (e) {
        throw Error("Error while creating a monster");
    }
}

export const countMonstersInRepository = async () => {
    try {
        let count = await Monster.countDocuments();  
        return count+1;
    } catch (e) {
        throw Error("Error while counting monsters in repository");
    }
}