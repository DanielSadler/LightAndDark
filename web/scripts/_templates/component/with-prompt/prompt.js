// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'select',
    name: 'atomic',
    message: 'What type of component?',
    choices: ['Atom', 'Molecule', 'Organism', 'Template', 'Page'],
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your component?',
  },
];
