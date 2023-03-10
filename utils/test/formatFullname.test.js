const formatFullName = require('../formatFullname.js');
const expect = require('chai').expect;


describe('FormatFullName', () => {

    it('should return an error if "fullName" arg is empty', () => {
        expect(formatFullName()).to.equal('Error');
        expect(formatFullName(``)).to.equal('Error');
    });

    it('should return an error if "fullName" arg is not string', () => {
        expect(formatFullName(10)).to.equal('Error');
        expect(formatFullName({})).to.equal('Error');
        expect(formatFullName(null)).to.equal('Error');
        expect(formatFullName(undefined)).to.equal('Error');
        expect(formatFullName([])).to.equal('Error');
    });

    it('should return an error if "fullName" arg is not in "firstName lastName" convention.', () => {
        expect(formatFullName(`Mikołaj`)).to.equal('Error');
        expect(formatFullName(`Mikołaj Chojnacki Mikołaj`)).to.equal('Error');
    });

    it('should return an "fullName" in proper format.', () => {
        expect(formatFullName(`John Doe`)).to.equal('John Doe');
        expect(formatFullName(`John Doe John`)).to.equal('Error');
        expect(formatFullName(`John`)).to.equal('Error');
    });

});