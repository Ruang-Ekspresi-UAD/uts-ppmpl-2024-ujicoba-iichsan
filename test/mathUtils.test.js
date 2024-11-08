// test/mathUtils.test.js

const add = require('../mathUtils'); // Mengimpor fungsi add
const { expect } = require('chai'); // Mengimpor expect dari Chai

describe('Pengujian fungsi add', () => {
    it('seharusnya menambahkan dua angka positif', () => {
        expect(add(2, 3)).to.equal(5);
        expect(add(10, 15)).to.equal(25);
    });

    it('seharusnya menambahkan dua angka negatif', () => {
        expect(add(-1, -1)).to.equal(-2);
        expect(add(-5, -10)).to.equal(-15);
    });

    it('seharusnya menambahkan angka positif dan negatif', () => {
        expect(add(-1, 1)).to.equal(0);
        expect(add(10, -5)).to.equal(5);
    });

    it('seharusnya menambahkan nol dengan benar', () => {
        expect(add(0, 0)).to.equal(0);
        expect(add(0, 5)).to.equal(5);
    });
});
