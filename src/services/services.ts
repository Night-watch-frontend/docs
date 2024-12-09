import { $api } from "../http/axiosConfig";
import { Category, CategoryItem, HrefImg, ListFiles } from "./types";

export const services = {
  async getFile(path: string) {
    const response = await $api.get<HrefImg>(
      `/download?path=CaseLabDocuments/${path}&fields=href`
    );
    return response.data;
  },

  async getAllFiles() {
    const response = await $api.get<ListFiles>(
      "/files?fields=items.name%2Citems.path%2Citems.preview"
    );
    return response.data.items;
  },

  async getFileForCategory(category: string) {
    const response = await $api.get<Category>(
      `?path=CaseLabDocuments/${category}&fields=_embedded.items.name%2C_embedded.items.preview`
    );
    return response.data._embedded.items;
  },

  async getListCategories() {
    const response = await $api.get<CategoryItem>(
      "?path=CaseLabDocuments&fields=_embedded.items.name"
    );
    return response.data._embedded.items;
  },

  async moveFile(pathFrom: string, pathTo: string) {
    const response = await $api.post(
      `/move?from=CaseLabDocuments${pathFrom}&path=CaseLabDocuments${pathTo}`
    );
    return response.status;
  },

  async deleteFile(path: string) {
    const response = await $api.delete(`?path=CaseLabDocuments${path}`);
    return response.status;
  },
};
