export type DataFile = {
  name: string;
  path: string;
  preview: string;
};
export type ListFiles = {
  items: DataFile[];
};

export type Category = {
  _embedded: ListFiles;
};

export type HrefImg = {
  href: string;
};

export type CategoryItem = {
  _embedded: {
    items: {
      name: string;
    }[];
  };
};
