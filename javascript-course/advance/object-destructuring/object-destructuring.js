const classDetails = {
    strength: 78,
    benches: 39,
    blackBoard: 1
}

const classStrength = classDetails.strength;
const classBenches = classDetails.benches;
const classBlackBoard = classDetails.blackBoard;

console.log('before object-destructuring', classStrength, classBenches, classBlackBoard)

const classDetails2 = {
    _strength: 78,
    _benches: 39,
    _blackBoard: 1
}

const { strength: _classStrength, benches: _classBenches, blackBoard: _classBlackBoard } = classDetails2;

console.log(classStrength); // Outputs 78
console.log(classBenches); // Outputs 39
console.log(classBlackBoard); // Outputs 1


// before  destructuring
const arr = [1, 2, 3, 4];
const first = arr[0];
const second = arr[1];
const third = arr[2];
const fourth = arr[3];

// after  destructuring
const _arr = [1, 2, 3, 4];
const [_first, _second, _third, _fourth] = arr;

console.log(_first); // Outputs 1
console.log(_second); // Outputs 2
console.log(_third); // Outputs 3
console.log(_fourth); // Outputs 4