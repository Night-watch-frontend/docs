import { makeAutoObservable, runInAction } from "mobx";
import { DataFile } from "../services";
import { services } from "../services";

export const store = makeAutoObservable({
  state: {
    title: "",
    path: "",
    documents: [] as DataFile[],
    listCategories: [] as { name: string }[],
  },

  async fetchFileForCategory(category: string) {
    try {
      const res = await services.getFileForCategory(category);
      runInAction(() => {
        if (res.length === 0) {
          this.state.title = category;
          this.state.documents = [];
          return;
        }
        this.state.documents = res;
        this.state.title = category;
      });
    } catch (error) {
      console.log(error);
    }
  },

  async fetchAllFiles() {
    try {
      const res = await services.getAllFiles();
      runInAction(() => {
        if (res.length === 0) return;
        this.state.documents = res;
        this.state.title = "Все документы";
      });
    } catch (error) {
      console.log(error);
    }
  },

  async fetchCategories() {
    try {
      const res = await services.getListCategories();
      runInAction(() => {
        if (res.length === 0) return;
        this.state.listCategories = res;
      });
    } catch (error) {
      console.log(error);
    }
  },

  async fetchFile(path: string) {
    try {
      this.state.path = "";
      const res = await services.getFile(path);
      runInAction(() => {
        if (res) this.state.path = res.href;
      });
    } catch (error) {
      console.log(error);
    }
  },

  async delete(path: string) {
    try {
      const res = await services.deleteFile(path);
      runInAction(() => {
        if (res === 202 || res === 204) {
          this.state.documents = this.state.documents.filter(
            (item) => item.name !== path.split("/").pop()
          );
          this.state.path = "";
        }
      });
    } catch (error) {
      console.log(error);
    }
  },

  async move(from: string, to: string) {
    try {
      const res = await services.moveFile(from, to);
      runInAction(() => {
        if (res === 201) {
          this.state.documents = this.state.documents.filter(
            (item) => item.name !== from.split("/").pop()
          );
          this.state.path = "";
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
});
