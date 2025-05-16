
import { expect } from 'chai';
import { shuffle } from '../src/shuffle.js';

describe('shuffle', () => {
  it('should shuffle the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = shuffle([...arr]);

    expect(shuffledArr).to.not.deep.equal(arr);
    expect(shuffledArr.sort()).to.deep.equal(arr.sort());
  });

  it('should handle an empty array', () => {
    const emptyArr = [];
    const shuffledEmptyArr = shuffle(emptyArr);
    expect(shuffledEmptyArr).to.deep.equal(emptyArr);
  });

  it('should handle an array with one element', () => {
    const singleArr = [1];
    const shuffledSingleArr = shuffle(singleArr);
    expect(shuffledSingleArr).to.deep.equal(singleArr);
  });

  it('should handle an array with duplicate elements', () => {
    const duplicateArr = [1, 2, 2, 3, 4, 4];
    const shuffledDuplicateArr = shuffle([...duplicateArr]);

    expect(shuffledDuplicateArr).to.not.deep.equal(duplicateArr);
    expect(shuffledDuplicateArr.sort()).to.deep.equal(duplicateArr.sort());
  });

  it('should handle an array with negative numbers', () => {
    const negativeArr = [-1, -2, -3, -4, -5];
    const shuffledNegativeArr = shuffle([...negativeArr]);

    expect(shuffledNegativeArr).to.not.deep.equal(negativeArr);
    expect(shuffledNegativeArr.sort()).to.deep.equal(negativeArr.sort());
  });

  it('should handle an array with mixed data types', () => {
    const mixedArr = [1, 'a', 2, 'b', 3, 'c'];
    const shuffledMixedArr = shuffle([...mixedArr]);

    expect(shuffledMixedArr).to.not.deep.equal(mixedArr);
    expect(shuffledMixedArr.sort()).to.deep.equal(mixedArr.sort());
  });

  it('should handle a large array', () => {
    const largeArr = Array.from({ length: 1000 }, (_, i) => i);
    const shuffledLargeArr = shuffle([...largeArr]);

    expect(shuffledLargeArr).to.not.deep.equal(largeArr);
    expect(shuffledLargeArr.sort()).to.deep.equal(largeArr.sort());
  });

  it('should not modify the original array', () => {
    const originalArr = [1, 2, 3];
    const copyArr = [...originalArr];
    shuffle(copyArr);
    expect(copyArr).to.deep.equal(originalArr);
  });

  it('should return a new array', () => {
    const originalArr = [1, 2, 3];
    const shuffledArr = shuffle(originalArr);
    expect(shuffledArr).to.not.equal(originalArr);
  });
});