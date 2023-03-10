interface Human {
  name:string;
  hobbies: string[];
}

interface Developer extends Human {
  code: () => void;
}

const me: Developer = {
  // eslint-disable-next-line no-console
  code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
  name: 'Corrina',
  hobbies: ['Building rockets']
};

me.code();
