const escape = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string

export default {
  escape,
};