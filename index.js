const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const arrayElements = tutorials.map((element)=>{
    const splitElements = element.split('');

    const upperCase = splitElements.map((elements)=>{
      const capitalize = elements[0].toUpperCase()+elements.slice(1);
      return capitalize;
    })
    const joinString = upperCase.join(' ');
    console.log(joinString);
    return joinString;
  })
  return arrayElements;
}

