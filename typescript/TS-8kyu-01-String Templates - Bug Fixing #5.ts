/*
  Kata-name => String Templates - Bug Fixing #5

Description => Oh no! Timmy hasn't followed instructions very carefully and forgot how to use
               the new String Template feature, Help Timmy with his string template so it works as he expects!

   Examples => {
                   ('Cheese','Milk','Chocolate') => 'I like Cheese, Milk, Chocolate!'
                              ('Cheese', 'Milk') => 'I like Cheese, Milk!'
   }
*/ //=========================================================

export function buildString(...template: string[]): string {
  return `I like ${template.join(", ")}!`;
}

console.log(buildString("Cheese", "Milk", "Chocolate"));
