import { getMonstersFromRepository, updateMonstersInRepository, deleteMonsterFromRepository, createMonstersInRepository, countMonstersInRepository } from "../repositories/monster.repository.js";

export const getMonsters = async (req, res) => {
    try {
        const monsters = await getMonstersFromRepository({});
        res.status(200).send(monsters);
    } catch (e) {
        res.status(500).send(`failed to fetch list of monsters`);
    }
}

export const getMonster = async (req, res) => {
    const { id } = req.params;
    try {
        const monster = await getMonstersFromRepository({id: id});
        res.status(200).send(monster);
    } catch (e) {
        res.status(500).send(`failed to fetch monster ${id}`);
    }
}

export const updateMonster = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const monster = await updateMonstersInRepository({id: id}, body);
        res.status(200).send(monster);
    } catch (e) {
        res.status(500).send(`failed to fetch monster ${id}`);
    }
}

export const deleteMonster = async (req, res) => {
    const { id } = req.params;
    try {
        const monster = await deleteMonsterFromRepository({id: id});
        if (monster) {
            res.status(204).send();
        } else {
            res.status(404).send(`failed to delete monster ${id}`);
        };
    } catch (e) {
        res.status(500).send(`failed to delete monster ${id}`);
    }
}

export const createMonster = async (req, res) => {
    const { body } = req;
    try {
        const monsterCount = await countMonstersInRepository();
        const monsterWithID = { id: monsterCount, ...body };
        const monster = await createMonstersInRepository(monsterWithID);
        res.status(200).send(monster);
    } catch (e) {
        res.status(500).send(`failed to create monster`);
    }
}