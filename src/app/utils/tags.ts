type TagMakingFunction = (content: string) => string;
type TagMaker = (tag: string) => TagMakingFunction;

export const tagMaker: TagMaker = (tag: string) => (content: string) => `<${tag}>${content}</${tag}>`;

export const PI = 3.14;

export interface Pizza {
  toppings: string[],
  crust: 'thin' | 'medium' | 'pan'
}
