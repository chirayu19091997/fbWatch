import custom from "./common";

const getAll = () => {
  return custom.get();
};

const get = (id) => {
  return custom.get(`/${id}`);
};

const create = (data) => {
  return custom.post(data);
};

const update = (id, data) => {
  return custom.patch(`/${id}`, data);
};

const replace = (id, data) => {
  return custom.put(`/${id}`, data);
};

const remove = (id) => {
  return custom.delete(`/${id}`);
};

const manage = {
  getAll,
  get,
  create,
  update,
  replace,
  remove,
};

export default manage;
