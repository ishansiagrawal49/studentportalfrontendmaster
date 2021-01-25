export const branchNames = [
  'Computer Engineering',
  'Electronics and Communication Engineering',
  'Electrical Engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Chemical Engineering',
  'Metallurgical & Materials Engineering',
];

export const branchCodes = ['CP', 'EC', 'EE', 'ME', 'CE', 'CH', 'MT'];

export const semesters = [
  '1st(Physics)',
  '2nd(Chemistry)',
  '3rd',
  '4th',
  '5th',
  '6th',
  '7th',
  '8th',
];

export const subjects = {
  CP: {
    [semesters[0]]: [],
    [semesters[1]]: [],
    [semesters[2]]: [],
    [semesters[3]]: [],
    [semesters[4]]: [],
    [semesters[6]]: [],
    [semesters[7]]: [],
  },

  EC: {
    [semesters[0]]: [],
    [semesters[1]]: [],
    [semesters[2]]: [
      ['ECT 201 Electronic Devices & Circuits', 'ECT 201'],
      ['ECT 202 Switching Theory & Finite Automata PC Theory', 'ECT 202'],
      ['ECT 203 Network Theory PC Theory', 'ECT 203'],
      ['ECT 204 Probabilistic Methods in Signals & Systems PC Theory', 'ECT 204'],
      ['ECT 205 Graph Theory PC Theory', 'ECT 205'],
      ['ECT 206 Data Structures & Algorithms PC Theory', 'ECT 206'],
      ['ECP 201 Electronic Devices & Circuits Lab', 'ECP 201'],
      ['ECP 202 Switching Theory & Finite Automata Lab', 'ECP 202'],
      ['ECP 204 Data Structures & Algorithms Lab', 'ECP 204'],
      ['ECP 206 Probabilistic Methods in Signals & System', 'ECP 206'],
    ],
    [semesters[3]]: [],
    [semesters[4]]: [],
    [semesters[6]]: [],
    [semesters[7]]: [],
  },

  EE: {
    [semesters[0]]: [],
    [semesters[1]]: [],
    [semesters[2]]: [],
    [semesters[3]]: [],
    [semesters[4]]: [],
    [semesters[6]]: [],
    [semesters[7]]: [],
  },

  ME: {
    [semesters[0]]: [],
    [semesters[1]]: [],
    [semesters[2]]: [],
    [semesters[3]]: [],
    [semesters[4]]: [],
    [semesters[6]]: [],
    [semesters[7]]: [],
  },

  CE: {
    [semesters[0]]: [],
    [semesters[1]]: [],
    [semesters[2]]: [],
    [semesters[3]]: [],
    [semesters[4]]: [],
    [semesters[6]]: [],
    [semesters[7]]: [],
  },

  CH: {
    [semesters[0]]: [],
    [semesters[1]]: [],
    [semesters[2]]: [],
    [semesters[3]]: [],
    [semesters[4]]: [],
    [semesters[6]]: [],
    [semesters[7]]: [],
  },

  MT: {
    [semesters[0]]: [],
    [semesters[1]]: [],
    [semesters[2]]: [],
    [semesters[3]]: [],
    [semesters[4]]: [],
    [semesters[6]]: [],
    [semesters[7]]: [],
  },
};
