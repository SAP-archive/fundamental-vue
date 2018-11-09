export type UIComponentExampleConfig = {
  id: string; // name of .vue-file
  title: string;
  // if true then there must be a file named $id.md
  // in the same directory.
  hasDescription?: boolean;
};
