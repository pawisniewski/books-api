const formatFullName = require('../formatFullName.js');
const expect = require('chai').expect;

describe('FormatFullName', () => {
    
    it('should return an error if "fullName" arg is not a string or is not provided', () => {
      expect(formatFullName(undefined)).to.equal('Error');
      expect(formatFullName()).to.equal('Error');
      expect(formatFullName(20)).to.equal('Error');
      expect(formatFullName({})).to.equal('Error');
      expect(formatFullName([])).to.equal('Error');
      expect(formatFullName(function() {})).to.equal('Error');
    });
    
    it('should return an error if "fullName" arg format is not <firstname> <lastname>', () => {
      expect(formatFullName('John')).to.equal('Error');
      expect(formatFullName('Doe')).to.equal('Error');
      expect(formatFullName('John Doe Junior')).to.equal('Error');
    });
    
    it('should return correct full name when given proper arg', () => {
      expect(formatFullName('JOHN DOE')).to.equal('John Doe');
      expect(formatFullName('john doe')).to.equal('John Doe');
      expect(formatFullName('jOHN dOE')).to.equal('John Doe');
      expect(formatFullName('JoHn DoE')).to.equal('John Doe');
      expect(formatFullName('jOhN dOe')).to.equal('John Doe');
    });
});
