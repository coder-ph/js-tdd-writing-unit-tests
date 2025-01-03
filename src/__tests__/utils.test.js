// Your tests here
import {pointsForWord} from '../utils'

describe('pointsForWord', ()=>{
    test('calculates the total points for a word(1 point for vowel, 2 per consonant', ()=>{
        const word = 'word';
        const points = pointsForWord(word);
        expect(points).toBe(7);
    });
});